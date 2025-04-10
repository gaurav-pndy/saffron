import React from "react";

const images = [
  "/collage/img1.jpg",
  "/collage/img2.jpg",
  "/collage/img3.jpg",
  "/collage/img4.jpg",
  "/collage/img5.jpg",
  "/collage/img6.jpg",
  "/collage/image10.webp",
  "/collage/image15.webp",
  "/collage/image18.webp",
  // "/collage/aboutus.webp",
];

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
      {/* Desktop Layout */}
      <div
        className="hidden md:grid grid-cols-4 grid-rows-4  gap-4 mx-auto"
        style={{ aspectRatio: "3/2" }}
      >
        {/* Top Row */}
        <div className="row-span-2 row-start-1 rounded-xl overflow-hidden shadow-md">
          <img src={images[0]} alt="1" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-3 row-start-1 rounded-xl overflow-hidden shadow-md">
          <img src={images[1]} alt="2" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-3   rounded-xl overflow-hidden shadow-md">
          <img src={images[2]} alt="3" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-2 rounded-xl overflow-hidden shadow-md">
          <img src={images[4]} alt="5" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-2 row-start-3 rounded-xl overflow-hidden shadow-md">
          <img src={images[3]} alt="4" className="w-full h-full object-cover" />
        </div>

        {/* Center Large */}

        {/* Left */}

        <div className="row-span-1  row-start-4 rounded-xl overflow-hidden shadow-md">
          <img src={images[5]} alt="6" className="w-full h-full object-cover" />
        </div>

        {/* Right */}
        <div className="row-span-2  row-start-1 rounded-xl overflow-hidden shadow-md">
          <img src={images[6]} alt="7" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-1  row-start-1 rounded-xl overflow-hidden shadow-md">
          <img src={images[7]} alt="8" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mobile & Tablet Responsive Layout */}
      <div className="grid md:hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 mx-auto max-w-7xl">
        {/* Top 4 Images */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <img src={images[0]} alt="1" className="w-full h-full object-cover" />
        </div>
        <div className=" rounded-xl overflow-hidden shadow-md">
          <img src={images[1]} alt="2" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-md">
          <img src={images[2]} alt="3" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-md">
          <img src={images[3]} alt="4" className="w-full h-full object-cover" />
        </div>

        {/* Left and Right + Bottom Images */}
        <div className=" rounded-xl overflow-hidden shadow-md">
          <img src={images[8]} alt="5" className="w-full h-full object-cover" />
        </div>
        <div className=" rounded-xl overflow-hidden shadow-md">
          <img src={images[7]} alt="6" className="w-full h-full object-cover" />
        </div>
        {/* <div className="col-span-1 row-span-2 rounded-xl overflow-hidden shadow-md">
          <img src={images[]} alt="7" className="w-full h-full object-cover" />
        </div> */}

        {/* Center Large Image */}
        <div className=" rounded-xl row-span-1 overflow-hidden shadow-md">
          <img
            src={images[4]}
            alt="aboutus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" rounded-xl overflow-hidden shadow-md">
          <img
            src={images[5]}
            alt="aboutus"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CollageGrid;
