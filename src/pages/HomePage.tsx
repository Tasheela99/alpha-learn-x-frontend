import React from "react";
import {Button, Box, Typography, Container} from "@mui/material";
import {useUser} from "../../context/UserContext";
import "../assets/css/HomePageCss.css"
import FooterComponet from "../components/FooterComponent.tsx"
import HeaderComponent from "../components/HeaderComponent.tsx"

export function HomePage() {
    return (
        <>
            {/*<HeaderComponent/>*/}
            <div>
                <div className="container-fluid bg-body-secondary">
                    <div className="row bg-white" style={{height: '65vh'}}>
                        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                            <div className="row  d-flex align-items-center justify-content-center px-5">
                                <div className="col-12">
                                    <h1>Introduction Video</h1>
                                </div>
                                <div className="col-12 my-4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda earum facere
                                        fugit laboriosam, nesciunt pariatur ratione reiciendis voluptatum? Aliquam
                                        debitis
                                        dolore ex iusto laborum molestias omnis quasi. Aliquid asperiores aspernatur
                                        atque,
                                        beatae eaque magni, nemo non porro reiciendis rerum, similique?</p>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 d-flex align-items-center gap-3">
                                            <button className="py-3 px-5 rounded-5 bg-black text-white">Lets Start <i
                                                className="fa-solid fa-chevron-right"></i></button>
                                            <button className="py-3 px-5 rounded-5  text-black bg-transparent">More Info
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                            <div className="row">
                                <div className="col-12">
                                    <i className="fa-solid fa-circle-play"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" bg-white py-3 col-12 my-4">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <div className="card stat-card">
                                            <div
                                                className="card-body d-flex align-items-center justify-content-center flex-column">
                                                <h5 className="card-title">56+</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">Teachers</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="card stat-card">
                                            <div
                                                className="card-body d-flex align-items-center justify-content-center flex-column">
                                                <h5 className="card-title">120+</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">Students</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="card stat-card">
                                            <div
                                                className="card-body d-flex align-items-center justify-content-center flex-column">
                                                <h5 className="card-title">6+</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">Subjects</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container pb-4">
                        <div className="row my-4">
                            <div className="col-12">
                                <h1 className="text-center">Choose Your Category Here</h1>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12 col-lg-4">
                                <div className="card category-card">
                                    <div
                                        className="card-body d-flex align-items-center justify-content-center flex-column">
                                        <h5 className="card-title"><i className="fa-solid fa-user-graduate"></i></h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">I Am A Student</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card category-card">
                                    <div
                                        className="card-body d-flex align-items-center justify-content-center flex-column">
                                        <h5 className="card-title"><i className="fa-solid fa-chalkboard-user"></i></h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">I Am A Teacher</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card category-card">
                                    <div
                                        className="card-body d-flex align-items-center justify-content-center flex-column">
                                        <h5 className="card-title"><i className="fa-solid fa-person-pregnant"></i></h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">I Am A Parent</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 bg-white divider"></div>
                    </div>

                    <div className="container pb-4">
                        <div className="row my-4">
                            <div className="col-12">
                                <h1 className="text-center">Our Recent Activities</h1>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12 col-lg-4">
                                <div className="activity-card card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-face-smile"></i>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Activity 01</h5>
                                                <p className="card-text">This is a wider card with supporting text below
                                                    as
                                                    a natural lead-in to additional content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="activity-card card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-face-smile"></i>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Activity 02</h5>
                                                <p className="card-text">This is a wider card with supporting text below
                                                    as
                                                    a natural lead-in to additional content.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="activity-card card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-face-smile"></i>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Activity 03</h5>
                                                <p className="card-text">This is a wider card with supporting text below
                                                    as
                                                    a natural lead-in to additional content. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 bg-white divider"></div>
                    </div>

                    <div className="container pb-4">
                        <div className="row my-4">
                            <div className="col-12">
                                <h1 className="text-center">What Our Learners Say</h1>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12 col-lg-4">
                                <div className="learners-say-card card">
                                    <div
                                        className="card-header learners-say-card-header d-flex align-items-center justify-content-between">
                                        <h6 className="card-subtitle mb-2 text-body-secondary d-flex">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </h6>
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                    <div className="card-body text-justify">
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit.
                                            Aliquid architecto aspernatur assumenda aut blanditiis commodi corporis
                                            deserunt
                                            dicta dignissimos dolore earum eius esse, et excepturi expedita hic impedit
                                            iste
                                            iusto laboriosam nemo nobis officia officiis omnis perferendis provident
                                            quae
                                            quasi, quia ratione reiciendis rem rerum saepe sequi soluta vero
                                            voluptatum?</p>
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-start">
                                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-face-smile"></i>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Activity 01</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="learners-say-card card">
                                    <div
                                        className="card-header learners-say-card-header d-flex align-items-center justify-content-between">
                                        <h6 className="card-subtitle mb-2 text-body-secondary d-flex">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </h6>
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                    <div className="card-body text-justify">
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit.
                                            Aliquid architecto aspernatur assumenda aut blanditiis commodi corporis
                                            deserunt
                                            dicta dignissimos dolore earum eius esse, et excepturi expedita hic impedit
                                            iste
                                            iusto laboriosam nemo nobis officia officiis omnis perferendis provident
                                            quae
                                            quasi, quia ratione reiciendis rem rerum saepe sequi soluta vero
                                            voluptatum?</p>
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-start">
                                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-face-smile"></i>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Activity 01</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="learners-say-card card">
                                    <div
                                        className="card-header learners-say-card-header d-flex align-items-center justify-content-between">
                                        <h6 className="card-subtitle mb-2 text-body-secondary d-flex">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </h6>
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                    <div className="card-body text-justify">
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit.
                                            Aliquid architecto aspernatur assumenda aut blanditiis commodi corporis
                                            deserunt
                                            dicta dignissimos dolore earum eius esse, et excepturi expedita hic impedit
                                            iste
                                            iusto laboriosam nemo nobis officia officiis omnis perferendis provident
                                            quae
                                            quasi, quia ratione reiciendis rem rerum saepe sequi soluta vero
                                            voluptatum?</p>
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-start">
                                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-face-smile"></i>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Activity 01</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<FooterComponet/>*/}
            </div>
        </>
    );
}
