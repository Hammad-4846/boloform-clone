import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./WorkFlows.scss";
import Review from "../../components/Review/Review";
import { reviewInfo } from "../../ReviewsInfo";

function WorkFlows() {
  return (
    <>
      <motion.div
        className="app__workflows"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <h1
          className="head-text"
          style={{ marginTop: "4rem", fontWeight: 700 }}
        >
          Fully Automated Workflows
        </h1>
        <p
          className="p-text"
          style={{
            fontSize: "1.2rem",
            fontWeight: 500,
            textAlign: "center",
            color: "black",
          }}
        >
          No more painful manual approval management and wasting countless
          hours.
        </p>

        <div className="service__container">
          <div className="service__left-container">
            <p>🗈 Leave Application</p>
            <p>🗈 Purchase Order</p>
            <p>🗈 Fulfilment</p>
          </div>
          <img src={images.logoApproval} />
          <div className="service__right-container">
            <p>🗈 Approve</p>
            <p>🗈 Reject</p>
            <p>🗈 Send Pdf</p>
          </div>
        </div>
        <p
          className="p-text"
          style={{
            fontSize: "1.2rem",
            fontWeight: 500,
            textAlign: "center",
            color: "black",
          }}
        >
          BoloForms workflows acts as a glue holding together all your approval
          processes.
        </p>
      </motion.div>

      <Review
        name={reviewInfo[3].name}
        imgUrl={reviewInfo[3].imgUrl}
        isShow={true}
        desc={reviewInfo[3].reviewDesc}
      />

      <Review
        name={reviewInfo[4].name}
        imgUrl={reviewInfo[4].imgUrl}
        isShow={false}
        desc={reviewInfo[4].reviewDesc}
      />
    </>
  );
}

export default WorkFlows;
