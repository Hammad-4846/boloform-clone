import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants/index";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-left">
        <div className="app__navbar-logo">
          <img src={images.logo} decoding="async" alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {["Products", "Pricing", "Guides", "Templates"].map((item, index) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="app__navbar-right">
        <div className="app__navbar-btn-field">
          <a className="btn">Install Now</a>
          <a className="btn btn-active">BoloForms Premium</a>
        </div>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Products", "Pricing", "Guides", "Templates"].map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
