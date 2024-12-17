import React from "react";
import NavBar from "../NavBar/NavBar";
import ControlledCarousel from "./Carousel/Carousel";
import Defination from "./Defination/Defination";
import Pain from "./Pain/Pain";
import Categories from "./Categories/Categories";
import Arrivals from "./Arrivals/Arrivals";

export default function Home() {
  return (
    <div>
      <NavBar />
      <ControlledCarousel />
      <Defination />
      <Pain />
      <Categories />
      <Arrivals />
    </div>
  );
}
