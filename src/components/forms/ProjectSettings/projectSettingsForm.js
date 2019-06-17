import React from "react";
import Form from "react-jsonschema-form";
import {
  APPLICATION,
  SERVICE,
  COMPONENT,
  PROJECT_TECHNO,
  PROJECT_TYPE,
  PROJECT_NAME,
  PROJECT_DESTINATION,
  PROJECT_TEMPLATE
} from "../../../utils/constants";

const ProjectSettingsForm = props => {
  const {
    removeModal,
    setProjectSettings,
    projectSettings,
    technos,
    templates
  } = props;

  const projectTypeEnums = [APPLICATION, SERVICE, COMPONENT];
  const technoTypeEnums = technos.map(el => el.name);
  const templatesTypeEnums = templates.map(el => el.name);
  const requiredFieldsEnum = ["projectName", "projectTechno", "projectType"];

  const schema = {
    type: "object",
    required: requiredFieldsEnum,
    properties: {
      projectName: {
        type: "string",
        title: PROJECT_NAME,
        default: projectSettings.projectName
      },
      projectDestination: {
        type: "string",
        title: PROJECT_DESTINATION,
        default: projectSettings.projectDestination
      },
      projectTechno: {
        type: "string",
        title: PROJECT_TECHNO,
        enum: technoTypeEnums
        //default: projectTechno || ""
      },
      projectType: {
        type: "string",
        title: PROJECT_TYPE,
        enum: projectTypeEnums
        //default: projectType || ""
      },
      projectTemplate: {
        type: "string",
        title: PROJECT_TEMPLATE,
        enum: templatesTypeEnums
      }
    }
  };
  const uiSchema = {
    projectType: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a type"
    },
    projectTechno: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a technology"
    },
    componentType: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a component type"
    },
    projectTemplate: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a template"
    }
  };

  const onSubmit = data => {
    console.log("console:-------------------------- ", data.formData);
    setProjectSettings(data.formData);
    removeModal();
  };

  const log = type => console.log.bind(console, type);
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={props}
    />
  );
};

export default ProjectSettingsForm;
