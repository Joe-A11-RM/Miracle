import React from "react";
import FooterCompany from "./FooterCompany";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row gx-5">
          <FooterCompany />
          <FooterLinks />
        </div>
        <div className="copyright">
          copyrights@2025 miracle - all rights reserved.
        </div>
      </div>
    </div>
  );
}
