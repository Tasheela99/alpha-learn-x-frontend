import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "../assets/css/FooterComponent.css" // Adjust the path as necessary

const FooterComponent = () => {
    return (
        <footer className="bg-light py-4 border-top">
            <div className="container">
                <div className="row justify-content-between">
                    {/* Contact Info */}
                    <div className="col-md-4">
                        <p>
                            <i className="fa-solid fa-envelope me-2"></i> hello@AlphaLearnX.com
                        </p>
                        <p>
                            <i className="fa-solid fa-phone me-2"></i> +94718771343
                        </p>
                        <p>
                            <i className="fa-solid fa-location-dot me-2"></i> University of Colombo
                        </p>
                    </div>

                    {/* Home Links */}
                    <div className="col-md-3">
                        <h6>Home</h6>
                        <ul className="list-unstyled">
                     <li><Link to="#" className="custom-link">Benefits</Link></li> 
                     <li><Link to="#" className="custom-link">Our Courses</Link></li>   

                     <li><Link to="#" className="custom-link">Our Testimonials</Link></li>   

                     <li><Link to="#" className="custom-link">Our FAQ</Link></li>   

                        
                        
                        </ul>
                    </div>

                    {/* About Us Links */}
                    <div className="col-md-3">
                        <h6>About Us</h6>
                        <ul className="list-unstyled">
                        <li><Link to="#" className="custom-link">Company</Link></li>   

                        <li><Link to="#" className="custom-link">Achievements</Link></li>   

                        <li><Link to="#" className="custom-link">Our Goals</Link></li>   

                            
                        </ul>
                    </div>

                    {/* Social Profiles */}
                    <div className="col-md-2 text-center">
                        <h6>Social Profiles</h6>
                        <a href="#"  className="me-3 black-icon"  ><i className="fa-brands fa-facebook fa-lg"></i></a>
                        <a href="#" className="me-3 black-icon"><i className="fa-brands fa-twitter fa-lg"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin fa-lg black-icon"></i></a>
                    </div>
                </div>

                <hr />

                {/* Copyright */}
                <div className="row">
                    <div className="col text-center">
                        <p className="mb-0">© 2025 AlphaLearnX. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
