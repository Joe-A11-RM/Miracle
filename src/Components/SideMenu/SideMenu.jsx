import { Offcanvas } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const [show, setShow] = useState(false);
  const [opendDropdown, setOpenDropdown] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>
        <img src="/assets/Menu.svg" alt="Menu" className="menu" />
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-center">
            <img src="/assets/Navbarlogo.svg" alt="logo" />
            <div className="side-menu-logo-title">Miracle</div>
            <span className="side-menu-logo-content">Medical Industries</span>
          </div>
          <div className="list-choices container">
            <Link to="/home" className="choice" onClick={handleClose}>
              Home
            </Link>
            <Link to="/aboutus" className="choice" onClick={handleClose}>
              About
            </Link>
            <Link
              to="/research-development"
              className="choice"
              onClick={handleClose}
            >
              R&D
            </Link>
            <Link to="/export-to" className="choice" onClick={handleClose}>
              Export To
            </Link>
            <div
              className="choice"
              onClick={() => setOpenDropdown(!opendDropdown)}
            >
              <div>Categories</div>
              <img src="/assets/Down-arrow.png" alt="arrow" />
            </div>
            {opendDropdown && (
              <>
                <div className="choice-category-list">
                  <div>
                    <Link
                      to="/categories/abdominal"
                      className="choice-item"
                      onClick={handleClose}
                    >
                      Abdominal
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/categories/back"
                      className="choice-item"
                      onClick={handleClose}
                    >
                      Back
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/categories/elbow"
                      className="choice-item"
                      onClick={handleClose}
                    >
                      Elbow
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/categories/fingers"
                      className="choice-item"
                      onClick={handleClose}
                    >
                      Fingers
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/categories/foot&ankle"
                      className="choice-item"
                      onClick={handleClose}
                    >
                      Foot&Ankle
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/categories/knee"
                      className="choice-item"
                      onClick={handleClose}
                    >
                      Knee
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/categories/neck"
                      className="choice-item"
                      onClick={handleClose}
                    >
                      Neck
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/categories/shoulder"
                      className="choice-item"
                      onClick={handleClose}
                    >
                      Shoulder
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/categories/thigh&shin"
                      className="choice-item"
                      onClick={handleClose}
                    >
                      Thigh&Shin
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/categories/wrist"
                      className="choice-item"
                      onClick={handleClose}
                    >
                      Wrist
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/categories/others"
                      className="choice-item"
                      onClick={handleClose}
                    >
                      Others
                    </Link>
                  </div>
                </div>
              </>
            )}
            <Link to="OEM" className="choice" onClick={handleClose}>
              O.E.M
            </Link>
            <Link to="contact-us" className="choice" onClick={handleClose}>
              Contact us
            </Link>
            <Link to="purchase" className="choice" onClick={handleClose}>
              Buy Now
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
