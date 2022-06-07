import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio expedita quam maiores vitae quos. Illo."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, sit. Dolorem iste repellat in non!"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, sit. Dolorem iste repellat in non!"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, sit. Dolorem iste repellat in non!"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
