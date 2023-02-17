import React from "react";
import { images } from "../../constants";

import "./Testimonials.scss";

function Testimonials() {
  return (
    <div className="testimonials">
      <p className="">
        "“ Boloforms has completely revolutionized our form approval process. It
        is incredibly easy to use and simple to set up, saving us countless
        hours of work. We can now easily manage all of our form approvals,
        assign tasks to different team members and track progress all in one
        place. Boloforms is a must-have for any business looking for an
        efficient Form Approval Workflow Software! ""
      </p>
      <img src={images.stars} alt="stars" />
      <div className="owner-info">
        <img src={images.cos1} />
        <div className="owner-detail">
          <h3 className="bold-text">Patrick Nyama,</h3>
          <p className="p-text">Edmonton CA</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
