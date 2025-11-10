import { useEffect } from "react";
import { db } from "../firebase";
import { doc, updateDoc, increment } from "firebase/firestore";
import "./portfolio.css";
import Navbar from "./navbar";
import Home from "./homepage";
import Experience from "./experience";
import Skills from "./skills_scrolling";
import Projects from "./projects";
import Blog from "./blogs";
import Footer from "./footer";

const PortfolioWebsite = () => {
    const incrementImpression = async () => {
        const hasImpression = localStorage.getItem("hasImpression");

        if (!hasImpression) {
            try {
                const portfolioDataRef = doc(db, "portfolioData", "portfolioData");
                await updateDoc(portfolioDataRef, {
                    impressionsCount: increment(1),
                });
                localStorage.setItem("hasImpression", "true");
            } catch (error) {
                console.error("Error updating impressions: ", error);
            }
        }
    };

    useEffect(() => {
        incrementImpression();
    }, []);

    return (
        <div className="portfolio-website">
            <Navbar />
            <div className="portfolio-content">
                <Home />
                <Experience />
                <Skills />
                <Projects />
                <Blog />
                <Footer />
            </div>
        </div>
    );
};

export default PortfolioWebsite;