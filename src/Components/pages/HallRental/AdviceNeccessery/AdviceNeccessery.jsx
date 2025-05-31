import React from "react";
import Button from "../../Home/Button/Button";
const AdviceNeccessery = () => {
  return (
    <div className="AdviceNeccessery">
      <div className="Container">
        <h1>
          <span>Need advice</span>on choosing?
        </h1>
        <h4>Let us help you find the perfect venue for your event!</h4>
        <Button text="Contact us" to="/Contactus" />
      </div>
    </div>
  );
};

export default AdviceNeccessery;
