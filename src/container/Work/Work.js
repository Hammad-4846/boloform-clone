import React from "react";
import { motion } from "framer-motion";

import "./Work.scss";
import { images } from "../../constants";
import Review from "../../components/Review/Review";
import { reviewInfo } from "../../ReviewsInfo.js";

const setupWorkStep = [
  {
    stepNo: "1",
    stepDes: "Choose a template or add questions to create your Google Form.",
    imgUrl: images.step1,
  },

  {
    stepNo: "2",
    stepDes: "Enable Single/Multi Step approval and add necessary approvers!",
    imgUrl: images.step2,
  },
  {
    stepNo: "3",
    stepDes: "Now you can enable the workflow and share the Google Form.",
    imgUrl: images.step3,
  },
];

function Work() {
  return (
    <>
      <h2 className="head-text">
        How does
        <span> BoloForms </span>
        work?
      </h2>
      <p className="p-text" style={{ textAlign: "center", fontSize: "1.2rem" }}>
        Set up your first workflow in just 3 easy steps.
      </p>

      <div className="app__work-section">
        {setupWorkStep.map((step, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ y: [0, -50] }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__work-item"
            key={index}
          >
            <div className="app__work-img app__flex">
              <img src={step.imgUrl} alt={step.stepNo} />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">Step-{step.stepNo}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {step.stepDes}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <Review
        name={reviewInfo[0].name}
        imgUrl={reviewInfo[0].imgUrl}
        desc={reviewInfo[0].reviewDesc}
        isShow={true}
      />
    </>
  );
}

export default Work;
