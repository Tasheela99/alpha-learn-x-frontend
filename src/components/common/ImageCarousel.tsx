import React, { useState } from "react";

function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Static content instead of props
  const items = [
    {
      content: (
        <div
          className="text-center text-white p-5 d-flex"
          style={{ height: "60vh" }}
        >
          <div className="emty-box"></div>

          <div
            className="col  d-flex justify-content-center align-items-center"
            style={{ border: "1px solid black" }}
          >
            <i className="fa-regular fa-image fa-10x color-black"></i>
          </div>
          <div className="emty-box"></div>

          <div className="col d-flex flex-column justify-content-center text-start color-black mx-5 ">
            <p>
              <i className="fa-regular fa-circle mx-2   "></i>Integrated Circuit
              (IC)
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Resistors
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Condensers
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Bulb
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Power Source
            </p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div
          className="text-center text-white p-5 d-flex"
          style={{ height: "60vh" }}
        >
          <div className="emty-box"></div>

          <div
            className="col  d-flex justify-content-center align-items-center"
            style={{ border: "1px solid black" }}
          >
            <i className="fa-regular fa-image fa-10x color-black"></i>
          </div>
          <div className="emty-box"></div>

          <div className="col d-flex flex-column justify-content-center text-start color-black mx-5 ">
            <p>
              <i className="fa-regular fa-circle mx-2   "></i>Integrated Circuit
              (IC)
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Resistors
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Condensers
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Bulb
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Power Source
            </p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div
          className="text-center text-white p-5 d-flex"
          style={{ height: "60vh" }}
        >
          <div className="emty-box"></div>

          <div
            className="col  d-flex justify-content-center align-items-center"
            style={{ border: "1px solid black" }}
          >
            <i className="fa-regular fa-image fa-10x color-black"></i>
          </div>
          <div className="emty-box"></div>

          <div className="col d-flex flex-column justify-content-center text-start color-black mx-5 ">
            <p>
              <i className="fa-regular fa-circle mx-2   "></i>Integrated Circuit
              (IC)
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Resistors
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Condensers
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Bulb
            </p>

            <p>
              <i className="fa-regular fa-circle mx-2  "></i>Power Source
            </p>
          </div>
        </div>
      ),
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" style={{ height: "70vh" }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <div
              className="row h-100 d-flex justify-content-center p-5  border border-red align-items-center"
              style={{ backgroundColor: "#D9D9D9", border: "1px solid black" }}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImageCarousel;
