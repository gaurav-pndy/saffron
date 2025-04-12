// components/LandingRevealSplit.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LandingReveal = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  // useEffect(() => {
  //   setStartAnimation(true);
  //   const timeout = setTimeout(() => {
  //     onComplete();
  //   }, 2500);
  //   return () => clearTimeout(timeout);
  // }, [onComplete]);

  const gradientStyle =
    "bg-gradient-to-tr from-[#26140a] via-[#4d240f] to-[#793c11]";

  return (
    <AnimatePresence>
      {/* {startAnimation && ( */}
      <>
        {/* Top reveal */}
        <motion.div
          className={`fixed flex items-end justify-center pb-4 top-0 left-0 w-full h-[50svh] z-[100] bg-gradient-to-t from-[#26140a] to-[#4d240f]`}
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1.2,
            ease: [0.77, 0, 0.175, 1],
            delay: 2,
          }}
        >
          <motion.img
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }}
            src="/logo-part1.png"
            alt="logo part 1"
            className="h-16"
          />
        </motion.div>

        {/* Bottom reveal */}
        <motion.div
          className={`fixed flex items-start justify-center pt-4 bottom-0 left-0 w-full h-[50svh] z-[100] bg-gradient-to-b from-[#26140a] to-[#4d240f]`}
          initial={{ y: 0 }}
          animate={{ y: "100%" }}
          exit={{ y: "100%" }}
          transition={{
            duration: 1.2,
            ease: [0.77, 0, 0.175, 1],
            delay: 2,
          }}
        >
          <motion.img
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            src="/logo-part2.png"
            alt="logo part 2"
            className="w-80"
          />
        </motion.div>
      </>
      {/* )} */}
    </AnimatePresence>
  );
};

export default LandingReveal;
