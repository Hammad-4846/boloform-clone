import React from "react";
import Faq from "../../components/FAQ/Faq";

import "./FrequentlyQuestion.scss";

function FrequentlyQuestion() {
  return (
    <div className="app__FrequentlyQuestion app__flex">
      <div className="heading">
        <h2 className="head-text">Frequently Asked Question</h2>
      </div>
      <div className="app__FrequentlyQuestion-card app__flex">
        <Faq />
        <Faq />
        <Faq />
        <Faq />
        <Faq />
        <Faq />
        <Faq />
        <Faq />
      </div>
    </div>
  );
}

export default FrequentlyQuestion;
