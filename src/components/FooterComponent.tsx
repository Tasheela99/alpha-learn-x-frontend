import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
                            <li><a href="#">Benefits</a></li>
                            <li><a href="#">Our Courses</a></li>
                            <li><a href="#">Our Testimonials</a></li>
                            <li><a href="#">Our FAQ</a></li>
                        </ul>
                    </div>

                    {/* About Us Links */}
                    <div className="col-md-3">
                        <h6>About Us</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Achievements</a></li>
                            <li><a href="#">Our Goals</a></li>
                        </ul>
                    </div>

                    {/* Social Profiles */}
                    <div className="col-md-2 text-center">
                        <h6>Social Profiles</h6>
                        <a href="#" className="me-3"><i className="fa-brands fa-facebook fa-lg"></i></a>
                        <a href="#" className="me-3"><i className="fa-brands fa-twitter fa-lg"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin fa-lg"></i></a>
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
