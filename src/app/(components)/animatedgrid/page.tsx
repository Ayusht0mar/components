"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const imgs = [
  { imgSrc: "/agency.webp" },
  { imgSrc: "/candy.webp" },
  { imgSrc: "/sketch.webp" },
];

const AnimatedGrid = () => {
  // Define hoveredIndex as a union type of number and null
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-[900px] mx-auto">
      <div className="grid grid-cols-4 grid-container">
        {imgs.map((img, index) => (
          <motion.div
            key={img.imgSrc}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className={`relative overflow-hidden h-[240px] bg-slate-400 rounded-xl flex justify-center items-center transition-all duration-300 ${
              index === 0 && hoveredIndex === null
                ? "col-span-2"
                : hoveredIndex === index
                ? "col-span-2"
                : "col-span-1"
            }`}
          >
            <Image src={img.imgSrc} alt="" fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedGrid;
