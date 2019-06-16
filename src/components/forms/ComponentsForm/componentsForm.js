import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';
import { navigate } from '../../../utils';


const ComponentsForm = props => {
  let { components } = props;
  if (isEmpty(components)) components = [];

  const componentsArray = components.filter(component => component.id === props.match.params.id);

  let component = {};
  if (!isEmpty(componentsArray)) {
    component = componentsArray[0]
  } else {
    component = {
      title: '',
      id: '',
      description: '',
      provider: '',
      techno: '',
      componentProps: [],
    };
  }

  const { title, id, description, techno, provider } = component;
  const { providers, propTypes, providerPath, isDefault } = props;

  const technosEnums = ['REACT', 'REACT_NATIVE'];
  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];

  const propTypesEnums = !isEmpty(propTypes)
    ? propTypes.map(p => p.name)
    : [];

  const schema = {
    type: "object",
    required: ['title', 'provider', 'techno'],
    properties: {
      id: { type: "string", title: "Id", default: id },
      title: { type: "string", title: "Name", default: title },
      description: { type: "string", title: "Description", default: description || '' },
      provider: {
        type: "string",
        title: "Provider",
        enum: providersEnums,
        default: provider,
      },
      componentImport: {
        type: "string",
        title: "Import Path",
        default: providerPath,
      },
      techno: {
        type: 'string',
        title: "Techno",
        enum: technosEnums,
        default: techno,
      },
      isDefault: { type: "boolean", title: "isDefault", default: isDefault || false },
      componentProps: {
        type: "array",
        items: {
          type: 'object',
          required: ['name'],
          properties: {
            name: { type: 'string', title: 'Name' },
            description: { type: 'string', title: 'Description', default: '' },
            propType: {
              type: 'string',
              title: 'PropType',
              enum: propTypesEnums,
            },
            propTypeIsrequired: { type: 'boolean', title: 'Prop Type isRequired', default: false },
          }
        },
      },
    },
  };

  const uiSchema = {
    id: { "ui:widget": "hidden" },
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
        propType: { "ui:placeholder": "Choose an propType" },
      },
    },
  };

  const goTo = () => {
    navigate("/components");
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setComponent(formData);
    goTo();
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <div className="middle20">
      <div>
        <a onClick={goTo} className="simpleLink">
          Back
        </a>
      </div>
      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
      />
    </div>
  );
}

export default ComponentsForm;