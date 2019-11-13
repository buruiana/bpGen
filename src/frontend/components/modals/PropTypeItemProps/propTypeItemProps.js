import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypeItemForm from "../../forms/PropTypeItemForm";

const PropTypeItemProps = ({ removeModal, modalData }) => {
  const { node } = modalData[modalData.length - 1];
  return (
    <div>
      <Modal
        show={true}
        aria-labelledby="contained-modal-title-lg"
        onHide={removeModal}
        dialogClassName="modal-dialog modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit {node.subtitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <PropTypeItemForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PropTypeItemProps;
