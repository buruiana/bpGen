import React from "react";
import Modal from "react-bootstrap/Modal";

const ComponentInfo = ({ removeModal, modalData }) => {
  const { node } = modalData[0];
  const renderDescription = descr => {
    return descr
      ? (
        <textarea rows={Math.round(descr.length / 33)} cols="100" className='textarea-noBorder'>
          {descr}
        </textarea>
      )
      : null;
  };

  return (
    <div>
      <Modal
        show
        aria-labelledby="example-custom-modal-styling-title"
        onHide={removeModal}
        dialogClassName="modal-dialog modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{node.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>Provider: {node.provider}</div>
          <div>Techno: {node.techno}</div>
          <div>{renderDescription(node.description)}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ComponentInfo;
