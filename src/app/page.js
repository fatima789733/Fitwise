// pages/index.js or components/MainPage.js
import React from "react";
import HeroSection from "./components/hero-section";
import FitnessAppSection from "./components/Features";
import WorkoutLibrarySection from "./components/workout-section";
import GlimpseSection from "./components/glimpse-section";
import ElevateSection from "./components/elevate-section";
import FooterSection from "./components/footer-section";
import "./global.css";
const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <FitnessAppSection />
      <WorkoutLibrarySection />
      <GlimpseSection />
      <ElevateSection />
      <FooterSection />
    </div>
  );
};

export default MainPage;
