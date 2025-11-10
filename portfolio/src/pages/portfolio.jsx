import { useEffect } from "react";
import { db } from "../firebase"; // Import Firestore instance
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
    // Function to increment impressions
    const incrementImpression = async () => {
        // Check local storage to see if the user has already been counted
        const hasImpression = localStorage.getItem("hasImpression");

        if (!hasImpression) {
            try {
                // Reference to the Firestore document
                const portfolioDataRef = doc(db, "portfolioData", "portfolioData");

                // Increment impressionsCount in Firestore
                await updateDoc(portfolioDataRef, {
                    impressionsCount: increment(1),
                });

                // Mark the user in local storage
                localStorage.setItem("hasImpression", "true");
            } catch (error) {
                console.error("Error updating impressions: ", error);
            }
        }
    };

    // Call the function on page load
    useEffect(() => {
        incrementImpression();
    }, []);
    return (
        <div className="portfolio-website">
            <Navbar />
            <div className="content">
                <Home />
                <Experience />
                <Skills />
                <Projects />
                <Blog />
                {/*<Contact /> */}
                <Footer />
            </div>
        </div>
    );
};

export default PortfolioWebsite;
