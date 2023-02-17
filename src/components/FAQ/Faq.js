import React, { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

import "./Faq.scss";

function Faq() {
  const [toggle, setToggle] = useState(false);

  const showContent = (e) => {
    setToggle(!toggle);
  };
  return (
    <div className="app__faq">
      <div className="app_faq-info">
        <h2 className="bold-text">
          What is the difference between email and request
        </h2>
        {toggle && (
          <p>
            What is the difference between email and requestWhat is the
            difference between email and requestWhat is the difference between
            email and request
          </p>
        )}
      </div>
      {toggle ? (
        <AiOutlineArrowUp onClick={showContent} size={20} />
      ) : (
        <AiOutlineArrowDown onClick={showContent} size={20} />
      )}
    </div>
  );
}

export default Faq;
