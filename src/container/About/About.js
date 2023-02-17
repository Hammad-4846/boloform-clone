import React from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { images } from "../../constants";
const companies = [
  { imgUrl: images.comapany1 },
  { imgUrl: images.comapany2 },
  { imgUrl: images.comapany3 },
  { imgUrl: images.comapany4 },
  { imgUrl: images.comapany5 },
];

function About() {
  return (
    <>
      <h2 className="head-text">
        <span>BoloForms </span>
        is Used By
      </h2>

      <div className="app__profiles">
        {companies.map((company, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={index}
          >
            <img src={company.imgUrl} alt={index} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;
