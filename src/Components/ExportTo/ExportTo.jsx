import React from "react";
import { Helmet } from "react-helmet-async";

export default function ExportTo() {
  return (
    <div>
      <Helmet>
        <title>Miracle Medical - Export To</title>
        <meta
          name="description"
          content="Discover the global reach of Miracle Medical Industries. We proudly export our trusted medical support solutions to 14 countries worldwide, enhancing healthcare with our high-quality orthopedic and medical products."
        />
        <meta
          name="keywords"
          content="Miracle Medical Industries, Export, Global Medical Products, Orthopedic Products, Medical Support Solutions, International Healthcare, Medical Device Export, Miracle Medical Export Countries"
        />
      </Helmet>
      <div className="export-to-banner"></div>
      <div className="export-to text-center">
        <h3>We Export To</h3>
        <div className="container">
          <div style={{ fontSize: "clamp(14px, 2.5vw, 18px)" }}>
            Providing Trusted Medical Support Solutions, Exported to 55
            Countries Across the Globe.
          </div>
        </div>
      </div>
      <div className="flags container">
        <div className="row gy-5">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/Algeria.png" alt="flag" />
            <div className="flag-name">Algeria</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/Bahrain.png" alt="flag" />
            <div className="flag-name">Bahrain</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/England.png" alt="flag" />
            <div className="flag-name">England</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/Jordan.png" alt="flag" />
            <div className="flag-name">Jordan</div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/Kuwait.png" alt="flag" />
            <div className="flag-name">Kuwait</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/Lebanon.png" alt="flag" />
            <div className="flag-name">Lebanon</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/Mauritius.png" alt="flag" />
            <div className="flag-name">Mauritius</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/Palestine.png" alt="flag" />
            <div className="flag-name">Palestine</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/Qatar.png" alt="flag" />
            <div className="flag-name">Qatar</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/SouthAfrica.png" alt="flag" />
            <div className="flag-name">South Africa</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/Oman.png" alt="flag" />
            <div className="flag-name">Sultanate Oman</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/UAE.png" alt="flag" />
            <div className="flag-name">UAE</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/USA.png" alt="flag" />
            <div className="flag-name">USA</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src="/assets/Flags/Yemen.png" alt="flag" />
            <div className="flag-name">Yemen</div>
          </div>
        </div>
      </div>
    </div>
  );
}
