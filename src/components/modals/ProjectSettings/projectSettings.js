import React from "react";
import Modal from "react-bootstrap/Modal";
import ProjectSettingsForm from "../../forms/ProjectSettingsForm";

const ProjectSettings = ({ closeModal }) => {
  return (
    <div>
      <Modal show={true} aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Project Settings</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <ProjectSettingsForm />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectSettings;
