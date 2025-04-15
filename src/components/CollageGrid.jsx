import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Each sub-array contains multiple versions of one image box
const imageGroups = [
  ["/collage/img1.jpg", "/collage/img10.webp"],
  ["/collage/img2.jpg", "/collage/img16.jpg"],
  ["/collage/img3.jpg", "/collage/img12.jpg"],
  ["/collage/img6.jpg", "/collage/img15.jpg"],
  ["/collage/img5.jpg", "/collage/img14.jpg"],
  ["/collage/img4.jpg", "/collage/img13.jpg"],
  ["/collage/img9.jpg", "/collage/img11.jpg"],
  ["/collage/img19.jpg", "/collage/img17.jpg"],
  ["/collage/img20.jpg", "/collage/img18.webp"],
];

// Each layout is carefully designed to fill the entire container
// with predetermined positions to avoid empty spaces
const desktopLayout = [
  { gridArea: "1 / 1 / 4 / 4" }, // Large square top-left (spans 2x2)
  { gridArea: "1 / 4 / 3 / 6" }, // Small square top-right
  { gridArea: "1 / 6 / 3 / 9" }, // Small square top-right
  { gridArea: "3 / 7 / 6 / 9" }, // Medium rectangle right side
  { gridArea: "4 / 1 / 6 / 4" }, // Small square bottom-left
  { gridArea: "3 / 4 / 6 / 7" }, // Small square bottom-middle
  { gridArea: "6 / 1 / 9 / 3" }, // Medium rectangle bottom-left
  { gridArea: "6 / 3 / 9 / 6" }, // Wide rectangle bottom-right
  { gridArea: "6 / 6 / 9 / 9" }, // Wide rectangle very bottom-right
];

// Mobile layout - designed to work well on narrow screens
const mobileLayout = [
  { gridArea: "1 / 1 / 3 / 7" }, // Large square at top (spans full width)
  { gridArea: "3 / 1 / 5 / 4" }, // Small square
  { gridArea: "3 / 4 / 6 / 7" }, // Small square
  { gridArea: "5 / 1 / 8 / 4" }, // Tall rectangle
  { gridArea: "6 / 4 / 8 / 7" }, // Small square
  { gridArea: "8 / 1 / 10 / 7" }, // Small square
  { gridArea: "10 / 1 / 15 / 4" }, // Wide rectangle (spans full width)
  { gridArea: "10 / 4 / 12 / 7" }, // Small square
  { gridArea: "12 / 4 / 15 / 7" }, // Small square
];

const ImageBox = ({ images, layout }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalTime = 5000 + Math.random() * 5000; // Random delay between 5-10s
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className="overflow-hidden shadow-md w-full h-full relative rounded-xl"
      style={{ gridArea: layout.gridArea }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="collage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      </AnimatePresence>
    </div>
  );
};

const CollageGrid = () => {
  return (
    <div
      className="py-10 px-4 md:px-8"
      style={{
        background: `linear-gradient(
          to bottom,
          #FEFAF3 0%,
          #FFF8E9 20%,
          #FFF8E9 40%,
          #CFA24733 60%,
          #FFF8E9CC 80%,
          #FFF8E9CC 100%
        )`,
      }}
    >
      {/* Desktop Layout - Precisely designed grid with no gaps */}
      <div
        className="hidden md:grid gap-4 mx-auto max-w-7xl aspect-[4/3]"
        style={{
          gridTemplateColumns: "repeat(8, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
        }}
      >
        {imageGroups.map((group, index) => (
          <ImageBox key={index} images={group} layout={desktopLayout[index]} />
        ))}
      </div>

      {/* Mobile Layout - Optimized for smaller screens */}
      <div
        className="grid md:hidden gap-4 mx-auto max-w-7xl"
        style={{
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(12, minmax(80px, auto))",
          aspectRatio: "2/3",
        }}
      >
        {imageGroups.map((group, index) => (
          <ImageBox key={index} images={group} layout={mobileLayout[index]} />
        ))}
      </div>
    </div>
  );
};

export default CollageGrid;
