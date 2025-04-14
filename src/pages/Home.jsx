import React from "react";
import Hero from "../components/Hero";
import DishGallery from "../components/DishGallery";
import Menu from "../components/Menu";
import CollageGrid from "../components/CollageGrid";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import LandingReveal from "../components/LandingReveal";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div>
      <SEO
        title="Saffron | Top-Rated Indian Restaurant in Moscow | #1 for Authentic Cuisine & Fine Dining"
        description="Ranked among Moscow's top-rated restaurants, Saffron offers an award-winning Indian dining experience. Voted 'Best Indian Restaurant in Moscow' for authentic curries, tandoori, and vegetarian specialties in an elegant setting."
        keywords="top-rated restaurant in Moscow, top-rated Indian restaurant in Moscow, best Indian restaurant Moscow, #1 Indian food Moscow, highest-rated Indian cuisine Moscow, Moscow restaurant awards, best fine dining Indian Moscow, luxury Indian dining Moscow, best tandoori in Moscow, top curry house Moscow, best biryani Moscow, premium Indian spices Moscow, gourmet Indian dishes Moscow, best vegetarian Indian Moscow, 5-star Indian restaurant Moscow, critically acclaimed Indian food Moscow, traveler's choice Moscow, expert-recommended Indian Moscow, индийский ресторан топ Москва, лучший ресторан индийской кухни Москва, рейтинговый ресторан Москва, премиальный индийский ресторан Москва, ресторан с высоким рейтингом Москва, выбор гурманов Москва, лауреат кулинарных премий Москва, изысканная индийская кухня Москва"
        url="https://saffronmoscow.com/"
        canonical="https://saffronmoscow.com/"
        ogTitle="Saffron | Top-Rated Indian Restaurant in Moscow (2024)"
        ogDescription="Moscow’s #1 ranked Indian restaurant—voted by critics and travelers for authentic flavors, impeccable service, and an unforgettable fine dining experience."
      />
      <LandingReveal />
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
