import React from "react";
import Form from "react-jsonschema-form";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

const CustomForm = props => {
  const { setCustomForm, flatForms, name, forms = [], removeModal } = props;
  if (isEmpty(flatForms)) flatForms = [];

  // get the current form
  const currentForm = flatForms.filter(form => form.formName === name)[0];

  // get the form data
  const getFormData = () => get(forms, `${name}`, []);

  // get the form schema and uischema
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
