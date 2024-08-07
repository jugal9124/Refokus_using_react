import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "Arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      description:
        "Arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda de arqueda",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video src="public\videos\Arqitel project video 4_3.mp4" autoPlay loop></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300 "
          >
            <video src="public\videos\TTR project video 4_3_H.264.mp4" autoPlay loop></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400 "
          >
            <video src="public\videos\webflow-education-promo.mp4" autoPlay loop></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500 "
          >
            <video src="public\videos\Cula_promo_new_4_3.mp4" autoPlay loop></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
