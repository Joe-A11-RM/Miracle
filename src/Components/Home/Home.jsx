import React from "react";
import NavBar from "../NavBar/NavBar";
import ControlledCarousel from "./Carousel/Carousel";
import Defination from "./Defination/Defination";
import Pain from "./Pain/Pain";
import Categories from "./Categories/Categories";
import Arrivals from "./Arrivals/Arrivals";
import KnowAbout from "./About/KnowAbout";
import DailySupport from "./DailySupport/DailySupport";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <ControlledCarousel />
      <Defination />
      <Pain />
      <Categories />
      <Arrivals />
      <KnowAbout />
      <DailySupport />
      <Footer />
    </div>
  );
}
