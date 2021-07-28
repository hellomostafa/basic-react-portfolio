import React from 'react';
import './About.css';
import aboutImg from '../../images/m.svg'
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const About = () => {
    return (
        <div>
            <div className="about-me">

                <div className="col-md-12">
                    <h5>BEHIND</h5>
                    <h3>The Story</h3>
                    
                </div>

                <div className="col-md-6">
                     <p>My journey began in 2019 when a good friend of mine introduced me to the world of web development. When we started learning HTML, I was immediately blown away by CSS!</p>

                     <p>A few months later, I opened a <a href="https://www.fiverr.com/amirmostofaa" target="_blank" title="See my Fiverr Profile" rel="noreferrer">Fiverr</a>  account and started selling there. Since some clients liked my work, I was able to land some long-term contracts.</p>

                     <p>Initially, I began learning JQuery to improve my web skills, but when I realized that it is built on top of JavaScript, I dropped it and began learning Vanilla JS, and then later I chose ReactJS, which I believe will be most helpful for me in the long term. Additionally, I added NodeJS (backend) to my skillset so I could perform Full-Stack JavaScript development. :)</p>

                     <p>Eventually, I switched to <a href="https://www.upwork.com/freelancers/~01e9d559e4401ba673" target="_blank" title="See my Upwork Profile" rel="noreferrer">Upwork</a> because they seemed to be more concerned about their freelancers.</p>

                    <p>As mentioned above, I specialize in HTML/CSS and JavaScript on the front end. However, I'm fairly comfortable with ReactJS, NodeJS, MongoDB, Firebase, WordPress, and Shopify.</p>

                    <p><Link to="/contact">Get in touch</Link>  with me, and I'll help you take your website to the next level!</p>

                    <Link to="/projects">
                        <button>My Projects</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <img src={aboutImg} alt="" />
                </div>

               
                    

                    

                    
                
               
            </div>
            <Service/>
            
        </div>
    );
};

export default About;