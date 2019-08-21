import React from "react";
import Modal from "react-bootstrap/Modal";
import TemplateItemForm from "../../forms/TemplateItemForm";

const TemplateItemProps = ({ removeModal, modalData }) => {
  const { node } = modalData[modalData.length - 1];
  console.log("console: nodenode", node);
  return (
    <div>
      <Modal
        show={true}
        aria-labelledby="contained-modal-title-lg"
        onHide={removeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit {node.subtitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <TemplateItemForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TemplateItemProps;