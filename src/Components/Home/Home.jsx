import React from "react";
import ControlledCarousel from "./Carousel/Carousel";
import Defination from "./Defination/Defination";
import Pain from "./Pain/Pain";
import Categories from "./Categories/Categories";
import Arrivals from "./Arrivals/Arrivals";
import KnowAbout from "./About/KnowAbout";
import DailySupport from "./DailySupport/DailySupport";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Miracle Medical - Home</title>
        <meta
          name="description"
          content="Welcome to Miracle Medical Industries, your trusted partner in high-quality medical products. Explore our extensive range of innovative solutions designed to enhance patient care and improve health outcomes worldwide."
        />
        <meta
          name="keywords"
          content="Medical Products, Healthcare Solutions, Miracle Medical Industries, Patient Care, Medical Equipment, Health Improvement, Innovative Medical Solutions"
        />
      </Helmet>
      {/* <ControlledCarousel /> */}
      <Defination />
      <Pain />
      <Categories />
      <Arrivals />
      <KnowAbout />
      <DailySupport />
    </>
  );
}
