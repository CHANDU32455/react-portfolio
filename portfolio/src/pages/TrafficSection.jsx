import TrafficHandling from '../components/TrafficHandling';
import '../css/trafficsection.css';

export default function TrafficSection() {
    return (
        <section className="traffic-section">
            <div className="traffic__content">
                <h2 className="traffic-title">Who's Visiting?</h2>
                <p className="traffic-description">
                    Here’s how visitors are engaging with my portfolio — likes, views, and more. Thanks for checking out my work!
                </p>
            </div>
            <div className="traffic__container">
                <div className="traffic-widget">
                    <TrafficHandling />
                </div>
            </div>
        </section>
    );
}
