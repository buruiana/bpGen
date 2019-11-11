import React from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

const SpinnerModal = ({ isLoading, removeModal }) => {
  return (
    <div>
      <Modal
        show={isLoading}
        aria-labelledby="contained-modal-title-lg"
        onHide={removeModal}
      >

        <Modal.Body>
          <div>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SpinnerModal;
