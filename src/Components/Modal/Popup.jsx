import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Popup(props) {
  console.log("From modal",props);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
          <p><b>Description :</b> {props.description}</p>
          <p><b>Features :</b> {props.features}</p>
          <p><b>Price : </b>&#2547;{props.price}/night</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Book Now!
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Popup;
