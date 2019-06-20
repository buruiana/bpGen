import React from "react";
import Form from "react-jsonschema-form";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

const CustomForm = props => {
  const {
    setCustomForm,
    flatForms,
    name,
    forms = [],
    removeModal,
    generateCode
  } = props;
  if (isEmpty(flatForms)) flatForms = [];

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
    <div className="middle20">
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
