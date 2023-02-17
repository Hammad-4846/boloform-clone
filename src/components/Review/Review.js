import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Review.scss";

function Review({ name, desc, imgUrl, isShow }) {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="app__review app__flex"
      >
        <div className="app__review-img">
          <img src={imgUrl} alt="cos-img" />
        </div>
        <div className="app__review-info">
          <div className="info-img">
            <img src={images.stars} alt="star-img" />
          </div>
          <div className="review-desc">
            <p className="p-text">{`"${desc}"`}</p>
          </div>
          <h3 className="text-bold">{name}</h3>
        </div>
      </motion.div>
      {isShow && (
        <div className="review__download-container app__flex">
          <div className="btn-container app__flex">
            <a className="btn">☁️ Install For Free</a>
            <a className="btn btn-active">✈️ BoloForms Premium</a>
          </div>
          <div className="company__info app__flex">
            <a>✔️ Trusted by 50000+ Businesses</a>
            <a>✔️ 30 Days Money Back Guarantee</a>
            <a>✔️ 30 Days Money Back Guarantee</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Review;
