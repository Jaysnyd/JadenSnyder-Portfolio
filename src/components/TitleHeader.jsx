import React from "react";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div className="semi-bold md:text-5xl text-3xl textc">{title}</div>
    </div>
  );
};

export default TitleHeader;
