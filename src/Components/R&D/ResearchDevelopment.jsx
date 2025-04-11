import React from "react";

export default function ResearchDevelopment() {
  return (
    <div>
      <div className="research-development-banner"></div>
      <div className="research-development text-center">
        <h3>Research and Development</h3>
        <div className="container">
          <div className="research-development-content">
            Our internal research and development program is aimed at developing
            and enhancing products, processes and technologies. The research and
            development activities for our rehabilitation products are conducted
            in our Factory , facility by a group of Doctors and engineers and
            designers who have substantial experience in developing and
            designing products using advanced technologies, processes and
            materials.
          </div>
        </div>
      </div>
      <div className="research-development text-center">
        <h3>Our Excellence</h3>
        <div className="mt-3 container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="excellence-card">
                <div className="excellence-card-img-layout">
                  <div className="excellence-card-img-layout-hover">
                    <div className="hover-overlay">
                      <div className="hover-text">World-class design</div>
                    </div>
                  </div>
                  <img
                    src="/assets/WorldClass.jpg"
                    alt="excellence"
                    className="w-100"
                  />
                </div>
                <div className="excellence-card-content">
                  Our research and development team combines innovative designs
                  with advanced computational tools and computer-aided systems
                  to create precision-engineered products.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="excellence-card">
                <div className="excellence-card-img-layout">
                  <div className="excellence-card-img-layout-hover">
                    <div className="hover-overlay">
                      <div className="hover-text">
                        Collaboration with Experts
                      </div>
                    </div>
                  </div>
                  <img
                    src="/assets/Collaboration.jpeg"
                    alt="excellence"
                    className="w-100"
                  />
                </div>
                <div className="excellence-card-content">
                  We work closely with leading orthopedic surgeons and
                  professionals who provide insights, training, and feedback,
                  supported by a medical advisory board that guides product
                  development and industry updates.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="excellence-card">
                <div className="excellence-card-img-layout">
                  <div className="excellence-card-img-layout-hover">
                    <div className="hover-overlay">
                      <div className="hover-text">
                        Lean Manufacturing System
                      </div>
                    </div>
                  </div>
                  <img
                    src="/assets/Manufacturing.jpeg"
                    alt="excellence"
                    className="w-100"
                  />
                </div>
                <div className="excellence-card-content">
                  Our lean manufacturing system optimizes efficiency, minimizes
                  waste, and maintains the highest quality standards, supported
                  by rigorous in-house testing to enhance product performance
                  and innovation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
