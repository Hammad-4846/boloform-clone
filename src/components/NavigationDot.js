import React from "react";

function NavigationDot({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <a
          key={`#${item + index}`}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313bac" } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDot;
