import React, { useState, useEffect } from "react";
import Form from "react-jsonschema-form-bs4";
import { changeNodeAtPath } from "react-sortable-tree";
//import schema from "./schema";
import { navigate } from "../../../utils";
//import uiSchema from "./uiSchema";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

const TemplateItemForm = props => {
  const { setTemplateTree, removeModal, tree, modalData } = props;
  let fileReader;
  const currentModalData = modalData[modalData.length - 1].node;
  const getNodeKey = ({ treeIndex }) => treeIndex;

  const [formSchema, setFormSchema] = useState(
    []
    //templates.filter(template => template.id === props.match.params.id)[0] || []
  );

  let schema = {
    type: "object",
    properties: {}
  };

  if (currentModalData.subtitle === "File") {
    schema.properties = {
      ...schema.properties,
      title: { type: "string", title: "Name" },
      subtitle: { type: "string", title: "File" },
      children: {
        type: "array",
        title: "",
        items: {}
      }
    };
  }

  if (currentModalData.subtitle === "Form") {
    schema.properties = {
      ...schema.properties,
      formDescription: { type: "string", title: "Form Description", default: currentModalData.formDescription },
      formIsActive: { type: "boolean", title: "Form is Active", default: currentModalData.formIsActive },
      formSchema: { type: "string", title: "Form Schema", default: currentModalData.formSchema },
      formUISchema: { type: "string", title: "Form UI Schema", default: currentModalData.formUISchema },
      formPrepareData: { type: "string", title: "Form Prepare Data", default: currentModalData.formPrepareData },
      formProps: {
        type: "array",
        title: "Form Props",
        items: {
          type: "object",
          properties: {
            item: {
              title: "Item",
              type: "array",
              items: {
                type: "object",
                properties: {
                  propName: { type: "string", title: "Prop Name", default: currentModalData.formProps.propName },
                  propType: { type: "string", title: "Prop Type", default: currentModalData.formProps.propType }
                }
              }
            }
          }
        }
      }
    };
  }

  if (currentModalData.subtitle === "Block") {
    schema.properties = {
      ...schema.properties,
      blockDescription: {
        type: "string",
        title: "Block Description"
      },
      blockSequence: { type: "number", title: "Block Sequence" },
      blockIsActive: { type: "boolean", title: "Block is Active" }
    };
  }

  if (currentModalData.subtitle === "Schema") {
    schema.properties = {
      ...schema.properties,
      formSchema: {
        type: "string",
        title: ""
      }
    };
  }

  if (currentModalData.subtitle === "UISchema") {
    schema.properties = {
      ...schema.properties,
      formUISchema: {
        type: "string",
        title: ""
      }
    };
  }

  if (currentModalData.subtitle === "Block Implementation") {
    schema.properties = {
      ...schema.properties,
      blockImplementation: {
        type: "string",
        title: ""
      }
    };
  }

  const onSubmit = data => {
    const { formData } = data;
    const newEl = {
      ...formData,
      children: modalData[0].node.children
    };

    const newTree = changeNodeAtPath({
      treeData: tree,
      path: modalData[0].path,
      getNodeKey,
      newNode: newEl
    });
    setTemplateTree(newTree);
    removeModal();
  };

  const onChange = data => {
    //generateCode();
  };

  // const handleFileRead = e => {
  //   const redux = new Function(fileReader.result);
  //   setFormSchema(redux);
  // };

  // const onImport = e => {
  //   fileReader = new FileReader();
  //   fileReader.onloadend = handleFileRead;
  //   fileReader.readAsText(e.target.files[0]);
  // };

  const onValueChange = val => {
    let newEl = {};
    if (currentModalData.subtitle === 'Schema') {
      newEl = {
        ...modalData[0].node,
        formSchema: val
      };
    } else if (currentModalData.subtitle === 'UISchema') {
      newEl = {
        ...modalData[0].node,
        formUISchema: val
      };
    }

    const newTree = changeNodeAtPath({
      treeData: tree,
      path: modalData[0].path,
      getNodeKey,
      newNode: newEl
    });
    setTemplateTree(newTree);
  };

  const MyCustomWidget = props => {
    let val = '';
    if (currentModalData.subtitle === 'Schema') {
      val = currentModalData.formSchema;
    } else if (currentModalData.subtitle === 'UISchema') {
      val = currentModalData.formUISchema;
    }

    return (
      <div className="container_editor_area">
        <Editor
          value={val}
          onValueChange={onValueChange}
          highlight={code => highlight(code, languages.js)
            .split('\n')
            .map(
              line =>
                `<span class="container_editor_line_number">${line}</span>`
            )
            .join('\n')
          }
          padding={10}
          className="container__editor"
        />
      </div>
    );
  };

  const widgets = {
    myCustomWidget: MyCustomWidget
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
    }
  };

  return (
    <div>
      <>
        {/* <input type="file" id="importFile" onChange={onImport} /> */}
        <Form
          schema={schema}
          onSubmit={onSubmit}
          onChange={onChange}
          //formData={formSchema}
          uiSchema={uiSchema}
          widgets={widgets}
        />
      </>
    </div>
  );
};

export default TemplateItemForm;
