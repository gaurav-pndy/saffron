// pages/CategoryPage.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import allItems from "../data/allItemsData";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { ChevronDown } from "lucide-react";

const CategoryItems = () => {
  const { t } = useTranslation();
  const { name } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get all unique categories
  const allCategories = [...new Set(allItems.map((item) => item.category))];

  const filteredItems = allItems.filter((item) => {
    const currentLangValue = t(item.category).toLowerCase();
    const altLang = i18next.language === "en" ? "ru" : "en";
    const altLangValue = i18next
      .getFixedT(altLang)(item.category)
      .toLowerCase();

    return (
      currentLangValue === name?.toLowerCase() ||
      altLangValue === name?.toLowerCase()
    );
  });

  // Get current category
  const currentCategory =
    filteredItems.length > 0 ? filteredItems[0].category : "";

  // Remove current category from navigation
  const otherCategories = allCategories.filter(
    (category) => category !== currentCategory
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  }, [name]);

  // Split categories into two rows for desktop view (6 each)
  const firstRowCategories = otherCategories.slice(0, 6);
  const secondRowCategories = otherCategories.slice(6, 12);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-10 xl:px-4 py-8 pt-24 md:pt-28">
      <SEO
        title="Saffron Menu | Authentic Indian Dishes in Moscow | Tandoori, Biryani & Curries"
        description="Explore Saffron's award-winning menu—Moscow's finest Indian cuisine. From tandoori specialties to biryanis, vegetarian curries, and royal thalis, savor authentic flavors crafted with premium spices."
        keywords="Indian food menu Moscow, Saffron restaurant menu Moscow, best biryani in Moscow, tandoori dishes Moscow, paneer tikka Moscow, lamb rogan josh Moscow, prawns korma Moscow, chicken tikka masala Moscow, vegetarian Indian food Moscow, dal makhani Moscow, palak paneer Moscow, Indian desserts Moscow, gulab jamun Moscow, royal thali Moscow, Indian lunch specials Moscow, mango lassi Moscow, masala tea Moscow, индийское меню Москва, топ блюда индийской кухни Москва, тандури курица Москва, бирьяни Москва, вегетарианские карри Москва, королевский тали Москва, сафрановый десерт Москва, индийские закуски Москва, самоса Москва, индийские супы Москва"
        url="https://saffronmoscow.com/menu"
        canonical="https://saffronmoscow.com/menu"
        ogTitle="Saffron Menu | Must-Try Indian Dishes in Moscow (2024)"
        ogDescription="Discover Moscow's #1 Indian restaurant menu—signature biryanis, tandoori grills, and curries made with traditional spices. Vegetarian & non-veg options available."
      />

      <div className="md:hidden mb-6">
        {/* <div className="w-full flex justify-end"> */}
        <button
          onClick={toggleMenu}
          className="w-full px-4 py-2 bg-[#CFA247] text-white rounded-lg flex items-center justify-between font-roboto-flex font-medium"
        >
          {t("menu.heading")} <ChevronDown />
        </button>
        {/* </div> */}

        {isMenuOpen && (
          <div className="mt-2 bg-white shadow-lg rounded-lg p-2 absolute z-10 left-4 right-4">
            {otherCategories.map((category, index) => (
              <Link
                key={index}
                to={`/menu/${t(category).toLowerCase()}`}
                className="block py-2 px-4 font-poppins hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(category)}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:block mb-8">
        <div className="grid grid-cols-6 gap-2 mb-2">
          {firstRowCategories.map((category, index) => (
            <Link
              key={index}
              to={`/menu/${t(category).toLowerCase()}`}
              className="text-center py-2 px-1 rounded-lg border border-gray-300 text-gray-700 transition-all hover:bg-[#CFA247] hover:text-white hover:border-[#CFA247] font-poppins"
            >
              {t(category)}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-6 gap-2">
          {secondRowCategories.map((category, index) => (
            <Link
              key={index}
              to={`/menu/${t(category).toLowerCase()}`}
              className="text-center py-2 px-1 rounded-lg border border-gray-300 text-gray-700 transition-all hover:bg-[#CFA247] hover:text-white hover:border-[#CFA247] font-poppins"
            >
              {t(category)}
            </Link>
          ))}
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#CFA247] font-roboto-flex capitalize">
        {filteredItems.length > 0 ? t(filteredItems[0].category) : ""}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {filteredItems.map((item, index) => (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            key={index}
            className="rounded-2xl overflow-hidden shadow-md transition-all duration-300 bg-white border border-gray-100 flex flex-col justify-between p-4 gap-4"
          >
            <div className="bg-white flex max-h-56 lg:max-h-60 overflow-hidden items-center justify-center rounded-2xl">
              <img
                src={item.image || "/static-food.jpg"}
                alt={t(item.name)}
                className="object-contain rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-around">
              <h3 className="text-2xl font-roboto-flex font-[500] text-gray-800">
                {t(item.name)}
              </h3>

              {item.desc && (
                <p className="text-sm md:text-base font-[500] font-roboto-flex text-gray-500 mb-2">
                  {t(item.desc)}
                </p>
              )}

              <div className="flex md:flex-col justify-between items-center md:items-start">
                {item.price && (
                  <p className="text-xl font-roboto-flex font-[500] text-orange-500 md:mb-2">
                    ₽{item.price}
                  </p>
                )}

                {/* <button className="px-6 font-poppins py-2 bg-orange-500 text-white w-fit rounded-lg hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                  {t("menu.button")}
                </button> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
