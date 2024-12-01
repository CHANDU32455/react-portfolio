import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import blogpost from '../assets/blogpost.jpeg';

const Blog = () => {
    return (
        <section id='blogs' className="blog-section">
            <div className="blog-component">
                <div className="blog-details">
                    <h2 className="blog-heading">Explore My Blogs</h2>
                    <p className="blog-info">
                        I share insights, tutorials, and experiences in programming and technology.
                        Check out my latest blogs to learn something new today!
                    </p>
                    <Link to="/blogs" className="blog-btn">
                        Checkout My Blog Posts
                    </Link>
                </div>
                <div className="blog-picture">
                    <img src={blogpost} alt="Blog Post" />
                </div>
            </div>
        </section>
    );
};

export default Blog;
