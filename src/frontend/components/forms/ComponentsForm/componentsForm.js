import React from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from "lodash/isEmpty";
import { navigate } from "../../../utils";

const ComponentsForm = props => {
  let {
    components,
    technos,
    providers,
    propTypes,
    setComponent
  } = props;
  if (isEmpty(components)) components = [];

  const componentsArray = components.filter(
    component => component.id === props.match.params.id
  );

  let component = !isEmpty(componentsArray)
    ? componentsArray[0]
    : {
        title: "",
        _id: "",
        description: "",
        provider: "",
        techno: "",
        componentProps: []
      };

  const {
    title,
    _id,
    description,
    techno,
    provider,
    componentImport,
    isDefault,
    isPublic,
    isActive
  } = component;

  const technosEnums = !isEmpty(technos)
    ? technos.map(techno => techno.name)
    : [];
  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];
  const propTypesEnums = !isEmpty(propTypes) ? propTypes.map(p => p.name) : [];

  const schema = {
    type: "object",
    required: ["title", "provider", "techno"],
    properties: {
      _id: { type: "string", name: "Id", default: _id },
      title: { type: "string", name: "Name", default: title },
      description: {
        type: "string",
        name: "Description",
        default: description || ""
      },
      provider: {
        type: "string",
        name: "Provider",
        enum: providersEnums,
        default: provider
      },
      componentImport: {
        type: "string",
        name: "Import Path",
        default: componentImport
      },
      techno: {
        type: "string",
        name: "Techno",
        enum: technosEnums,
        default: techno
      },
      isActive: {
        type: "boolean",
        name: "isActive",
        default: isActive || false
      },
      isDefault: {
        type: "boolean",
        name: "isDefault",
        default: isDefault || false
      },
      isPublic: {
        type: "boolean",
        name: "isPublic",
        default: isPublic || false
      },
      componentProps: {
        type: "array",
        items: {
          type: "object",
          required: ["title"],
          properties: {
            title: { type: "string", name: "Name" },
            description: { type: "string", name: "Description", default: "" },
            propType: {
              type: "string",
              name: "PropType",
              enum: propTypesEnums
            },
            propTypeIsrequired: {
              type: "boolean",
              name: "Prop Type isRequired",
              default: false
            }
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
    componentProps: {
      items: {
        description: {
          "ui:widget": "textarea",
          "ui:options": {
            rows: 5
          }
        },
        propType: { "ui:placeholder": "Choose an propType" }
      }
    }
  };

  const goTo = () => {
    navigate("/components");
  };

  const onSubmit = data => {
    const { formData } = data;
    setComponent(formData);
    goTo();
  };

  const log = type => console.log.bind(console, type);
  return (
    <div>
      <>
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
          formData={component}
        />
      </>
    </div>
  );
};

export default ComponentsForm;