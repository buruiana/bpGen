import React from "react";
import Modal from "react-bootstrap/Modal";
import CustomForm from "../../forms/CustomForm";
import { getFlatForms } from '../../../utils/helper';

const GenericModal = props => {
  const { removeModal, currentTemplate, name } = props;

  const flatForms = getFlatForms(currentTemplate.templateFiles);
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
