import React from "react";
import Form from "react-jsonschema-form";
import schema from "./schema";
import uiSchema from "./uiSchema";

const FilesForm = props => {
  const formData = [
    {
      filename: '',
      isActive: true,
      forms: [],
      blocks: [],
      props: [],
    },
  ];

  const onSubmit = data => {
    //props.login(data.formData);
    console.log("console: change", data);
  };

  const onChange = data => {
    console.log("console: change", data);
  };

  return (
    <div>
      <Form
        schema={schema}
        onSubmit={onSubmit}
        onChange={onChange}
        formData={formData}
        uiSchema={uiSchema}
      />
    </div>
  );
};

export default FilesForm;
