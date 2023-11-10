import "./Carousel.css";
const Carousel = (props) => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner carousel_img">
        <div className="carousel-item active">
          <img
            src={props.url_1 || null}
            className="d-block w-100"
            alt="carousel_1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={props.url_2 || null}
            className="d-block w-100"
            alt="carousel_2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={props.url_3 || null}
            className="d-block w-100"
            alt="carousel_3"
          />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
