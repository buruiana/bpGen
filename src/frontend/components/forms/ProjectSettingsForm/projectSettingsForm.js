import React, { useState } from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from 'lodash/isEmpty';
import {
  PROJECT_NAME,
  PROJECT_DESTINATION,
  PROJECT_TEMPLATE,
  PROJECT_TECHNO,
} from "../../../utils/constants";

const ProjectSettingsForm = props => {
  const {
    removeModal,
    setProjectSettings,
    projectSettings,
    templates,
    setCustomForm,
    forms,
    technos,
    setCurrentTemplate,
  } = props;

  const [formState, setFormState] = useState(projectSettings);
  const technoTypeEnums = technos.map(el => el.name.toLowerCase());
  const requiredFieldsEnum = ["projectName", "projectTemplate"];

  const getTemplatesTypeEnumNames = () => {
    return !isEmpty(formState.projectTechno)
      ? templates.filter(el => {
          return el.templateTechnos
            .toLowerCase()
            .includes(
              formState.projectTechno
          )
      })
        .filter(e => e.templateIsActive)
        .map(e => e.name)
      : templates
        .filter(e => e.templateIsActive)
        .map(e => e.name);
  };

  const getTemplatesTypeEnums = () => {
    return !isEmpty(formState.projectTechno)
      ? templates.filter(el => {
        return el.templateTechnos
          .toLowerCase()
          .includes(
            formState.projectTechno
          )
      })
        .filter(e => e.templateIsActive)
        .map(e => e._id)
      : templates
        .filter(e => e.templateIsActive)
        .map(e => e._id);
  };

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
        enum: technoTypeEnums,
      },
      projectTemplate: {
        type: "string",
        title: PROJECT_TEMPLATE,
        enum: getTemplatesTypeEnums(),
        enumNames: getTemplatesTypeEnumNames()
      }
    }
  };
  const uiSchema = {
    projectTemplate: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a template"
    }
  };

  // const getFlatForms = files => {
  //   let customModals = [];
  //   files.map(file => {
  //     file.fileForms.map(form => {
  //       customModals.push(form);
  //     });
  //   });

  //   return customModals;
  // };

  const onSubmit = data => {
    const currentTemplate = templates.filter(
      el => el._id === data.formData.projectTemplate
    )[0];
    setCurrentTemplate(currentTemplate);
    setProjectSettings({
      ...data.formData,
      //template,
      //flatForms: getFlatForms(template.templateFiles)
    });
    const newForms = {
      ...forms,
      projectSettings: data.formData
    };
    setCustomForm(newForms);

    removeModal();
  };

  const log = type => console.log.bind(console, type);
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={formState}
      onChange={({ formData }) => {
        setFormState(formData);
      }}
    />
  );
};

export default ProjectSettingsForm;
