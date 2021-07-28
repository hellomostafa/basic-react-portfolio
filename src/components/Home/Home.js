import React from 'react';
import Header from '../Header/Header';
import Testimonial from '../Testimonial/Testimonial'
import './Home.css';




const Home = () => {


    return (
        <div>
            
        
           <div id="header">
               <Header/>
           </div>

           <div id="testimonial">
               <Testimonial/>
           </div>



        </div>
    );
};

export default Home;


