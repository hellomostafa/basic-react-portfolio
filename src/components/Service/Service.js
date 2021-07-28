import React from 'react';
import './Service.css';
import webdev from '../../images/webdev.png';
import resp from '../../images/responsive.png';
import wp from '../../images/wp.png';
import psdtohtml from '../../images/psdtohtml.png';

const Service = () => {
    return (
        <div>
            <div className="services">
                <div className="services-title">
                    <h5>WHAT I OFFER</h5>
                    <h3>My Services</h3>
                </div>
                <div className="col-md-3 text-center single-service">
                    <img src={webdev} alt="" />
                    <h4>Web Development</h4>
                    <p>HTML, CSS (Bootstrap, Foundation), JavaScript (React, Node, Express, MongoDB) ? You name it. I have it all covered!</p>
                </div>
                <div className="col-md-3 text-center single-service">
                    <img src={resp} alt="" />
                    <h4>Responsive Design</h4>
                    <p>In 2021 you can't go online without having a mobile responsive website. Let me take care of that for you!</p>
                </div>
                <div className="col-md-3 text-center single-service">
                    <img src={wp} alt="" />
                    <h4>Wordpress</h4>
                    <p>Millions of website are built on top of Wordpress, yours can become the next one!</p>
                </div>
                <div className="col-md-3 text-center single-service">
                    <img src={psdtohtml} alt="" />
                    <h4>PSD to HTML</h4>
                    <p>Do you have a nice design in photoshop or even sketch? Contact me and I'll convert them into fully responsive, nice looking websites!</p>
                </div>
            </div>
        </div>
    );
};

export default Service;