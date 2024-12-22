import React from "react";

export default function FooterLinks() {
  return (
    <>
      <div className="col-lg-6 align-content-center">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-content-title">Company</div>
            <div className="footer-content-element">Home</div>
            <div className="footer-content-element">About</div>
            <div className="footer-content-element">R&D</div>
            <div className="footer-content-element">Export to</div>
            <div className="footer-content-element">O.E.M</div>
            <div className="footer-content-element">Contact us</div>
          </div>
          <div className="col-lg-4">
            <div className="footer-content-title">Products</div>
            <div className="row">
              <div className="col-6">
                <div className="footer-content-element">Abdominal</div>
                <div className="footer-content-element">Back</div>
                <div className="footer-content-element">Calf</div>
                <div className="footer-content-element">Chest</div>
                <div className="footer-content-element">Elbow</div>
                <div className="footer-content-element">Fingers</div>
              </div>
              <div className="col-6">
                <div className="footer-content-element">Foot&Ankle</div>
                <div className="footer-content-element">Knee</div>
                <div className="footer-content-element">Neck</div>
                <div className="footer-content-element">Shoulder</div>
                <div className="footer-content-element">Thigh</div>
                <div className="footer-content-element">Wrist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
