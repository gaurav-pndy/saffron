import React from "react";
import Hero from "../components/Hero";
import DishGallery from "../components/DishGallery";
import Menu from "../components/Menu";
import CollageGrid from "../components/CollageGrid";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="mt-20">
      <Hero />
      <DishGallery />
      <Menu />
      <CollageGrid />
      <About />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
