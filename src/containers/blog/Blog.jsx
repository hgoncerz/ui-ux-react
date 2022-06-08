import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupA">
          <Article
            imgUrl={blog01}
            date="sep 26, 2022"
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, cupiditate?"
          />
        </div>
        <div className="gpt3__blog-container-groupB">
          <Article
            imgUrl={blog02}
            date="sep 26, 2022"
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, cupiditate?"
          />
          <Article
            imgUrl={blog03}
            date="sep 26, 2022"
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, cupiditate?"
          />
          <Article
            imgUrl={blog04}
            date="sep 26, 2022"
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, cupiditate?"
          />
          <Article
            imgUrl={blog05}
            date="sep 26, 2022"
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, cupiditate?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
