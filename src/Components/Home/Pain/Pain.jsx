import React from "react";
import { Link } from "react-router-dom";

export default function Pain() {
  return (
    <div className="pain">
      <div className="container">
        <div className="row">
          <div className="my-auto content col-lg-6">
            <h3 className="text-start">Do You Feel Pain</h3>
            <div>Miracle is your best choice</div>
            <div>What are you waiting for? Get your first item now.</div>
          </div>
          <div className="col-lg-6 position-relative">
            <div className="image-container">
              <img
                src="/assets/Skeleton.jpg"
                alt="skeleton"
                className="img-fluid"
              />
              <Link
                to="/categories/elbow"
                className="circle text-white"
                style={{ top: "25%", left: "39%" }}
              >
                <div className="part">elbow</div>
              </Link>
              <Link
                to="/categories/shoulder"
                className="circle text-white"
                style={{ top: "23%", left: "49%" }}
              >
                <div className="part">shoulder</div>
              </Link>
              <Link
                to="/categories/neck"
                className="circle text-white"
                style={{ top: "23%", left: "53%" }}
              >
                <div className="part">neck</div>
              </Link>
              <Link
                to="/categories/wrist"
                className="circle text-white"
                style={{ top: "48%", left: "60%" }}
              >
                <div className="part text-white">wrist</div>
              </Link>
              <Link
                to="/categories/fingers"
                className="circle text-white"
                style={{ top: "45%", left: "32%" }}
              >
                <div className="part">fingers</div>
              </Link>
              <Link
                to="/categories/back"
                className="circle text-white"
                style={{ top: "40%", left: "40%" }}
              >
                <div className="part">back</div>
              </Link>
              <Link
                to="/categories/abdominal"
                className="circle text-white"
                style={{ top: "45%", left: "45%" }}
              >
                <div className="part">abdominal</div>
              </Link>
              {/**<Link
                to="/categories/chest"
                className="circle text-white"
                style={{ top: "35%", left: "50%" }}
              >
                <div className="part">chest</div>
              </Link>
             <Link
                to="/categories/calf"
                className="circle text-white"
                style={{ top: "70%", left: "25%" }}
              >
                <div className="part">calf</div>
              </Link>**/}
              <Link
                to="/categories/thigh&shin"
                className="circle text-white"
                style={{ top: "65%", left: "35%" }}
              >
                <div className="part">thigh</div>
              </Link>
              <Link
                to="/categories/knee"
                className="circle text-white"
                style={{ top: "65%", left: "53%" }}
              >
                <div className="part">knee</div>
              </Link>
              <Link
                to="/categories/foot&ankle"
                className="circle text-white"
                style={{ top: "80%", left: "50%" }}
              >
                <div className="part">ankle & foot</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
