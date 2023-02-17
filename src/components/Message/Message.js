import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Message.scss";

function Message() {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="app__message app__flex"
      >
        <div className="app__review-img">
          <img src={images.moneyBackLogo} alt="moneyBackLogo" />
        </div>
        <div className="app__message-info">
          <p className="p-text" style={{ fontSize: "1.1rem" }}>
            MY 100% NO-RISK DOUBLE-GUARANTEE
          </p>
          <h2 className="bold-text">
            If you don’t like BoloForms over the next 30 days, I will happily
            refund 100% of your purchase. No questions asked.
          </h2>
          <div className="message-desc">
            <p className="p-text" >
              {`Here's why I'm offering this - 
              
I have seen the power of automating your business workflows. Take some time out of your busy schedule
today and see what all things can be automated in your workflows.


You will find that most of your time is going in doing things that
could be done better by automating. You just have to give it a
shot! 
              
Start with automating small workflow and then gradually you
will love it!!
              
Thank you, and I hope we'll get the opportunity to
be a part of your growth journey soon!`}
            </p>
          </div>
          <h3 className="text-bold">Paresh Deshmukh</h3>
          <p className="text-bold">Co-Founder BoloForms</p>
        </div>
      </motion.div>
    </>
  );
}

export default Message;
