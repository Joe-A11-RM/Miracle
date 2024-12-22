import React from "react";
import ControlledCarousel from "./Carousel/Carousel";
import Defination from "./Defination/Defination";
import Pain from "./Pain/Pain";
import Categories from "./Categories/Categories";
import Arrivals from "./Arrivals/Arrivals";
import KnowAbout from "./About/KnowAbout";
import DailySupport from "./DailySupport/DailySupport";

export default function Home() {
  return (
    <div>
      <ControlledCarousel />
      <Defination />
      <Pain />
      <Categories />
      <Arrivals />
      <KnowAbout />
      <DailySupport />
    </div>
  );
}
