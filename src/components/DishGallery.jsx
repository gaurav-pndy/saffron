import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const dishes = [
  ["dish1", "dish2", "dish3"], // for card 1
  ["dish4", "dish5", "dish6"], // for card 2
  ["dish7", "dish8", "dish9"], // for card 3
];

const dishImageMap = {
  dish1:
    "https://static.wixstatic.com/media/df6cc5_e0cc2c1ec3b54fd4b807d3236a19b1b9~mv2.jpg",
  dish2:
    "https://static.wixstatic.com/media/df6cc5_390bd97612364e54a6f6b0347a8381e7~mv2.jpg",
  dish3:
    "https://static.wixstatic.com/media/df6cc5_349bf4b5bb0b4c819e3620e0b8288dfb~mv2.jpg",
  dish4:
    "https://static.wixstatic.com/media/df6cc5_5841e455c862446394686368ed716a11~mv2.jpg",
  dish5:
    "https://static.wixstatic.com/media/df6cc5_842b0f5b24a743f7a7fe6750330e58ad~mv2.jpg",
  dish6:
    "https://static.wixstatic.com/media/df6cc5_b4b1ce3e3d114bea9a586ba5bd5d8456~mv2.jpg",
  dish7:
    "https://static.wixstatic.com/media/df6cc5_60d2e0c503b84fc6a49c29e123ca132e~mv2.jpg",
  dish8:
    "https://static.wixstatic.com/media/df6cc5_8474905862984f73aed0a71d2fb654a8~mv2.jpg",
  dish9:
    "https://static.wixstatic.com/media/df6cc5_bcf8e68e97824971857dd7ae77e9d6ae~mv2.jpg",
};

const DishGallery = () => {
  const { t } = useTranslation();
  const [currentIndices, setCurrentIndices] = useState([0, 0, 0]);
  const [isHovered, setIsHovered] = useState([false, false, false]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices((prev) => {
        return prev.map((index, cardIdx) => {
          if (isHovered[cardIdx]) return index;
          return (index + 1) % dishes[cardIdx].length;
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Determine number of cards to display based on screen size
  const getVisibleCards = () => {
    if (windowWidth >= 1024) return 3; // Large devices - 3 cards
    if (windowWidth >= 768) return 2; // Medium devices - 2 cards
    return 1; // Small devices - 1 card
  };

  // Card layout variants - responsive elevation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: getVisibleCards() === 3 && custom === 1 ? -30 : 0, // Only elevate center card when showing 3 cards
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: custom * 0.15,
      },
    }),
    hover: {
      y: 0, // All cards level out on hover
      scale: 1.03,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  // Custom flip directions for each card
  const getFlipVariants = (cardIdx) => ({
    enter: {
      opacity: 0,
      rotateY:
        getVisibleCards() === 3
          ? cardIdx === 0
            ? 90
            : cardIdx === 2
            ? -90
            : 90 // 3 cards: left/center/right flips
          : getVisibleCards() === 2
          ? cardIdx === 0
            ? 90
            : -90 // 2 cards: left/right flips
          : 90, // 1 card: standard flip
      scale: 0.8,
    },
    center: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      rotateY:
        getVisibleCards() === 3
          ? cardIdx === 0
            ? -90
            : cardIdx === 2
            ? 90
            : -90
          : getVisibleCards() === 2
          ? cardIdx === 0
            ? -90
            : 90
          : -90,
      scale: 0.8,
      transition: {
        duration: 0.7,
      },
    },
  });

  // Adjust card height based on screen size
  const cardHeight = windowWidth >= 768 ? "32rem" : "28rem";

  return (
    <motion.section
      className="bg-gradient-to-b from-[#fdfaf5] to-[#f8f0e0] py-12 md:py-24 px-4 sm:px-6"
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-base sm:text-lg md:text-xl text-[#800D1B] font-semibold tracking-widest font-cinzel uppercase mb-2">
            {t("dishGallery.at")} –{" "}
            <span className="font-light">{t("dishGallery.saffron")}</span>
          </h3>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cinzel font-medium text-[#CFA247] leading-tight"
            dangerouslySetInnerHTML={{ __html: t("dishGallery.title") }}
          />
          <motion.div
            className="w-20 md:w-24 h-1 bg-[#CFA247] mx-auto mt-3 md:mt-4 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* Responsive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 items-end">
          {dishes.slice(0, getVisibleCards()).map((card, cardIdx) => (
            <motion.div
              key={cardIdx}
              className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl"
              style={{
                height: cardHeight,
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
              custom={cardIdx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onMouseEnter={() =>
                setIsHovered((prev) => {
                  const newHovered = [...prev];
                  newHovered[cardIdx] = true;
                  return newHovered;
                })
              }
              onMouseLeave={() =>
                setIsHovered((prev) => {
                  const newHovered = [...prev];
                  newHovered[cardIdx] = false;
                  return newHovered;
                })
              }
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={dishes[cardIdx][currentIndices[cardIdx]]}
                  className="absolute inset-0"
                  variants={getFlipVariants(cardIdx)}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={dishImageMap[dishes[cardIdx][currentIndices[cardIdx]]]}
                    alt={`Dish ${cardIdx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:p-6">
                    <div>
                      <h3 className="text-white text-xl md:text-2xl font-medium font-cinzel">
                        {t(
                          `dishGallery.${
                            dishes[cardIdx][currentIndices[cardIdx]]
                          }`
                        )}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute bottom-3 md:bottom-4 left-0 right-0 flex justify-center gap-1 md:gap-2 z-10">
                {dishes[cardIdx].map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                      currentIndices[cardIdx] === idx
                        ? "bg-white md:w-4"
                        : "bg-white/50"
                    }`}
                    onClick={() => {
                      const newIndices = [...currentIndices];
                      newIndices[cardIdx] = idx;
                      setCurrentIndices(newIndices);
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DishGallery;
