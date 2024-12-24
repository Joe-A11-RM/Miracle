import React from "react";
import { Link } from "react-router-dom";

export default function FooterLinks() {
  return (
    <>
      <div className="col-lg-6 footer-links align-content-center">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-4">
            <div className="footer-content-title">Company</div>
            <Link to="/home">
              <div className="footer-content-element">Home</div>
            </Link>
            <Link to="/aboutus">
              <div className="footer-content-element">About</div>
            </Link>
            <Link to="/research-development">
              <div className="footer-content-element">R&D</div>
            </Link>
            <Link to="export-to">
              <div className="footer-content-element">Export to</div>
            </Link>
            <Link to="/OEM">
              <div className="footer-content-element">O.E.M</div>
            </Link>
            <Link to="/contact-us">
              <div className="footer-content-element">Contact us</div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-4">
            <div className="footer-content-title">Products</div>
            <div className="row">
              <div className="col-6">
                <Link to="/categories/abdominal">
                  <div className="footer-content-element">Abdominal</div>
                </Link>
                <Link to="/categories/back">
                  <div className="footer-content-element">Back</div>
                </Link>
                {/**<Link to="/categories/chest">
                  <div className="footer-content-element">Chest</div>
                </Link>
               <Link to="/categories/calf">
                  <div className="footer-content-element">Calf</div>
                </Link>**/}
                <Link to="/categories/elbow">
                  <div className="footer-content-element">Elbow</div>
                </Link>
                <Link to="/categories/fingers">
                  <div className="footer-content-element">Fingers</div>
                </Link>
                <Link to="/categories/foot&ankle">
                  <div className="footer-content-element">Foot&Ankle</div>
                </Link>
              </div>
              <div className="col-6">
                <Link to="/categories/knee">
                  <div className="footer-content-element">Knee</div>
                </Link>
                <Link to="/categories/neck">
                  <div className="footer-content-element">Neck</div>
                </Link>
                <Link to="/categories/shoulder">
                  <div className="footer-content-element">Shoulder</div>
                </Link>
                <Link to="/categories/thigh&shin">
                  <div className="footer-content-element">Thigh</div>
                </Link>
                <Link to="/categories/wrist">
                  <div className="footer-content-element">Wrist</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
