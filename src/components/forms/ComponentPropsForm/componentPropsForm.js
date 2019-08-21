import React from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import { changeNodeAtPath } from "react-sortable-tree";

const ComponentPropsForm = props => {
  const { modalData, setTree, removeModal, tree, generateCode } = props;
  const { node, path } = modalData;

  const getNodeKey = ({ treeIndex }) => treeIndex;
  const schema = {
    type: "object",
    properties: {}
  };
  const properties = schema.properties;
  const propsInfo = get(node, "componentProps", []);

  propsInfo.map(prop => {
    properties[prop.title] = {
      type: "string",
      title: prop.title,
      val: prop.val,
      default: prop.val
    };
  });

  const uiSchema = {};

  propsInfo.map(prop => {
    uiSchema[prop.title] = { "ui:placeholder": `${prop.propType}` };
  });

  const onSubmit = data => {
    const { formData } = data;
    const newProps = [];

    Object.keys(formData).forEach(key => {
      let prop = node.componentProps.filter(prop => prop.title === key);

      let newProp = {};
      if (prop) {
        newProp = {
          propType: prop[0].propType,
          propTypeIsrequired: prop[0].propTypeIsrequired,
          title: prop[0].title,
          description: prop[0].description,
          val: formData[key]
        };
      } else {
        newProp = prop[0];
        newProp.val = null;
      }
      newProps.push(newProp);
    });

    const newNode = { ...node };
    newNode.componentProps = newProps;
    const hasComponentPropsVals = newProps.filter(el => el.val);
    newNode.hasComponentPropsVals = !isEmpty(hasComponentPropsVals);

    const newTree = {
      treeData2: changeNodeAtPath({
        treeData: tree,
        path,
        getNodeKey,
        newNode
      })
    };
    setTree(newTree);
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
      //formData={projectSettings}
    />
  );
};

export default ComponentPropsForm;
