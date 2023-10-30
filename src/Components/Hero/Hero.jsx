import "./Hero.css";
const Hero = (props) => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>We provide all class room with free breakfast </h1>
          <p>What are you waiting for!</p>
          <a className="btn btn-warning p-2" href="#">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
