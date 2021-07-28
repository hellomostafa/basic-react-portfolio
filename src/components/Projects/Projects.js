import React from 'react';
import './Projects.css';
import prevProjects from '../../fakeData/PrevProjects';

import { useState } from 'react';
import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow  } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectCoverflow ]);

const Projects = () => {
        const [projects, setProjects] = useState(prevProjects)

    useEffect(() => {
        fetch(projects)
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [projects])

    //console.log(projects)

    return (
        <div className="prevProjects">
            
            <div className="title">
                <h5>MY CLIENT</h5>
                <h3>My Projects</h3>
            </div>

            <Swiper 
             effect={'coverflow'}
             grabCursor={true}
             centeredSlides={true} 
            //  slidesPerView={'auto'} 
             coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": true
            }}
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    projects.map(project => (
                        <SwiperSlide className="slide prevProjects">
                            <div className="prevPImg">
                                <img src={project.img} alt="" />
                            </div>
                            <div className="prvPDetails">
                                <h4>{project.name}</h4>
                                <div className="links">
                                    <a href={project.github} rel="noreferrer" target="_blank">Github</a>
                                    <a href={project.live} rel="noreferrer" target="_blank">Live</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            
            
            </Swiper>
            
        </div>
    );
};

export default Projects;