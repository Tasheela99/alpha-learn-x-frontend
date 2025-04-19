import "../../../assets/css/Activity.css";
import ButtonCarousel from "../../../components/common/ComponentCarousel";
export function Activity2() {
  return (
    <div>
      <div className="container-fluid bg-body-secondary">
        <div className="row bg-white" style={{ height: "120vh" }}>
          <div className="col-12 mt-5 py-5 justify-content-center">
            <div className="row  d-flex align-items-center justify-content-center px-5">
              <div className="col-12">
                <h3 className="activity-heading">
                Lesson 2 - Building a simple motor                </h3>
              </div>
              <div className="container my-4 p-4 text-white rounded outer-white-card">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                 
                  
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <div className="row  px-5">
                  <h3 className="activity-heading">Activity o2</h3>
                  <h3 className="activity-heading sub-text">
                  Build your own motor                  </h3>
                </div>
              </div>
              <div className="col justify-content-end text-end px-5 ">
                <i className="fa-solid fa-chart-pie fa-4x chart-icon"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-4">
          <div className="row my-4">
            <div className="col-12 text-end">
              {Array.from({ length: 5 }).map((_, index) => (
                <i key={`star-${index}`} className="fa-regular fa-star mx-1" />
              ))}{" "}
            </div>
          </div>
        </div>
        <div className="container-fluid py-3">
          <ButtonCarousel />
        </div>
        <p className="px-5 mx-5">Time Limit: 15 minutes</p>
        <div className="row px-5 mx-5 mt-5 ">
          <div className="col-1"></div>
          <div className="container my-4 p-4 text-white rounded cards"></div>
          </div>
        <div className="row px-5 mx-5 mt-5 ">
          <div className="col d-flex justify-content-center">
            {" "}
            <button className="btn btn-light px-5 activity-button">Back</button>
          </div>
          <div className="col  ">
            <div className="row d-flex justify-content-center "><i className="fa-solid fa-qrcode fa-3x  d-flex justify-content-center"></i></div>
            <div className="row d-flex justify-content-center">View your 3D circuit</div>
          </div>
          <div className="col  d-flex justify-content-center">
            {" "}
            <button className="btn btn-light px-5 activity-button">Next Level</button>
          </div>
        </div>

        <div className="row">
                        <div className="col-12 divider"></div>
                    </div>

       

        
      </div>
      {/*<FooterComponet/>*/}
    </div>
  );
}
