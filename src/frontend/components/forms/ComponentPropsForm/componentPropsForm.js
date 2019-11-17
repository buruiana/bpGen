import React from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import { changeNodeAtPath } from "react-sortable-tree";
import { getTechnoName } from '../../../utils';


const ComponentPropsForm = props => {
  const {
    modalData,
    setProject,
    removeModal,
    tree,
    generateCode,
    setCustomForm,
    forms,
    templates,
    propTypes,
  } = props;
  const { node, path } = modalData[0];

  const getNodeKey = ({ treeIndex }) => treeIndex;
  const uiSchema = {};
  const schema = {
    type: "object",
    properties: {}
  };
  const properties = schema.properties;
  const propsInfo = get(node, "componentProps", []);

  propsInfo.map(prop => {
    console.log('console: ===========================', prop);
    if (get(prop, 'propTypeProp', '').includes('oneOf')) {
      // const xx = propTypes[0].propTypeProps
      //   .filter(e => e.title === prop.propTypeProp)
      //   .map(e => e);
      const propEnum = prop.propTypeVal.replace(/'/g, '').split('|')
      const { title, propTypeVal } = prop;
      properties[title] = {
        type: "string",
        title: title,
        //default: propTypeVal,
        enum: propEnum
      };

      uiSchema[title] = {
        "ui:placeholder": "Select",
          "ui:options": {
          label: true
        }
      }
    } else {
      properties[prop.title] = {
        type: "string",
        title: prop.title,
        default: prop.propTypeVal
      };
    }
  });

  propsInfo.map(prop => {
    uiSchema[prop.title] = { "ui:placeholder": `${prop.propTypeProp}` };
  });

  const onSubmit = data => {
    const { formData } = data;
    const newProps = [];

    Object.keys(formData).forEach(key => {
      let prop = node.componentProps.filter(prop => prop.title === key);

      let newProp = {};
      if (prop) {
        newProp = {
          propTypeProp: prop[0].propTypeProp,
          propTypeVal: formData[key],
          propTypeIsRequired: prop[0].propTypeIsRequired,
          title: prop[0].title,
          description: prop[0].description,
        };
      } else {
        newProp = prop[0];
        newProp.propTypeVal = '';
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

    setProject(newTree);

    const newForms = {
      ...forms,
      tree: newTree.treeData2,
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
