import React from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from "lodash/isEmpty";
import { navigate, navigate2Login } from "../../../utils";

const UsersForm = props => {
  let { users, isAuthenticated, setUser } = props;
  if (isEmpty(users)) users = [];
  if (!isAuthenticated) navigate2Login();
  const usersArray = users.filter(
    user => user._id === props.match.params.id
  );

  let user = {};
  if (!isEmpty(usersArray)) {
    user = usersArray[0];
  } else {
    user = {
      name: "",
      password: '',
      isAdmin: false,
    };
  }

  const { name, isAdmin, _id, password } = user;
  const schema = {
    type: "object",
    required: ["name", 'password'],
    properties: {
      _id: { type: "string", title: "Id", default: _id },
      name: { type: "string", title: "Name", default: name },
      password: { type: "string", title: "Name", default: password },
      isAdmin: { type: "boolean", title: "isAdmin", default: isAdmin },
    }
  };
  const uiSchema = {
    _id: { "ui:widget": "hidden" }
  };

  const goTo = () => {
    navigate("/users");
  };

  const onSubmit = data => {
    const { formData } = data;
    setUser(formData);
    goTo();
  };

  const log = type => console.log.bind(console, type);
  return (
    <div className='wrapper'>
      <div>
        <a onClick={goTo} className="simpleLink">
          Back
        </a>
      </div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
      />
    </div>
  );
};

export default UsersForm;
