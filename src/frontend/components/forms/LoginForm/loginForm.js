import React, { useState } from "react";
import Form from "react-jsonschema-form-bs4";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import schema from "./schema";
import uiSchema from "./uiSchema";

const LoginForm = props => {
  const [loginType, setLoginType] = useState('signin');
  let formData = {
    title: "",
    password: "",
    isAdmin: false
  };
  const { register, authenticate } = props;

  const onSubmitSignIn = data => authenticate(data.formData);
  const onSubmitSignUp = data => register(data.formData);

  const onChange = data => {
    console.log("console: change");
  };

  return (
    <div className='login-form'>
      <Tabs
        id="login-tabs"
        activeKey={loginType}
        onSelect={k => setLoginType(k)}
      >
        <Tab eventKey='signin' title="Sign In">
          <div className='login-container'>
            <Form
              schema={schema}
              onSubmit={onSubmitSignIn}
              onChange={onChange}
              formData={formData}
              uiSchema={uiSchema}
            />
          </div>
        </Tab>
        <Tab eventKey='signup' title="Sign Up">
          <div className='login-container'>
            <Form
              schema={schema}
              onSubmit={onSubmitSignUp}
              onChange={onChange}
              formData={formData}
              uiSchema={uiSchema}
            />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default LoginForm;
