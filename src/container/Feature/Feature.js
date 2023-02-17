import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./Feature.scss";
import { FeatureInfo } from "./FeatureInfo";
import { reviewInfo } from "../../ReviewsInfo";
import Review from "../../components/Review/Review";
function Feature() {
  return (
    <div className="app__feature app__flex">
      <h2 className="head-text">Features</h2>
      <p
        className="p-text"
        style={{ fontSize: "1rem", textAlign: "center", marginBottom: "2rem" }}
      >
        Everything that your organisation will love, & more.
      </p>
      <div className="app__feature-cards">
        {FeatureInfo.map((item, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: [1, 1.1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="app__feature-card"
            key={item.heading - index}
          >
            <div className="app__feature-card-img">
              <img src={item.imgUrl} alt={"images"} />
            </div>
            <div className="app__feature-card-info">
              <h2 className="bold-text">{item.heading}</h2>
              <p className="p-text" style={{ fontSize: "1rem" }}>
                {item.info}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <Review
        name={reviewInfo[1].name}
        imgUrl={reviewInfo[1].imgUrl}
        desc={reviewInfo[1].reviewDesc}
        isShow = {true}
      />
      <Review
        name={reviewInfo[2].name}
        imgUrl={reviewInfo[2].imgUrl}
        desc={reviewInfo[2].reviewDesc}
        isShow = {false}
      />
    </div>
  );
}

export default Feature;
