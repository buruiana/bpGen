import React from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from "lodash/isEmpty";
import { navigate, navigate2Login } from "../../../utils";

const PropTypesForm = props => {
  let { propTypes, isAuthenticated, setPropType } = props;
  if (isEmpty(propTypes)) propTypes = [];
  if (!isAuthenticated) navigate2Login();
  const propTypesArray = propTypes.filter(
    propType => propType._id === props.match.params.id
  );

  let propType = {};
  if (!isEmpty(propTypesArray)) {
    propType = propTypesArray[0];
  } else {
    propType = {
      name: "",
    };
  }

  const { name, _id } = propType;
  const schema = {
    type: "object",
    required: ["name"],
    properties: {
      _id: { type: "string", title: "Id", default: _id },
      name: { type: "string", title: "Name", default: name }
    }
  };
  const uiSchema = {
    _id: { "ui:widget": "hidden" }
  };

  const goTo = () => {
    navigate("/propTypes");
  };

  const onSubmit = data => {
    const { formData } = data;
    setPropType(formData);
    goTo();
  };

  const log = type => console.log.bind(console, type);
  return (
    <div>
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

export default PropTypesForm;
