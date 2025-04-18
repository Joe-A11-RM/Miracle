import React from "react";
import { Link } from "react-router-dom";

export default function KnowAbout() {
  return (
    <Link to="/aboutus">
      <div className="about-us-layout">
        <div className="know-about-us">
          <p>Know more about our company.</p>
        </div>
      </div>
    </Link>
  );
}
