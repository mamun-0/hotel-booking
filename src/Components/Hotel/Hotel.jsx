import "./Hotel.css";
import Popup from "../Modal/Popup";
const Hotel = (props) => {
  return (
    <div className="col-sm-5 m-2">
      <div className="card">
        <div className="card-body">
          <img src={props.url} alt="img-hotel" />
          <h5 className="card-title">Features : {props.features}</h5>
          <Popup {...props} />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
