import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem({ title, img }) {
  return (
    <Link
      to={`/categories/${title}`}
      className="col-lg-2 col-md-4 col-sm-6 category-layout"
    >
      <img
        className="category-img"
        src={`/assets/${img}`}
        alt={title}
        style={{ borderRadius: "100px" }}
      />
      <p className="text-capitalize">{title}</p>
    </Link>
  );
}
