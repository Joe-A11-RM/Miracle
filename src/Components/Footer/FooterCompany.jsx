import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FooterCompany() {
  return (
    <div className="col-lg-6">
      <div className="footer-logo">
        <p>miracle for medical support.</p>
        <div>
          Miracle Orthopedics is a global leader in soft orthopedic
          rehabilitation and medical support products, offering over 85 product
          ranges with 595 items distributed in Egypt and over 48 countries to
          healthcare professionals, including surgeons, hospitals, and physical
          therapists. Renowned for innovation, the company started as a small
          start-up, crafting products from pure Egyptian cotton.
        </div>
        <div className="footer-social-media">
          <a
            href="https://www.facebook.com/miracleorthopedic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://wa.me/201000219064"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.instagram.com/miracle.medical.industries/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}
