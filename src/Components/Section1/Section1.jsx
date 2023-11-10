import React from "react";
import Carousel from "../Carousel/Carousel";
import { S_1_IMG_1, S_1_IMG_2, S_1_IMG_3 } from "../Carousel/Carousel_IMG_URL";
import { S_2_IMG_1, S_2_IMG_2, S_2_IMG_3 } from "../Carousel/Carousel_IMG_URL";
import { S_3_IMG_1, S_3_IMG_2, S_3_IMG_3 } from "../Carousel/Carousel_IMG_URL";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class Section1 extends React.Component {
  render() {
    return (
      <div className="fluid m-2">
        <div className="row my-3">
          <div className="col">
            <Link to="/standard">
              <Carousel url_1={S_1_IMG_1} url_2={S_1_IMG_2} url_3={S_1_IMG_3} />
            </Link>
            <p className="lead text-center bg-dark text-white">
              <b>Visit Standard</b>
            </p>
          </div>
          <div className="col">
            <Link to="/deluxe">
              <Carousel url_1={S_2_IMG_1} url_2={S_2_IMG_2} url_3={S_2_IMG_3} />
            </Link>
            <p className="lead text-center bg-dark text-white">
              <b>Visit Deluxe</b>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to="/executive">
              <Carousel url_1={S_3_IMG_1} url_2={S_3_IMG_2} url_3={S_3_IMG_3} />
            </Link>
            <p className="lead text-center bg-dark text-white">
              <b>Visit Executive</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Section1;
