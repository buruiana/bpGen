import React, { useState } from "react";
import Form from "react-jsonschema-form-bs4";
import { changeNodeAtPath } from "react-sortable-tree";
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const ComponentItemForm = props => {
  const {
    setComponentTree,
    removeModal,
    tree,
    modalData,
    technos,
    providers,
    propTypes,
  } = props;
  const currentModalData = modalData[modalData.length - 1].node;
  const getNodeKey = ({ treeIndex }) => treeIndex;

  const [formSchema, setFormSchema] = useState(currentModalData);

  let schema = {
    type: "object",
    properties: {}
  };
  console.log('console: formSchemaformSchema', formSchema );
  const technosEnums = !isEmpty(technos)
    ? technos.map(techno => techno.name)
    : [];
  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];

  const getPropTypeValsEnums = () => {
    const propTypeProps = !isEmpty(formSchema.propType)
      ? propTypes
        .filter(el => el.title === formSchema.propType)
        .map(e => e.propTypeProps)
      : [];
    return !isEmpty(propTypeProps) && propTypeProps[0].map(e => e.title);
  };

  if (currentModalData.subtitle === "Component") {
    schema.properties = {
      ...schema.properties,
      _id: {
        type: "string",
        title: "Id",
        default: get(currentModalData, '_id', undefined),
      },
      title: {
        type: "string",
        title: "Title",
        default: get(currentModalData, 'title', ''),
      },
      description: {
        type: "string",
        title: "Description",
        default: get(currentModalData, 'description', ''),
      },
      componentImport: {
        type: "string",
        title: "Component Import",
        default: get(currentModalData, 'componentImport', ''),
      },
      provider: {
        type: "string",
        name: "Provider",
        enum: providersEnums,
      },
      techno: {
        type: "string",
        name: "Techno",
        enum: technosEnums,
      },
      isDefault: {
        type: "boolean",
        title: " Is Defauls",
        default: get(currentModalData, 'isDefault', false),
      },
      closeTag: {
        type: "boolean",
        title: " CloseTag",
        default: get(currentModalData, 'closeTag', false),
      },
      isPublic: {
        type: "boolean",
        title: " Is Public",
        default: get(currentModalData, 'isPublic', false),
      },
      isActive: {
        type: "boolean",
        title: " Is Active",
        default: get(currentModalData, 'isActive', false),
      },
    };
  };

  const propTypesEnums = !isEmpty(propTypes) ? propTypes.map(p => p.title) : [];

  if (currentModalData.subtitle === "Component Prop") {
    schema.properties = {
      ...schema.properties,
      title: { type: "string", title: "Name", default: get(currentModalData, 'title', '') },
      description: {
        type: "string", title: "Description", default: get(currentModalData, 'description', '') },
      propType: { type: "string", title: "Prop Type", enum: propTypesEnums },
      propTypeProp: { type: "string", title: "Prop Type Prop", enum: getPropTypeValsEnums() },
      propTypeVal: { type: "string", title: "Prop Type Val", default: get(currentModalData, 'propTypeVal', '') },
      propTypeIsrequired: {
        type: "boolean", title: "is Required", default: get(currentModalData, 'propTypeIsrequired', false) },
    }
  }

  const onSubmit = data => {
    const { formData } = data;
    const newNode = formData;

    const newTree = changeNodeAtPath({
      treeData: tree,
      path: modalData[0].path,
      getNodeKey,
      newNode
    });

    setComponentTree(newTree);
    removeModal();
  };

  const onChange = data => {
    //generateCode();
  };

  const uiSchema = {
    "ui:widget": "myCustomWidget",
    provider: { "ui:placeholder": "Choose a provider" },
    techno: { "ui:placeholder": "Choose a technology" },
    propTypeProp: { "ui:placeholder": "Choose a type" },
    _id: { "ui:widget": "hidden" },
    blockImplementation: {
      "ui:widget": "myCustomWidget"
    },
    formSchema: {
      "ui:widget": "myCustomWidget"
    },
    formUISchema: {
      "ui:widget": "myCustomWidget"
    },
    formPrepareData: {
      "ui:widget": "myCustomWidget"
    },
    description: {
      "ui:widget": "textarea",
      "ui:options": {
        rows: 15
      }
    },
    propType: { "ui:placeholder": "Choose a propType" }
  };

  return (
    <div>
      <Form
        schema={schema}
        onSubmit={onSubmit}
        onChange={onChange}
        formData={formSchema}
        uiSchema={uiSchema}
        onChange={({ formData }) => {
          setFormSchema(formData);
        }}
      />
    </div>
  );
};

export default ComponentItemForm;
