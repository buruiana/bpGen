import React from "react";
import Modal from "react-bootstrap/Modal";
import ComponentPropsForm from "../../forms/ComponentPropsForm";

const ComponentProps = ({ removeModal }) => {
  return (
    <div>
      <Modal
        show={true}
        aria-labelledby="contained-modal-title-lg"
        onHide={removeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Component Props</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <ComponentPropsForm />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ComponentProps;
