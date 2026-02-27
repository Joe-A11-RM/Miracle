import React, { useState, useEffect } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { useNavigate } from "react-router-dom";
import data from "../../data"; // Adjust path as necessary
import { Header } from "antd/es/layout/layout";
import { AutoComplete, Button, Input } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

export default function NavBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const autoCompleteOptions = filteredResults.map((item) => ({
    value: item.name, // what appears in input
    label: <div className="drop-item">{item.name}</div>,
    id: item.id, // keep id for navigation
  }));

  const navigate = useNavigate();
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [searchTerm]);

  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          background: "#fff",
          boxShadow: "0 2px 8px #7070702e",
        }}
      >
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: 22, color: "#1AA19A" }}
        />
        <div
          className="d-flex align-items-center"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="/assets/Navbarlogo.svg"
            alt="Miracle"
            style={{ height: 48 }}
          />
          <div className="nav-title">miracle</div>
        </div>

        <div className="header-search-wrapper">
          <AutoComplete
            options={autoCompleteOptions}
            onSelect={(value, option) => {
              navigate(`/products/${option.id}`);
            }}
            style={{ width: "100%", height: 38, borderRadius: 24, padding: 0 }}
          >
            <Input
              size="large"
              placeholder="Search products..."
              prefix={<SearchOutlined />}
              className="header-search-input"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </AutoComplete>
        </div>
      </Header>
      <SideMenu collapsed={collapsed} setCollapsed={setCollapsed} />
    </>
  );
}
