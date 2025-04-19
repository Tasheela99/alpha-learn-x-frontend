import "../../../assets/css/Activity.css";
import ButtonCarousel from "../../../components/common/ComponentCarousel";
import ImageCarousel from "../../../components/common/ImageCarousel";
export function Activity3() {
 
  return (
    <div>
      <div className="container-fluid ">
        <div className="row bg-white" style={{ height: "120vh" }}>
          <div className="col-12 mt-5 py-5 justify-content-center">
            <div className="row  d-flex align-items-center justify-content-center px-5">
              <div className="col-12">
                <h3 className="activity-heading">
                Lesson 3 - Design a Traffic Light System                </h3>
              </div>
              <div className="container my-4 p-4 text-white rounded outer-white-card">
                <div className="row h-100 d-flex justify-content-center align-items-center">

                  
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <div className="row  px-5">
                  <h3 className="activity-heading">Activity o3</h3>
                  <h3 className="activity-heading sub-text">
                  Traffic lights help keep roads safe. Find out the correct answer                  </h3>
                </div>
              </div>
              <div className="col justify-content-end text-end px-5 ">
                <i className="fa-solid fa-chart-pie fa-4x chart-icon"></i>
              </div>
            </div>
          </div>
        </div>


        
        <div className="row px-5 mx-5 mt-5 ">
        <ImageCarousel  />

          <div className="col-1"></div>
          </div>
        <div className="row px-5 mx-5 mt-5 ">
          <div className="col d-flex justify-content-center">
            {" "}
            <button className="btn btn-light px-5 activity-button">Back</button>
          </div>
          <div className="col  ">
            <div className="emty-box"></div>
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
