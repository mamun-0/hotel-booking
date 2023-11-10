import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = (props) => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>We provide all class room with free breakfast </h1>
          <p>What are you waiting for!</p>
          <Link className="btn btn-warning p-2" to="/signup">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
