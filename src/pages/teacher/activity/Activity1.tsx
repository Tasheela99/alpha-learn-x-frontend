import "../../../assets/css/Activity.css";
import ButtonCarousel from "../../../components/common/ComponentCarousel";
export function Activity1() {
  return (
    <div>
      <div className="container-fluid bg-body-secondary">
        <div className="row bg-white" style={{ height: "120vh" }}>
          <div className="col-12 mt-5 py-5 justify-content-center">
            <div className="row  d-flex align-items-center justify-content-center px-5">
              <div className="col-12">
                <h3 className="activity-heading">
                  Activity 1 - Simple Electric circuit
                </h3>
              </div>
              <div className="container my-4 p-4 text-white rounded outer-card">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                  <div className="row justify-content-center activity-heading ">
                    Introduction video
                  </div>
                  <div className="col-11 col-md-10 col-lg-9 bg-white rounded p-4 inner-card d-flex justify-content-center align-items-center">
                    <i
                      className="fa-solid fa-circle-play "
                      style={{ color: "black" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <div className="row  px-5">
                  <h3 className="activity-heading">Activity o1</h3>
                  <h3 className="activity-heading sub-text">
                    Let’s Light the Bulb !
                  </h3>
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
        <p className="px-5 mx-5">Time Limit: 10 minutes</p>
        <div className="row px-5 mx-5 mt-5 ">
          <div className="col-1"></div>
          <div className="l-shape-pseudo"></div>
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
