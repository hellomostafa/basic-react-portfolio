import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div  className="contact-form-area">
                
                        <form action="#">
                            <div className="contact-form">
                                    <div className="col-md-10">
                                        <div className="row">
                                            <div className="contact-title">
                                                
                                                <h5 className="intro">CONTACT ME</h5>
                                                <h3 className="title">Let’s Chat</h3>
                                                
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="contact-input-box">
                                                    <input type="text" placeholder="Full name"/>
                                                </div>
                                                
                                                
                                                <div className="contact-input-box">
                                                    <input type="text" placeholder="Phone number"/>
                                                </div>

                                                
                                                
                                            </div>
                                            <div className="col-md-6">
                                                <div className="contact-input-box">
                                                    <input type="email" placeholder="Email address"/>
                                                </div>
                                                
                                                <div className="contact-input-box">
                                                    <textarea placeholder="Message"></textarea>
                                                </div>
                                                <button>Send</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                        </form>
                        
        </div>
    );
};

export default Contact;