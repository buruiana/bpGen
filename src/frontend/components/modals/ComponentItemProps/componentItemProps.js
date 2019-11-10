import React from "react";
import Modal from "react-bootstrap/Modal";
import ComponentItemForm from "../../forms/ComponentItemForm";

const ComponentItemProps = ({ removeModal, modalData }) => {
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
          <ComponentItemForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ComponentItemProps;
