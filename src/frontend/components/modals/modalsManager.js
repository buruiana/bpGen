import React from "react";
import isEmpty from "lodash/isEmpty";
import GenericModal from "./GenericModal";
import ProjectSettings from "../modals/ProjectSettings";
import { allmodals } from "../../utils/constants";
import ComponentInfo from '../modals/ComponentInfo';
import ComponentProps from '../modals/ComponentProps';
import TemplateItemProps from '../modals/TemplateItemProps';
import ComponentItemProps from '../modals/ComponentItemProps';

const ModalsManager = (modals, projectSettings, currentTemplate) => {
  const currentModal = !isEmpty(modals) ? modals[modals.length - 1] : null;
  let customModals = [];
  if (!isEmpty(projectSettings)) {
    currentTemplate.templateFiles.map(file => {
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
      case allmodals.COMPONENT_INFO:
        return <ComponentInfo />;
      case allmodals.COMPONENT_PROPS:
        return <ComponentProps />;
      case allmodals.TEMPLATE_ITEM_PROPS:
        return <TemplateItemProps />;
      case allmodals.COMPONENT_ITEM_PROPS:
        return <ComponentItemProps />;
      default:
        return getCustomModals(currentModal);
    }
  }
};

export default ModalsManager;
