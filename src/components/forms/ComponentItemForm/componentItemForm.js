import React, { useState, useEffect } from "react";
import Form from "react-jsonschema-form-bs4";
import { changeNodeAtPath } from "react-sortable-tree";
import isEmpty from 'lodash/isEmpty';

const ComponentItemForm = props => {
  const {
    setComponentTree,
    removeModal,
    tree,
    modalData,
    technos,
    providers
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
        default: currentModalData.id
      },
      title: {
        type: "string",
        title: "Title",
        default: currentModalData.title
      },
      description: {
        type: "string",
        title: "Description",
        default: currentModalData.description
      },
      componentImport: {
        type: "string",
        title: "Component Import",
        default: currentModalData.componentImport
      },
      provider: {
        type: "string",
        name: "Provider",
        enum: providersEnums,
        default: currentModalData.provider
      },
      techno: {
        type: "string",
        name: "Techno",
        enum: technosEnums,
        default: currentModalData.techno
      },
      isDefault: {
        type: "boolean",
        title: " Is Defauls",
        default: currentModalData.isDefault
      },
      closeTag: {
        type: "boolean",
        title: " CloseTag",
        default: currentModalData.closeTag
      },
    };
  };

  if (currentModalData.subtitle === "Component Prop") {
    schema.properties = {
      ...schema.properties,
      title: { type: "string", title: "Name", default: currentModalData.title },
      description: { type: "string", title: "Description", default: currentModalData.description },
      propType: { type: "string", title: "Prop Type", default: currentModalData.propType },
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
    }
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
