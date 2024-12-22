import React from "react";
import CategoryItem from "./CategoryItem";

export default function Categories() {
  return (
    <div className="categories">
      <h3>Our Categories</h3>
      <div className="container text-center">
        <div className="row">
          <CategoryItem title="abdominal" img="Abdominal.svg" />
          <CategoryItem title="back" img="Back.svg" />
          <CategoryItem title="elbow" img="Elbow.png" />
          <CategoryItem title="fingers" img="Fingers.png" />
          <CategoryItem title="foot&ankle" img="Foot.svg" />
          <CategoryItem title="knee" img="Knee.svg" />
          <CategoryItem title="neck" img="Neck.svg" />
          <CategoryItem title="shoulder" img="Shoulder.png" />
          <CategoryItem title="thigh&shin" img="Thigh&Shin.jpg" />
          <CategoryItem title="wrist" img="Wrist.svg" />
          <CategoryItem title="others" img="Others.jpg" />
        </div>
      </div>
    </div>
  );
}
