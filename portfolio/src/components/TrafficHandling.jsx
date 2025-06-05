import React, { useEffect, useState, useMemo} from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { FiThumbsUp, FiEye } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";

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
    }, [portfolioDataRef]); // will now not retrigger unless the ref changes
    

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
                <FiEye className="icon" />
                <span>{impressions}</span>
            </div>

            <div className="metric">
                {hasLiked ? (
                    <FaThumbsUp className="icon liked" />
                ) : (
                    <FiThumbsUp className="icon like-icon" onClick={handleLike} />
                )}
                <span>{likes}</span>
            </div>

            <style jsx>{`
                .traffic-container {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                    justify-content: center;
                    padding: 1.5rem;
                    margin-top: 0.75rem;
                }

                .metric {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.5rem;
                    background: #ffffff;
                    padding: 1rem 1.25rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .metric:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
                }

                .icon {
                    font-size: 1.5rem;
                    color: #2563eb;
                    transition: transform 0.3s ease;
                    cursor: default; /* default cursor for all icons */
                }

                .like-icon {
                    cursor: pointer; /* hand cursor only for FiThumbsUp */
                }

                .liked {
                    color: #db2777;
                    animation: pulse 0.4s ease;
                }

                .metric:hover .icon {
                    transform: scale(1.15) rotate(5deg);
                    color: #1d4ed8;
                }

                span {
                    font-weight: 600;
                    font-size: 1.2rem;
                    color: #1e40af;
                    margin: 0;
                }

                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
            `}</style>

        </div>
    );
};

export default TrafficHandling;