import React from "react";
import bgImage from "../assets/images/backgroundImage.jpg";
import LoginSignupForm from "./LoginSignupForm";
const MainContainer = () => {
  return (
    <div>
      <img src={bgImage} alt="background" className="bg-opacity-80" />
      <LoginSignupForm />
    </div>
  );
};

export default MainContainer;
