import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';
import { navigate } from '../../../utils';


const ComponentsForm = props => {
  let { components, technos, providers, propTypes } = props;
  if (isEmpty(components)) components = [];

  const componentsArray = components.filter(component => component.id === props.match.params.id);

  let component = (!isEmpty(componentsArray))
    ? componentsArray[0]
    : {
      name: '',
      id: '',
      description: '',
      provider: '',
      techno: '',
      componentProps: [],
    };

  const { name, id, description, techno, provider, componentImport, isDefault } = component;

  const technosEnums = !isEmpty(technos)
    ? technos.map(techno => techno.name)
    : [];
  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];
  const propTypesEnums = !isEmpty(propTypes)
    ? propTypes.map(p => p.name)
    : [];

  const schema = {
    type: "object",
    required: ['name', 'provider', 'techno'],
    properties: {
      id: { type: "string", name: "Id", default: id },
      name: { type: "string", name: "Name", default: name },
      description: { type: "string", name: "Description", default: description || '' },
      provider: {
        type: "string",
        name: "Provider",
        enum: providersEnums,
        default: provider,
      },
      componentImport: {
        type: "string",
        name: "Import Path",
        default: componentImport,
      },
      techno: {
        type: 'string',
        name: "Techno",
        enum: technosEnums,
        default: techno,
      },
      isDefault: { type: "boolean", name: "isDefault", default: isDefault || false },
      componentProps: {
        type: "array",
        items: {
          type: 'object',
          required: ['name'],
          properties: {
            name: { type: 'string', name: 'Name' },
            description: { type: 'string', name: 'Description', default: '' },
            propType: {
              type: 'string',
              name: 'PropType',
              enum: propTypesEnums,
            },
            propTypeIsrequired: { type: 'boolean', name: 'Prop Type isRequired', default: false },
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
    <div>
      <>
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
          formData={component}
        />
      </>
    </div>
  );
}

export default ComponentsForm;