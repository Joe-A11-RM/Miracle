import React from "react";

export default function Categories() {
  return (
    <div className="categories">
      <h3>Our Categories</h3>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="assets/Neck.svg" alt="neck" />
            <p>Neck</p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="assets/Knee.svg" alt="neck" />
            <p>Knee</p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="assets/Foot.svg" alt="neck" />
            <p>Foot&Ankle</p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="assets/Wrist.svg" alt="neck" />
            <p>Wrist</p>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="assets/Abdominal.svg" alt="neck" />
            <p>Abdominal</p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="assets/Back.svg" alt="neck" />
            <p>Back</p>
          </div>
        </div>
      </div>
    </div>
  );
}
