import React from "react";
import "./SupplyChain.css";
import { supplyChainContents } from "./supplyChainContents";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const createShortcut = (text, limit) => {
  const CUTTING_EXPRESSION = /\s+[^\s]*$/;
  if (text.length > limit) {
    const part = text.slice(0, limit - 3);
    if (part.match(CUTTING_EXPRESSION)) {
      return part.replace(CUTTING_EXPRESSION, " ...");
    }
    return part + "...";
  }
  return text;
};

const ChainContainer = ({
  img_link,
  post_heading,
  post_content,
  post_link,
}) => {
  return (
    <div className="supply-chain-outer-container">
      <Link id="supply-chain-post-link" to={post_link}>
        <div className="card-title">Case Study</div>
        <div className="supply-chain-image-container">
          <img src={img_link} />
          <div className="supply-chain-details">
            <p>{createShortcut(post_content, 91)}</p>
          </div>
        </div>
        <p>{createShortcut(post_heading, 91)}</p>
      </Link>
    </div>
  );
};

export const SupplyChain = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    setPosts(supplyChainContents);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="main-container">
      <h2 className="heading">What's happening in supply chain.</h2>
      <div id="supply-chain-container">
        {posts.map((ele, key) => (
          <ChainContainer
            img_link={ele.img_link}
            post_heading={ele.post_heading}
            post_content={ele.post_content}
            post_link={ele.post_link}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};
