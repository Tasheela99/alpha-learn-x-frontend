import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "../assets/css/FooterComponent.css"; // Adjust the path as necessary

const FooterComponent = () => {
    return (
        <footer className="bg-light py-4 border-top">
            <div className="container">
                <div className="row g-4">
                    {/* Contact Info */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <h6 className="mb-3">Contact Us</h6>
                        <p className="mb-2">
                            <i className="fa-solid fa-envelope me-2"></i> hello@AlphaLearnX.com
                        </p>
                        <p className="mb-2">
                            <i className="fa-solid fa-phone me-2"></i> +94718771343
                        </p>
                        <p className="mb-2">
                            <i className="fa-solid fa-location-dot me-2"></i> University of Colombo
                        </p>
                    </div>

                    {/* Home Links */}
                    <div className="col-6 col-md-6 col-lg-3">
                        <h6 className="mb-3">Home</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="#" className="custom-link">Benefits</Link></li>
                            <li className="mb-2"><Link to="#" className="custom-link">Our Courses</Link></li>
                            <li className="mb-2"><Link to="#" className="custom-link">Our Testimonials</Link></li>
                            <li className="mb-2"><Link to="#" className="custom-link">Our FAQ</Link></li>
                        </ul>
                    </div>

                    {/* About Us Links */}
                    <div className="col-6 col-md-6 col-lg-3">
                        <h6 className="mb-3">About Us</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="#" className="custom-link">Company</Link></li>
                            <li className="mb-2"><Link to="#" className="custom-link">Achievements</Link></li>
                            <li className="mb-2"><Link to="#" className="custom-link">Our Goals</Link></li>
                        </ul>
                    </div>

                    {/* Social Profiles */}
                    <div className="col-12 col-md-6 col-lg-2">
                        <h6 className="mb-3">Social Profiles</h6>
                        <div className="social-icons">
                            <a href="#" className="me-3 black-icon"><i className="fa-brands fa-facebook fa-lg"></i></a>
                            <a href="#" className="me-3 black-icon"><i className="fa-brands fa-twitter fa-lg"></i></a>
                            <a href="#" className="black-icon"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

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