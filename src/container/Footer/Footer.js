import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <div className="app__footer">
      <div className="left-part">
        <div className="first-col">
          {["Live Chat", "Support Email", "Help Center", "Video Call"].map(
            (item, index) => (
              <p key={item - index} className="bold-text">
                {item}
              </p>
            )
          )}
        </div>
        <div className="sec-col">
          {["Products", "Pricing", "Guides", "Templates"].map((item, index) => (
            <li className="p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </div>
      </div>
      <div className="right-part">
        <div className="thir-col">
            {["Products", "Pricing", "Guides", "Templates", "Form Aprooval", "Google Meet Attendance", "Timer"].map((item,index) => (
                <li className="p-text" key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
        </div>
        <div className="fort-col">
        {["Legal", "Terms of Service", "Privacy Policy", "Refund Policy", "Data Security"].map((item,index) => (
                <li className="p-text" key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
