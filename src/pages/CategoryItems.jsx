// pages/CategoryPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import allItems from "../data/allItemsData";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { motion, AnimatePresence } from "framer-motion";

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

  console.log("Mounted");

  return (
    <div className="max-w-5xl mx-auto px-4 py-8  pt-36">
      <h2 className="text-5xl font-bold mb-10 text-[#CFA247]  font-poppins capitalize">
        {name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {filteredItems.map((item, index) => (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            key={index}
            className="rounded-2xl overflow-hidden shadow-md  transition-all duration-300 bg-white border border-gray-100 flex flex-col justify-between p-4 gap-4"
          >
            <div className=" bg-white flex items-center justify-center ">
              <img
                src={item.image || "/static-food.jpg"}
                alt={t(item.name)}
                className={`object-contain  rounded-2xl`}
              />
            </div>
            <div className="  flex flex-col justify-around">
              <h3 className="text-2xl font-poppins font-bold text-gray-800 ">
                {t(item.name)}
              </h3>

              {item.desc && (
                <p className=" font-poppins text-gray-500 mb-2">
                  {t(item.desc)}
                </p>
              )}

              {item.price && (
                <p className="text-xl font-poppins font-semibold text-orange-500 mb-2">
                  ₽{item.price}
                </p>
              )}

              <button className=" px-6 font-poppins py-2 bg-orange-500 text-white w-fit rounded-lg hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                Order Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
