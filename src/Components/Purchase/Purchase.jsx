import React from "react";

export default function Purchase() {
  return (
    <div>
      <div className="purchase-banner"></div>
      <div className="Contact-us text-center">
        <h3>How you can get our product.</h3>
        <div className="container">
          <div className="Contact-us-inf mx-auto">
            <div className="d-flex align-items-center">
              <span>Get Product</span>
              <div>
                by contacting us on WhatsApp{" "}
                <a
                  href="https://wa.me/201000219064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-1 text-primary"
                >
                  +20105330034
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center my-2">
              <span>If you want a specific size </span>
              <a
                href="mailto:miracle@gmail.com"
                className="ms-1 text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact us on miracle@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
