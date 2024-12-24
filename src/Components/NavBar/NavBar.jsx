import React, { useState, useEffect } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";
import data from "../../data"; // Adjust path as necessary

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

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
    <div className="navbar-layout">
      <div className="navbar-logo-menu">
        <SideMenu />
        <Link to="/home">
          <img className="logo" src="/assets/Navbarlogo.svg" alt="menu" />
        </Link>
      </div>

      {/* Search input */}
      <div className="col-lg-6 col-md-6 col-sm-6 mx-auto navbar-search-layout">
        <input
          className="w-100"
          placeholder="Search Miracle Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Dropdown menu for search results */}
      {filteredResults.length > 0 && (
        <div className="drop-menu">
          {filteredResults.map((item) => (
            <Link
              to={`/products/${item.id}`}
              key={item.id}
              className="drop-item-link"
            >
              <div className="drop-item">{item.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
