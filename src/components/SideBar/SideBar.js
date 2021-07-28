import React from 'react';
import './SideBar.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaSkype} from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="sideBar" id="responsiveNav">
            <div className="logo">
                <Link to="/">
                     <img src={logo} alt="" />
                </Link>
               
            </div>
            <div className="menus text-center">
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="connect">
               <div className="social-links text-center">

                   <a href="https://github.com/amirmostofaa" title="Check out My work on Github" rel="noreferrer" target="_blank">
                        <FaGithub/>
                   </a>
                   <a href="https://www.linkedin.com/in/amirmostofaa/" title="Connect on LinkedIn" rel="noreferrer" target="_blank">
                        <FaLinkedinIn/>
                   </a>
                   <a href="skype:live:iammostafa76?chat" title="Let's talk on Skype" rel="noreferrer" target="_blank">
                        <FaSkype/>
                   </a>
                   
               </div>

               <p>Copyright @ {new Date().getFullYear()}</p>

            </div>
        </div>
    );
};

export default SideBar;