import React from "react";
import isEmpty from "lodash/isEmpty";
import GenericModal from "./GenericModal";
import ProjectSettings from "../modals/ProjectSettings";
import { allmodals } from "../../utils/constants";

const ModalsManager = (modals, projectSettings) => {
  const currentModal = !isEmpty(modals) ? modals[modals.length - 1] : null;
  let customModals = [];
  if (!isEmpty(projectSettings)) {
    projectSettings.template.templateFiles.map(file => {
      file.fileForms.map(form => {
        customModals.push(form.formName);
      });
    });
  }

  const getCustomModals = currentModal => {
    return customModals.includes(currentModal) ? (
      <GenericModal name={currentModal} />
    ) : null;
  };

  if (currentModal) {
    switch (currentModal) {
      case allmodals.PROJECT_SETTINGS:
        return <ProjectSettings />;
      default:
        return getCustomModals(currentModal);
    }
  }
};

export default ModalsManager;
