import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3">
      <div>About</div>
      <button
        onClick={() => navigate("/56")}
        className="bg-amber-500 rounded p-2"
      >
        Go to Details page
      </button>
    </div>
  );
};

export default About;
