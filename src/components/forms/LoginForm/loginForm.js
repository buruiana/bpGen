import React from "react";
import ReactDOM from "react-dom";
import Form from "react-jsonschema-form";
import schema from "./schema";
import uiSchema from "./uiSchema";

const LoginForm = props => {
  let formData = {
    email: "",
    password: ""
  };
  const onSubmit = data => {
    props.login(data.formData);
  };
  const onChange = data => {
    console.log("console: change");
  };

  return (
    <div>
      <Form
        schema={schema}
        onSubmit={onSubmit}
        onChange={onChange}
        formData={formData}
      />
    </div>
  );
};

export default LoginForm;
