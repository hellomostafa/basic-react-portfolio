import React from 'react';
import './Testimonial.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Reviews from '../../fakeData/PrevTestimonials';
import qouteImg from '../../images/quote.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);

const Testimonial = () => {
    
    const [reviews, setReviews] = useState(Reviews)

    useEffect(() => {
        fetch(Reviews)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [reviews])

    //console.log(reviews)
    return (
        <div>
            <div className="testimonial">
               
                <div className="title">
                    <h5>DON'T TRUST ME?</h5>
                    <h3>See what others say</h3>
                </div>
                
                <div className="qoute">
                    <img src={qouteImg} alt="" className="img-fluid"/>
                </div>
                
            </div>

        
            <Swiper 
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            autoplay={{autoplay: true}}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    reviews.map(review => (
                        <SwiperSlide className="slide">
                            <div className="review">
                                <p>{review.review}</p>
                            </div>
                            <div className="client-info">
                                <div className="name">
                                    <h4>{review.name}</h4> 
                                    <p> - {review.platform}</p>
                                    
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            
            
            </Swiper>
            
        </div>
    );
};

export default Testimonial;