import React from "react";
import '../css/bloglist.css';

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Guide to Installing Ubuntu Linux",
      description: "Learn how to install Ubuntu Linux by replacing Windows.",
      link: "/blogs/guide-to-installing-ubuntu-linux",
    },
    {
      id: 2,
      title: "Getting Started with ReactJS",
      description:
        "An introductory guide to ReactJS, covering components, state, and props.",
      link: "/blogs/getting-started-with-reactjs",
    },
    {
      id: 3,
      title: "Mastering CSS Grid and Flexbox",
      description:
        "Learn how to create responsive and flexible layouts using CSS Grid and Flexbox.",
      link: "/blogs/mastering-css-grid-and-flexbox",
    },
    
  ];

  return (
    <div className="bloglist">
      <h1 className="bloglist-title">Our Latest Blogs</h1>
      <div className="bloglist-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="bloglist-tile">
            <h2 className="bloglist-tile-title">{blog.title}</h2>
            <p className="bloglist-tile-description">{blog.description}</p>
            <a href={blog.link} className="bloglist-tile-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
