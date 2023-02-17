import React from "react";
import { motion } from "framer-motion";

import "./Header.scss";


function Header() {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="app__header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 0.5,1] }}
        transition={{ duration: 0.5 }}
        
        className="app__header-info"
      >
        <h2 className="head-text">
          Transform <span>Google Forms</span> Into Interactive{" "}
          <span>Workflows</span>
        </h2>
        <div className="app__header-desc">
          <p className="p-text">
            BoloForms is a Google Forms add on that allows you to add
            conditional logic to your forms. With BoloForms, you can create
            interactive workflows, approval flows & automate processes.
          </p>
        </div>
        <a className="btn btn-active">✈️ Install For Free</a>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-video"
      >
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/riiUkCRpIio"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        ></iframe>
      </motion.div>
    </div>
  );
}

export default Header;
