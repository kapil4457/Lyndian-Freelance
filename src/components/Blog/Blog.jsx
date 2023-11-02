import "./Blog.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { post_content } from "./post_content";
import blogBanner from "./Images/blog-banner.jpg";
import blogRightImage from "./Images/blog-right-image.jpg";
const Post = ({
  img_link,
  post_heading,
  post_content,
  date,
  comments,
  post_link,
}) => {
  return (
    <div className="article-featured">
      <div className="article-image">
        <img src={img_link} alt=" " />
      </div>
      <h2 className="article-title">{post_heading}</h2>
      <p className="article-info">
        {date} | {comments} comments
      </p>
      <p className="article-body">{post_content}</p>
      <a href={post_link} className="article-read-more">
        CONTINUE READING
      </a>
    </div>
  );
};

const TagElement = ({ tag_link, tag_content }) => {
  return (
    <a href={tag_link} className="blog-tag-element">
      {tag_content}
    </a>
  );
};

const CategoryElement = ({ categoty_content, category_link }) => {
  return (
    <li>
      <a className="blog-categories-element" href={category_link}>
        {categoty_content}
      </a>
      (1)
    </li>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const tags = [
    "Consulting",
    "Business",
    "Development",
    "Generic",
    "Branding",
    "Graphic",
    "Guide",
    "Hiring",
    "Photography",
    "Revenue",
    "Start Up",
  ];
  const categories = [
    "Automation",
    "Business",
    "Business Automation",
    "Business Management",
    "Business Process",
    "Management",
    "Uncategorized",
  ];

  const fetchPosts = () => {
    setPosts(post_content);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(posts.length / 3) &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div id="blog-main-container">
      <div id="blog-image-container">
        <img id="blog-image" src={blogBanner} alt="" />
        <h2 id="blog-heading">Blog</h2>

        <div id="blog-crumbs">
          <NavLink to={"/"}>Home</NavLink>
          <span className="blog-gap">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="blog-current">Blog</span>
        </div>
      </div>
      <div id="blog-post-container">
        {posts.length > 0 && (
          <div id="blog-content-container">
            {posts.slice(page * 3 - 3, page * 3).map((ele, key) => (
              <Post
                img_link={ele.img_link}
                post_heading={ele.post_heading}
                post_content={ele.post_content}
                date={ele.date}
                comments={ele.comments}
                key={key}
              />
            ))}
            {posts.length > 0 && (
              <div id="blog-pagiantion">
                <span
                  className={page > 1 ? "" : "blog-pagination-disabled"}
                  onClick={() => selectPageHandler(page - 1)}
                >
                  ◀️
                </span>
                {[...Array(Math.ceil(posts.length / 3))].map((_, i) => {
                  return (
                    <span
                      className={page === i + 1 && "blog-pagination-selected"}
                      onClick={() => selectPageHandler(i + 1)}
                      key={i}
                    >
                      {i + 1}
                    </span>
                  );
                })}
                <span
                  className={
                    page < Math.ceil(posts.length / 3)
                      ? ""
                      : "blog-pagination-disabled"
                  }
                  onClick={() => selectPageHandler(page + 1)}
                >
                  ▶️
                </span>
              </div>
            )}
          </div>
        )}
        <div id="bolg-sidebar-container">
          <div id="blog-search-local">
            <form id="blog-search-form">
              <input
                id="blog-search-input"
                type="text"
                placeholder="Search..."
              />
              <button id="blog-search-button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div id="blog-image-box-wrapper">
            <div id="blog-sidebar-pic">
              <img src={blogRightImage} alt="/" />
            </div>
            <div id="blog-sidebar-data">
              <h3 className="blog-sidebar-title">Global Conference</h3>
              <p className="blog-sidebar-excerpt">
                Nulla consequat massa quis Donec pede justo
              </p>
            </div>
          </div>

          <div id="blog-tags-container">
            <h2 id="blog-tag-heading">Tags</h2>

            <div id="blog-tag-element-container">
              {tags.map((ele, key) => (
                <TagElement tag_link={""} tag_content={ele} />
              ))}

              {/* <a href="/blogs" className="blog-tag-element">Consulting</a>
                  <a href="/blogs" className="blog-tag-element">Business</a>
                  <a href="/blogs" className="blog-tag-element">Development</a>
                  <a href="/blogs" className="blog-tag-element">Generic</a>
                  <a href="/blogs" className="blog-tag-element">Branding</a>
                  <a href="/blogs" className="blog-tag-element">Graphic</a>
                  <a href="/blogs" className="blog-tag-element">Guide</a>
                  <a href="/blogs" className="blog-tag-element">Hiring</a>
                  <a href="/blogs" className="blog-tag-element">Photography</a>
                  <a href="/blogs" className="blog-tag-element">Revenue</a>
                  <a href="/blogs" className="blog-tag-element">Start Up</a> */}
            </div>
          </div>

          <div id="blog-Categories-container">
            <h2 id="blog-Categories-heading">Categories</h2>

            <ul>
              {categories.map((ele, key) => (
                <CategoryElement category_link={""} categoty_content={ele} />
              ))}

              {/* <li >
                <a className="blog-categories-element" href="/blogs">Automation</a>
                (1)
              </li>
              <li >
                <a className="blog-categories-element" href="/blogs">Business</a>
                (1)
              </li>
              <li >
                <a className="blog-categories-element" href="/blogs">Business Automation</a>
                (3)
              </li>
              <li >
                <a className="blog-categories-element" href="/blogs">Business Management</a>
                (4)
              </li>
              <li >
                <a className="blog-categories-element" href="/blogs">Business Process</a>
                (2)
              </li>
              <li >
                <a className="blog-categories-element" href="/blogs">Management</a>
                (1)
              </li>
              <li >
                <a className="blog-categories-element" href="/blogs">Uncategorized</a>
                (2)
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
