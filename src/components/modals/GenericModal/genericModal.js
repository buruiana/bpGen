import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CustomForm from "../../forms/CustomForm";

const GenericModal = props => {
  const { removeModal, flatForms, name } = props;
  const currentForm = flatForms.filter(form => form.formName === name)[0];

  return (
    <div>
      <Modal show={true} onHide={removeModal}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {currentForm.formName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomForm name={name} />
        </Modal.Body>
      </Modal>
      ;
    </div>
  );
};

export default GenericModal;
