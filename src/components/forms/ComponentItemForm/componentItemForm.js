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

  const technosEnums = !isEmpty(technos)
    ? technos.map(techno => techno.name)
    : [];
  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];

  if (currentModalData.subtitle === "Component") {
    schema.properties = {
      ...schema.properties,
      id: {
        type: "string",
        title: "Id",
        default: get(currentModalData, 'id', undefined),
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
        //default: currentModalData.provider
      },
      techno: {
        type: "string",
        name: "Techno",
        enum: technosEnums,
        //default: currentModalData.techno
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
    };
  };

  const propTypesEnums = !isEmpty(propTypes) ? propTypes.map(p => p.name) : [];

  if (currentModalData.subtitle === "Component Prop") {
    schema.properties = {
      ...schema.properties,
      title: { type: "string", title: "Name", default: currentModalData.title },
      description: { type: "string", title: "Description", default: currentModalData.description },
      propType: { type: "string", title: "Prop Type", enum: propTypesEnums},
      propTypeIsrequired: { type: "boolean", title: "is Required", default: currentModalData.propTypeIsrequired },
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
    id: { "ui:widget": "hidden" },
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
    propType: { "ui:placeholder": "Choose an propType" }
  };

  return (
    <div>
      <Form
        schema={schema}
        onSubmit={onSubmit}
        onChange={onChange}
        formData={formSchema}
        uiSchema={uiSchema}
      />
    </div>
  );
};

export default ComponentItemForm;
