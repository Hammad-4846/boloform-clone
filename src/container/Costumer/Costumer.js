import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

import "./Costumer.scss";
function Costumer() {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="app__costumer app__flex">
      <h2 className="head-text">
        Customers Who Are <span>Trusting Us!</span>
      </h2>
      <motion.img
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        src={images.reviews}
        alt="reviews"
      />
    </div>
  );
}

export default Costumer;
