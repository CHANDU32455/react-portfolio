import React from "react";
import { Link } from "react-router-dom";
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
      title: "Mastering Flexbox",
      description:
        "Learn how to create responsive and flexible layouts using Flexbox.",
      link: "/blogs/mastering-css-grid-and-flexbox",
    },
    {
      id: 4,
      title: "Getting Started with IndexedDB",
      description:
        "An overview of IndexedDB, its use cases, and how to perform basic operations.",
      link: "/blogs/getting-started-with-indexeddb",
    },
    {
      id: 5,
      title: "IndexedDB Setup",
      description:
        "A complete setup and basic CRUD operations in IndexedDB.",
      link: "/blogs/indexdb-setup",
    },
    {
      id: 6,
      title: "IndexedDB Advanced",
      description:
        "Advanced operatins on IndexedDB including media files in Blobs way.",
      link: "/blogs/Advanced-indexedDB",
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
            <Link to={blog.link} className="bloglist-tile-link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
