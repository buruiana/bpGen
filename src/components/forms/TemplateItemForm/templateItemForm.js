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

const TemplatesForm = props => {
  const { setTemplateTree, removeModal, tree, modalData } = props;
  let fileReader;
  const currentModalData = modalData[modalData.length - 1].node;

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
      formDescription: { type: "string", title: "Form Description" },
      formDescription: { type: "string", title: "Form Description" },
      formIsActive: { type: "boolean", title: "Form is Active" },
      // formSchema: { type: "string", title: "Form Schema" },
      // formUISchema: { type: "string", title: "Form UI Schema" },
      formPrepareData: { type: "string", title: "Form Prepare Data" },
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
                  propName: { type: "string", title: "Prop Name" },
                  propType: { type: "string", title: "Prop Type" }
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

  if (currentModalData.subtitle === "Block Implementation") {
    schema.properties = {
      ...schema.properties,
      blockImplementation: {
        type: "string",
        title: "Block Implementation"
      }
    };
  }

  const onSubmit = data => {
    const { formData } = data;
    const getNodeKey = ({ treeIndex }) => treeIndex;
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

  const handleFileRead = e => {
    const redux = new Function(fileReader.result);
    setFormSchema(redux);
  };

  const onImport = e => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(e.target.files[0]);
  };

  const onValueChange = val => {
    console.log("console: vvvvvvvvvvvvvvvvvvvv", val);
  };

  const MyCustomWidget = props => {
    console.log("console: ============================", props);
    return (
      <Editor
        value={props.value || "Enter Block Implementation"}
        onValueChange={onValueChange}
        highlight={code =>
          highlight(code, languages.jsx)
            .split("\n")
            .map(
              line =>
                `<span class="container_editor_line_number">${line}</span>`
            )
            .join("\n")
        }
        padding={10}
        className="container__editor"
      />
    );
  };

  const widgets = {
    myCustomWidget: MyCustomWidget
  };

  const uiSchema = {
    "ui:widget": "myCustomWidget",
    blockImplementation: {
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

export default TemplatesForm;
