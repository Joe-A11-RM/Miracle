import { Offcanvas } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  BulbOutlined,
  DownOutlined,
  GlobalOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  ToolOutlined,
} from "@ant-design/icons";

export default function SideMenu({ collapsed, setCollapsed }) {
  const [opendDropdown, setOpenDropdown] = useState(false);
  const handleClose = () => setCollapsed(false);
  const navigate = useNavigate();
  // const categories = [
  //   { key: "abdominal", label: "Abdominal" },
  //   { key: "back", label: "Back" },
  //   { key: "elbow", label: "Elbow" },
  //   { key: "fingers", label: "Fingers" },
  //   { key: "foot&ankle", label: "Foot & Ankle" },
  //   { key: "knee", label: "Knee" },
  //   { key: "neck", label: "Neck" },
  //   { key: "shoulder", label: "Shoulder" },
  //   { key: "thigh&shin", label: "Thigh & Shin" },
  //   { key: "wrist", label: "Wrist" },
  //   { key: "others", label: "Others" },
  // ];
  const categories = [
    { key: "belts-lumbar", label: "Belts - Lumbar" },
    { key: "belts-abdominal", label: "Belts - Abdominal" },
    { key: "belts-hernia", label: "Belts - Hernia & Umbilical" },

    { key: "arm-sling", label: "Arm - Slings" },
    { key: "shoulder", label: "Shoulder" },
    { key: "shoulder-clavicle", label: "Clavicle & Shoulder" },

    { key: "knee", label: "Knee" },
    { key: "ankle", label: "Ankle" },
    { key: "thigh-shin", label: "Thigh & Shin" },

    { key: "wrist", label: "Wrist" },
    { key: "elbow", label: "Elbow" },
    { key: "neck", label: "Neck (Cervical)" },
    { key: "fingers", label: "Fingers" },

    { key: "bandage", label: "Bandages & Gauze" },

    { key: "stockings-varicose", label: "Varicose Stockings" },
    { key: "stockings-anti-embolism", label: "Anti-Embolism (TED)" },

    { key: "casting", label: "Casting Products" },
    // { key: "elastic-products", label: "Elastic Products" },
    { key: "diabetic-socks", label: "Diabetic Socks" },

    { key: "ppe-face-mask", label: "Face Masks" },
    { key: "ppe-face-shield", label: "Face Shields" },
  ];

  return (
    <>
      <Offcanvas show={collapsed} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton />

        <Offcanvas.Body>
          {/* Logo Section */}
          <div className="side-logo-wrapper">
            <img src="/assets/Navbarlogo.svg" alt="logo" />
            <div className="side-menu-logo-title">Miracle</div>
            <span className="side-menu-logo-content">Medical Industries</span>
          </div>

          {/* Menu */}
          <Menu
            mode="inline"
            className="side-menu"
            onClick={({ key }) => {
              navigate(key);
              handleClose();
            }}
            items={[
              {
                key: "/home",
                icon: (
                  <HomeOutlined
                    style={{ color: "#1AA19A", fontSize: "18px" }}
                  />
                ),
                label: "Home",
              },
              {
                key: "/aboutus",
                icon: (
                  <InfoCircleOutlined
                    style={{ color: "#1AA19A", fontSize: "18px" }}
                  />
                ),
                label: "About",
              },
              {
                key: "/research-development",
                icon: (
                  <BulbOutlined
                    style={{ color: "#1AA19A", fontSize: "18px" }}
                  />
                ),
                label: "R&D",
              },
              {
                key: "/export-to",
                icon: (
                  <GlobalOutlined
                    style={{ color: "#1AA19A", fontSize: "18px" }}
                  />
                ),
                label: "Export To",
              },
              {
                key: "categories",
                icon: (
                  <ShoppingOutlined
                    style={{ color: "#1AA19A", fontSize: "18px" }}
                  />
                ),
                label: "Categories",
                children: categories.map((cat) => ({
                  key: `/categories/${cat.key}`,
                  label: cat.label,
                })),
              },
              {
                key: "/OEM",
                icon: (
                  <ToolOutlined
                    style={{ color: "#1AA19A", fontSize: "18px" }}
                  />
                ),
                label: "O.E.M",
              },
              {
                key: "/contact-us",
                icon: (
                  <PhoneOutlined
                    style={{ color: "#1AA19A", fontSize: "18px" }}
                  />
                ),
                label: "Contact Us",
              },
              {
                key: "/purchase",
                icon: (
                  <ShoppingCartOutlined
                    style={{ color: "#1AA19A", fontSize: "18px" }}
                  />
                ),
                label: "Buy Now",
              },
            ]}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
