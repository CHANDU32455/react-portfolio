import React, { useEffect, useState, useMemo } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { FiThumbsUp, FiEye } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import "../css/TrafficHandling.css";

const TrafficHandling = () => {
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [impressions, setImpressions] = useState(0);

    const portfolioDataRef = useMemo(() => doc(db, "portfolioData", "portfolioData"), []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const hasViewed = sessionStorage.getItem("hasViewedTrafficPage");
                const docSnap = await getDoc(portfolioDataRef);
    
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setLikes(data.likes || 0);
                    setImpressions(data.impressions || 0);
    
                    if (!hasViewed) {
                        await updateDoc(portfolioDataRef, {
                            impressions: increment(1),
                        });
                        sessionStorage.setItem("hasViewedTrafficPage", "true");
                        setImpressions(prev => prev + 1);
                    }
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
    
        fetchData();
    }, [portfolioDataRef]);

    useEffect(() => {
        const liked = localStorage.getItem("hasLikedTrafficPage");
        if (liked === "true") {
            setHasLiked(true);
        }
    }, []);

    const handleLike = async () => {
        if (hasLiked) return;

        try {
            await updateDoc(portfolioDataRef, {
                likes: increment(1),
            });
            setLikes(prev => prev + 1);
            setHasLiked(true);
            localStorage.setItem("hasLikedTrafficPage", "true");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="traffic-container">
            <div className="metric">
                <FiEye className="icon eye-icon" />
                <span className="metric-count">{impressions}</span>
            </div>

            <div className="metric">
                {hasLiked ? (
                    <FaThumbsUp className="icon liked-icon" />
                ) : (
                    <FiThumbsUp className="icon like-icon" onClick={handleLike} />
                )}
                <span className="metric-count">{likes}</span>
            </div>
        </div>
    );
};

export default TrafficHandling;