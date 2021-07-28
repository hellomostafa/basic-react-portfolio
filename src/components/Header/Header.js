import React from 'react';
import './Header.css';
import welcomeImg from '../../images/amir.png';
import { Link } from 'react-router-dom';

const Header = () => {

    

    return (
        <div>
            

             <div className="welcome-area">
                 
                <div className="col-md-6 welcome-text">
                    <h4>Hello, I'm</h4>
                    <h1>Amir Mostofaa</h1>
                    <h3> Front end Developer  </h3>

                    <div className="mybtn">
                        <button className="resume">Get Resume</button>
                        <Link to="/about">
                        <button>About Me</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 welcomeImg">
                    <img src={welcomeImg} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Header;