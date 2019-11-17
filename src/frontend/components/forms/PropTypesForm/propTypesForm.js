import React from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from "lodash/isEmpty";
import { navigate } from "../../../utils";

const PropTypesForm = props => {
  let {
    technos,
    providers,
    propTypes,
    setPropType
  } = props;
  if (isEmpty(propTypes)) propTypes = [];

  const propTypesArray = propTypes.filter(
    propType => propType._id === props.match.params.id
  );

  let propType = !isEmpty(propTypesArray)
    ? propTypesArray[0]
    : {
      description: "",
      provider: "",
      techno: "",
      propTypeProps: []
    };

  const {
    title,
    _id,
    description,
    isPublic,
    isActive
  } = propType;

  const schema = {
    type: "object",
    required: ["title"],
    properties: {
      _id: { type: "string", name: "Id", default: _id },
      title: { type: "string", name: "Name", default: title },
      description: {
        type: "string",
        name: "Description",
        default: description || ""
      },
      isActive: {
        type: "boolean",
        name: "isActive",
        default: isActive || false
      },
      isPublic: {
        type: "boolean",
        name: "isPublic",
        default: isPublic || false
      },
      propTypeProps: {
        type: "array",
        items: {
          type: "object",
          required: ["title"],
          properties: {
            title: { type: "string", name: "Name" },
            description: { type: "string", name: "Description", default: "" },
          }
        }
      }
    }
  };

  const uiSchema = {
    _id: { "ui:widget": "hidden" },
    description: {
      "ui:widget": "textarea",
      "ui:options": {
        rows: 15
      }
    },
    provider: { "ui:placeholder": "Choose a provider" },
    techno: { "ui:placeholder": "Choose a technology" },
    propTypeProps: {
      items: {
        description: {
          "ui:widget": "textarea",
          "ui:options": {
            rows: 5
          }
        },
      }
    }
  };

  const goTo = () => navigate("/propTypes");

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
        formData={propType}
      />
    </div>
  );
};

export default PropTypesForm;
