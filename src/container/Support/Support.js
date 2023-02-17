import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";
import "./Support.scss";

const cardInfo = [
  {
    imgUrl: images.support1,
    name: "Whatsapp chat",
    desc: "Ask a question right now.",
    btnInfo: "Send an Chat",
  },
  {
    imgUrl: images.support2,
    name: "Email",
    desc: "Get in touch by email.",
    btnInfo: "Send an Email",
  },
  {
    imgUrl: images.support3,
    name: "Help center",
    desc: "In Depth Guides.",
    btnInfo: "Read Article",
  },
  {
    imgUrl: images.support4,
    name: "Google Meet",
    desc: "Guided support and Q&A.",
    btnInfo: "Book a Time",
  },
];

function Support() {
  return (
    <div className="app__support app__flex">
      <div className="app__support-heading app__flex">
        <img src={images.stars} alt="start" />
        <h2 className="head-text">Award-winning support.</h2>
        <p className="p-text" style={{ fontSize: "1.2rem" }}>
          Best-in-class support. We’re always here to help – here’s how to
          connect.
        </p>
      </div>

      <div className="app__support-cards">
        {cardInfo.map((supp, index) => (
          <motion.div
            whileHover={{ scale: [1, 1.1] }}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
            className = "app__support-card"
            key={index}
          >
            <div className="card-img">
              <img src={supp.imgUrl} alt={supp.name} />
            </div>
            <div className="card-info-btn">
              <h2 className="bold-text">? {supp.name}</h2>
              <p className="p-text">{supp.desc}</p>
            </div>
            <a className="btn">{supp.btnInfo}</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Support;
