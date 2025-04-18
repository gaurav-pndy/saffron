// pages/CategoryPage.tsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import allItems from "../data/allItemsData";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const CategoryItems = () => {
  const { t } = useTranslation();
  const { name } = useParams();
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

  // console.log("Mounted");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-10 xl:px-4 py-8  pt-36">
      <SEO
        title="Saffron Menu | Authentic Indian Dishes in Moscow | Tandoori, Biryani & Curries"
        description="Explore Saffron's award-winning menu—Moscow's finest Indian cuisine. From tandoori specialties to biryanis, vegetarian curries, and royal thalis, savor authentic flavors crafted with premium spices."
        keywords="Indian food menu Moscow, Saffron restaurant menu Moscow, best biryani in Moscow, tandoori dishes Moscow, paneer tikka Moscow, lamb rogan josh Moscow, prawns korma Moscow, chicken tikka masala Moscow, vegetarian Indian food Moscow, dal makhani Moscow, palak paneer Moscow, Indian desserts Moscow, gulab jamun Moscow, royal thali Moscow, Indian lunch specials Moscow, mango lassi Moscow, masala tea Moscow, индийское меню Москва, топ блюда индийской кухни Москва, тандури курица Москва, бирьяни Москва, вегетарианские карри Москва, королевский тали Москва, сафрановый десерт Москва, индийские закуски Москва, самоса Москва, индийские супы Москва"
        url="https://saffronmoscow.com/menu"
        canonical="https://saffronmoscow.com/menu"
        ogTitle="Saffron Menu | Must-Try Indian Dishes in Moscow (2024)"
        ogDescription="Discover Moscow’s #1 Indian restaurant menu—signature biryanis, tandoori grills, and curries made with traditional spices. Vegetarian & non-veg options available."
      />
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#CFA247]  font-roboto-flex capitalize">
        {t(filteredItems[0].category)}
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
            className="rounded-2xl overflow-hidden shadow-md  transition-all duration-300 bg-white border border-gray-100 flex flex-col justify-between p-4 gap-4"
          >
            <div className=" bg-white flex max-h-56 lg:max-h-60  overflow-hidden items-center justify-center rounded-2xl ">
              <img
                src={item.image || "/static-food.jpg"}
                alt={t(item.name)}
                className={`object-contain  rounded-2xl`}
              />
            </div>
            <div className="  flex flex-col justify-around">
              <h3 className="text-2xl font-roboto-flex font-[500] text-gray-800 ">
                {t(item.name)}
              </h3>

              {item.desc && (
                <p className="text-sm md:text-base font-[500] font-roboto-flex text-gray-500 mb-2">
                  {t(item.desc)}
                </p>
              )}

              <div className="flex md:flex-col justify-between items-center md:items-start ">
                {item.price && (
                  <p className="text-xl font-roboto-flex font-[500] text-orange-500 md:mb-2">
                    ₽{item.price}
                  </p>
                )}

                {/* <button className=" px-6 font-poppins py-2 bg-orange-500 text-white w-fit rounded-lg hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
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
