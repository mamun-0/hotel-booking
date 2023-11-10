import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import OrderForm from "../OrderForm/OrderForm";
import { connect } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Popup(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const ownerInfoUI = () => {
    const { isBooked } = props;
    if (isBooked) {
      return null;
    } else {
      return <OrderForm toggle={toggle} {...props} />;
    }
  };
  const isLoggedIn = () => {
    if (props.storeSignIn) {
      return props.storeSignIn;
    } else if (props.storeSignUp) {
      return props.storeSignUp;
    } else {
      return null;
    }
  };
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        View
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>See Details</ModalHeader>
        <ModalBody>
          <img
            style={{ width: `100%`, height: `300px`, objectFit: "cover" }}
            className="mb-2"
            src={props.url}
            alt="img"
          />
          <p>
            <b>Description :</b> {props.description}
          </p>
          <p>
            <b>Features :</b> {props.features}
          </p>
          <p>
            <b>Price : </b>&#2547;{props.price}/night
          </p>
        </ModalBody>
        {props.owner.name || props.owner.mobile ? (
          <div className="m-2 p-2 border border-primary">
            <p className="lead">Booked by : {props.owner.name}</p>
            <p className="lead">Mobile : {props.owner.mobile}</p>
          </div>
        ) : null}
        {isLoggedIn() ? (
          ownerInfoUI()
        ) : (
          <Link className="btn btn-lg btn-danger"  to="/login">
            Please Login
          </Link>
        )}
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Popup);
