import { Link } from 'react-router-dom';
import './portfolio.css';
import projectImg from '../assets/img/projects.png';

const Projects = () => {
    return (
        <section id='projects' className="blog-section">
            <div className="blog-component">
                <div className="blog-details">
                    <h2 className="blog-heading">Explore My Projects</h2>
                    <p className="blog-info">
                        Every time I learn something new, I build something to apply it—these are my personal and Professional projects.
                        They represent my growth, experiments, and real-world problem solving. Here are some cool things I’ve built so far.
                    </p>
                    <Link to="/projects" className="blog-btn">
                        Checkout My Projects
                    </Link>
                </div>
                <div className="blog-picture">
                    <img src={projectImg} alt="Blog Post" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
