import React from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

import { getFlatForms } from '../../../utils/helper';

const CustomForm = props => {
  const {
    setCustomForm,
    name,
    forms = [],
    removeModal,
    generateCode,
    currentTemplate,
  } = props;

  const flatForms = getFlatForms(currentTemplate.templateFiles) || [];
  const currentForm = flatForms.filter(form => form.formName === name)[0];

  const getFormData = () => {
    let formData = get(forms, `${name}`, []);

    if (isEmpty(formData) && currentForm.formPrepareData) {
      formData = new Function("forms", currentForm.formPrepareData)(forms);
    }
    return formData;
  };

  const schema = new Function(currentForm.formSchema)();
  const uiSchema = new Function(currentForm.formUISchema)();

  const onSubmit = data => {
    const { formData } = data;
    const newForms = {
      ...forms,
      [currentForm.formName]: formData
    };
    setCustomForm(newForms);
    removeModal();
    generateCode();
  };

  const log = type => console.log.bind(console, type);
  return (
    <div className='wrapper'>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
        formData={getFormData()}
      />
    </div>
  );
};

export default CustomForm;
