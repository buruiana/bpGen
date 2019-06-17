import React from "react";
import isEmpty from "lodash/isEmpty";
import TestModal from "../modals/TestModal";
import ProjectSettings from "../modals/ProjectSettings";

const ModalsManager = modals => {
  const currentModal = !isEmpty(modals) ? modals[modals.length - 1] : null;

  if (currentModal) {
    switch (currentModal) {
      case "TEST_MODAL":
        return <TestModal />;
      case "PROJECT_SETTINGS":
        return <ProjectSettings />;
      default:
        return null;
    }
  }
};

export default ModalsManager;
