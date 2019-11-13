import React, { useState } from "react";
import Form from "react-jsonschema-form-bs4";
import { changeNodeAtPath } from "react-sortable-tree";
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const PropTypeItemForm = props => {
  const {
    setPropTypeTree,
    removeModal,
    tree,
    modalData,
  } = props;
  const currentModalData = modalData[modalData.length - 1].node;
  const getNodeKey = ({ treeIndex }) => treeIndex;

  const [formSchema, setFormSchema] = useState(currentModalData);

  let schema = {
    type: "object",
    properties: {}
  };


  if (currentModalData.subtitle === "PropType") {
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

  if (currentModalData.subtitle === "PropType Prop") {
    schema.properties = {
      ...schema.properties,
      title: { type: "string", title: "Name", default: get(currentModalData, 'title', '') },
      description: {
        type: "string", title: "Description", default: get(currentModalData, 'description', '')
      },
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

    setPropTypeTree(newTree);
    removeModal();
  };

  const onChange = data => {
    //generateCode();
  };

  const uiSchema = {
    "ui:widget": "myCustomWidget",
    _id: { "ui:widget": "hidden" },
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
      />
    </div>
  );
};

export default PropTypeItemForm;
