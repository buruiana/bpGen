import React from "react";
import Modal from "react-bootstrap/Modal";

const ComponentInfo = ({ removeModal, modalData }) => {
  const { node } = modalData[0];
  console.log("console: ----------------", modalData);
  return (
    <div>
      <Modal
        show={true}
        aria-labelledby="contained-modal-title-lg"
        onHide={removeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{node.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>Provider: {node.provider}</div>
          <div>Techno: {node.techno}</div>
          <div>{node.description}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ComponentInfo;
