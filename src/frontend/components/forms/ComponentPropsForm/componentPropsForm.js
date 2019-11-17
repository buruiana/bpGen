import React from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import { changeNodeAtPath } from "react-sortable-tree";
import { getTechnoName } from '../../../utils';


const ComponentPropsForm = props => {
  const {
    modalData,
    setProjectTree,
    removeModal,
    tree,
    generateCode,
    setCustomForm,
    forms,
  } = props;
  const { node, path } = modalData[0];

  const getNodeKey = ({ treeIndex }) => treeIndex;
  const uiSchema = { componentProps: {}};
  const schema = {
    type: "object",
    properties: {}
  };
  const properties = schema.properties;
  const propsInfo = get(node, "componentProps", []);

  propsInfo.map(prop => {
    const { title, propTypeVal, val, propTypeProp } = prop;
    if (get(prop, 'propTypeProp', '').includes('oneOf')) {
      const propEnum = propTypeVal.replace(/'/g, '').split('|')

      properties[title] = {
        type: "string",
        title: title,
        enum: propEnum,
        default: val
      };

      uiSchema[title] = {
        "ui:placeholder": "Select",
          "ui:options": {
          label: true
        }
      }
    } else {
      properties[title] = {
        type: "string",
        title: title,
        default: val
      };
      uiSchema[title] = {
        "ui:placeholder": propTypeProp,
      }
    }
  });

  const onSubmit = data => {
    const { formData } = data;
    const newProps = [];

    Object.keys(formData).forEach(key => {
      let prop = node.componentProps.filter(prop => prop.title === key)[0];
      prop = { ...prop, val: formData[key] }
      newProps.push(prop);
    });

    const newNode = { ...node };
    newNode.componentProps = newProps;
    const hasComponentPropsVals = newProps.filter(el => el.val);
    newNode.hasComponentPropsVals = !isEmpty(hasComponentPropsVals);

    const newTree = changeNodeAtPath({
      treeData: tree,
      path,
      getNodeKey,
      newNode
    });

    setProjectTree(newTree);

    const newForms = {
      ...forms,
      tree: newTree,
    };

    setCustomForm(newForms);
    generateCode();
    removeModal();
  };

  const log = type => console.log.bind(console, type);
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
    />
  );
};

export default ComponentPropsForm;
