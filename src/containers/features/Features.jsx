import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ad?",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ad?",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ad?",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ad?",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          totam?
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
