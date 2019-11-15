import React from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import { changeNodeAtPath } from "react-sortable-tree";
import { getTechnoName } from '../../../utils';


const ComponentPropsForm = props => {
  const {
    modalData,
    setTree,
    removeModal,
    tree,
    generateCode,
    setCustomForm,
    forms,
    templates,
  } = props;
  const { node, path } = modalData[0];

  const getNodeKey = ({ treeIndex }) => treeIndex;
  const schema = {
    type: "object",
    properties: {}
  };
  const properties = schema.properties;
  const propsInfo = get(node, "componentProps", []);

  propsInfo.map(prop => {
    if (get(prop, 'subtitle', '').includes('string')
      || get(prop, 'propTypeProp', '').includes('string')) {
      properties[prop.title] = {
        type: "string",
        title: prop.title,
        val: prop.val,
        default: prop.val
      };
    }
    if (get(prop, 'subtitle', '').includes('oneOf') || get(prop, 'propTypeProp', '').includes('oneOf')) {
      const propEnum = prop.propTypeVal.replace(/'/g, '').split('|')
      properties[prop.title] = {
        type: "string",
        title: prop.title,
        val: prop.val,
        default: prop.val,
        enum: propEnum
      };
    }

  });

  const uiSchema = {};

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
          propTypeVal: prop[0].propTypeVal,
          propTypeIsRequired: prop[0].propTypeIsRequired,
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
    const templateTechno = templates
      .filter(e => e._id === forms.projectSettings.projectTemplate)
      .map(e => e.templateTechno)
    const newForms = {
      ...forms,
      tree: newTree.treeData2,
    };
    setCustomForm({
      forms: newForms,
    });
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
