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
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
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
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
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
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.{" "}
                      </p>
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
                <div className="card-header learners-say-card-header d-flex align-items-center justify-content-between">
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
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid architecto aspernatur assumenda aut blanditiis
                    commodi corporis deserunt dicta dignissimos dolore earum
                    eius esse, et excepturi expedita hic impedit iste iusto
                    laboriosam nemo nobis officia officiis omnis perferendis
                    provident quae quasi, quia ratione reiciendis rem rerum
                    saepe sequi soluta vero voluptatum?
                  </p>
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
                <div className="card-header learners-say-card-header d-flex align-items-center justify-content-between">
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
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid architecto aspernatur assumenda aut blanditiis
                    commodi corporis deserunt dicta dignissimos dolore earum
                    eius esse, et excepturi expedita hic impedit iste iusto
                    laboriosam nemo nobis officia officiis omnis perferendis
                    provident quae quasi, quia ratione reiciendis rem rerum
                    saepe sequi soluta vero voluptatum?
                  </p>
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
                <div className="card-header learners-say-card-header d-flex align-items-center justify-content-between">
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
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid architecto aspernatur assumenda aut blanditiis
                    commodi corporis deserunt dicta dignissimos dolore earum
                    eius esse, et excepturi expedita hic impedit iste iusto
                    laboriosam nemo nobis officia officiis omnis perferendis
                    provident quae quasi, quia ratione reiciendis rem rerum
                    saepe sequi soluta vero voluptatum?
                  </p>
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
  );
}
