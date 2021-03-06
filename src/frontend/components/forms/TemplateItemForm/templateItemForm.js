import React, { useState, useEffect } from 'react';
import Form from 'react-jsonschema-form-bs4';
import { changeNodeAtPath } from 'react-sortable-tree';
import AceEditor from 'react-ace';
import "brace/mode/jsx";
import "brace/theme/github";

import {
  getNewtemplate,
  getNewNodeForValueChange,
  getSchema
} from './helper';

const TemplateItemForm = props => {
  const {
    setTemplateTree,
    removeModal,
    tree,
    modalData,
    technos,
  } = props;

  const currentModalData = modalData[modalData.length - 1].node;
  const getNodeKey = ({ treeIndex }) => treeIndex;

  const schema = getSchema(
    currentModalData,
    {
      type: 'object',
      properties: {},
    },
    {
      technos,
    }
  );

  const onSubmit = data => {
    const { formData } = data;
    const newTemplate = getNewtemplate(formData);

    const newTree = changeNodeAtPath({
      treeData: tree,
      path: modalData[0].path,
      getNodeKey,
      newNode: newTemplate
    });

    setTemplateTree(newTree);
    removeModal();
  };

  const onChange = data => {
    //generateCode();
  };

  const onValueChange = val => {
    let newNode = getNewNodeForValueChange(currentModalData, modalData, val);

    const newTree = changeNodeAtPath({
      treeData: tree,
      path: modalData[0].path,
      getNodeKey,
      newNode
    });

    setTemplateTree(newTree);
  };

  const MyCustomWidget = props => {
    let val = '';
    if (currentModalData.subtitle === 'Schema') {
      val = currentModalData.formSchema;
    } else if (currentModalData.subtitle === 'UI Schema') {
      val = currentModalData.formUISchema;
    } else if (currentModalData.subtitle === 'Block Implementation') {
      val = currentModalData.blockImplementation;
    } else if (currentModalData.subtitle === 'Block Preview Implementation') {
      val = currentModalData.blockPreviewImplementation;
    } else if (currentModalData.subtitle === 'Prepare Data') {
      val = currentModalData.prepareData;
    }


    return (
      <div className='container_editor_area'>
        <AceEditor
          mode="jsx"
          theme="github"
          onChange={onValueChange}
          name='UNIQUE_ID_OF_DIV'
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2
          }}
          fontSize={12}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={val}
        />
      </div>
    );
  };

  const widgets = {
    myCustomWidget: MyCustomWidget
  };

  const uiSchema = {
    'ui:widget': 'myCustomWidget',
    _id: { 'ui:widget': 'hidden' },
    userid: { 'ui:widget': 'hidden' },
    blockImplementation: {
      'ui:widget': 'myCustomWidget'
    },
    blockPreviewImplementation: {
      'ui:widget': 'myCustomWidget'
    },
    formSchema: {
      'ui:widget': 'myCustomWidget'
    },
    formUISchema: {
      'ui:widget': 'myCustomWidget'
    },
    formPrepareData: {
      'ui:widget': 'myCustomWidget'
    }
  };

  return (
    <div>
      <>
        <Form
          schema={schema}
          onSubmit={onSubmit}
          onChange={onChange}
          formData={currentModalData}
          uiSchema={uiSchema}
          widgets={widgets}
        />
      </>
    </div>
  );
};

export default TemplateItemForm;
