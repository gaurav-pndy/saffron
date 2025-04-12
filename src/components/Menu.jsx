// Menu.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const { t } = useTranslation();

  const categories = [
    {
      name: t("menu.categories.tandoor.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_5aa9c66a4b824310992df0779fc0d36b~mv2.jpg",
      col: "lg:col-span-7",
    },
    {
      name: t("menu.categories.snacks.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_298758b168d84391b683ec0a57673560~mv2.jpg",
      col: "lg:col-span-5",
    },
    {
      name: t("menu.categories.veg.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_50568d18f0cf4722879bfb59c981e8e9~mv2.jpg",
      col: "lg:col-span-6",
    },
    {
      name: t("menu.categories.biryani.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_5841e455c862446394686368ed716a11~mv2.jpg",
      col: "lg:col-span-6",
    },
    {
      name: t("menu.categories.salads.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_cc8d7abd1c714d3691e5e56e67210b7b~mv2.jpg",
      col: "lg:col-span-5",
    },
    {
      name: t("menu.categories.soups.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_c28aafc0d28e405f93983c9fe4424d63~mv2.jpg",
      col: "lg:col-span-7",
    },
    {
      name: t("menu.categories.hotter.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_a2d01a3d9991448897822dcb7769eb80~mv2.jpg",
      col: "lg:col-span-6",
    },
    {
      name: t("menu.categories.sides.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_ce54de88e7d8420d9bac8dd14886edfe~mv2.jpg",
      col: "lg:col-span-6",
    },
    {
      name: t("menu.categories.naan.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_fd74b822faae48279d0b0823b50a1d7a~mv2.jpg",
      col: "lg:col-span-7",
    },
    {
      name: t("menu.categories.cold.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_f11e3c3bd3944191a296bfb99e36e4ab~mv2.jpg",
      col: "lg:col-span-5",
    },
    {
      name: t("menu.categories.tea.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_c49e282286794808bba7c9af3fdb0541~mv2.jpg",
      col: "lg:col-span-4",
    },
    {
      name: t("menu.categories.desserts.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_60d2e0c503b84fc6a49c29e123ca132e~mv2.jpg",
      col: "lg:col-span-4",
    },
    {
      name: t("menu.categories.thali.heading"),
      image:
        "https://static.wixstatic.com/media/df6cc5_33255e335df04b01938721d0c5b001ff~mv2.jpg",
      col: "lg:col-span-4",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  const handleClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  const handleButtonClick = () => {
    if (showAll) {
      const element = document.getElementById("menu");
      if (element) {
        const yOffset = -80; // Adjust based on header height
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    setShowAll((prev) => !prev);
  };

  const slideVariants = {
    hiddenLeft: {
      opacity: 0,
      x: -50,
    },
    hiddenRight: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="menu"
      className="px-4 md:px-6 lg:px-10 xl:px-20 py-8 max-w-7xl mx-auto overflow-clip"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-[400] text-[#CFA247] leading-20 mt-8">
        Explore Our Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 mt-8">
        {visibleCategories.map((category, index) => (
          <motion.div
            key={index}
            className={`cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-lg group ${category.col}`}
            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
            whileInView="visible"
            // viewport={{ once: true, amount: 0.3 }}
            variants={slideVariants}
          >
            <div
              onClick={() => handleClick(category.name)}
              className="relative w-full h-52 lg:h-60 bg-cover flex flex-col justify-between p-5 text-white"
              style={{
                backgroundImage: `url(${category.image})`,
                backgroundPosition: "85% center", // pushes image to the right
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-opacity-40 transition-all duration-300"></div>

              <div className="relative flex flex-col justify-between h-full z-10">
                <h3 className="text-3xl text-shadow-lg font-semibold mb-2 font-poppins">
                  {category.name}
                </h3>
                <button className="px-4 w-fit transition-all duration-300 cursor-pointer py-2 bg-orange-500 text-white font-[500] rounded-2xl hover:bg-orange-600 font-poppins">
                  Explore Items
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleButtonClick}
          className="px-6 transition-all duration-300 cursor-pointer py-2 bg-[#181818] text-white rounded hover:bg-black font-poppins"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default Menu;
