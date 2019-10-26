import React, { useState, useEffect } from "react";
import Form from "react-jsonschema-form-bs4";
import { changeNodeAtPath } from "react-sortable-tree";
//import schema from "./schema";
import { navigate } from "../../../utils";
//import uiSchema from "./uiSchema";
import AceEditor from "react-ace";


const TemplateItemForm = props => {
  const { setTemplateTree, removeModal, tree, modalData } = props;
  const currentModalData = modalData[modalData.length - 1].node;
  const getNodeKey = ({ treeIndex }) => treeIndex;

  const [formSchema, setFormSchema] = useState(currentModalData);

  let schema = {
    type: "object",
    properties: {}
  };

  if (currentModalData.subtitle === "File") {
    schema.properties = {
      ...schema.properties,
      fileName: {
        type: "string",
        title: " File Name",
        default: currentModalData.fileName
      },
      fileDescription: {
        type: "string",
        title: " File Description",
        default: currentModalData.fileDescription
      },
      fileSequence: {
        type: "number",
        title: " File Sequence",
        default: currentModalData.fileSequence
      },
      fileIsActive: {
        type: "boolean",
        title: " File Active",
        default: currentModalData.fileIsActive
      },
    };
  }

  if (currentModalData.subtitle === "Form") {
    schema.properties = {
      ...schema.properties,
      formName: {
        type: "string",
        title: "Form Name",
        default: currentModalData.formName
      },
      formDescription: {
        type: "string",
        title: "Form Description",
        default: currentModalData.formDescription
      },
      formIsActive: {
        type: "boolean",
        title: "Form is Active",
        default: currentModalData.formIsActive
      },
    };
  }

  if (currentModalData.subtitle === "Block") {
    schema.properties = {
      ...schema.properties,
      blockDescription: {
        type: "string",
        title: "Block Description",
        default: currentModalData.title
      },
      blockSequence: { type: "number", title: "Block Sequence" },
      blockIsActive: { type: "boolean", title: "Block is Active" },
    };
  }

  if (currentModalData.subtitle === "Schema") {
    schema.properties = {
      ...schema.properties,
      formSchema: {
        type: "string",
        title: "Form Schema",
        default: currentModalData.formSchema
      },
    };
  }

  if (currentModalData.subtitle === "UI Schema") {
    schema.properties = {
      ...schema.properties,
      formUISchema: {
        type: "string",
        title: "Form UI Schema",
        default: currentModalData.formUISchema
      },
    };
  }

  if (currentModalData.subtitle === "Prepare Data") {
    schema.properties = {
      ...schema.properties,
      formPrepareData: {
        type: "string",
        title: "Form Prepare Data",
        default: currentModalData.formPrepareData
      },
    };
  }

  if (currentModalData.subtitle === "Props") {
    schema.properties = {
      ...schema.properties,
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

  if (currentModalData.subtitle === "Block Implementation") {
    schema.properties = {
      ...schema.properties,
      blockImplementation: {
        type: "string",
        default: formSchema.blockImplementation
      }
    };
  }

  if (currentModalData.subtitle === "Template") {
    schema.properties = {
      ...schema.properties,
      id: {
        type: "string",
        title: "ID",
        default: currentModalData.id
      },
      name: {
        type: "string",
        title: "Name",
        default: currentModalData.name
      },
      templateDescription: {
        type: "string",
        title: "Description",
        default: currentModalData.templateDescription
      },
      templateIsActive: {
        type: "boolean",
        title: "Active",
        default: currentModalData.templateIsActive
      },
      templateIsComponent: {
        type: "boolean",
        title: "isComponent",
        default: currentModalData.templateIsActive
      },
      templateTechnos: {
        type: "string",
        title: "Technos",
        default: currentModalData.templateTechnos
      },
      userid: {
        type: "string",
        title: "User",
        default: currentModalData.userid
      }
    };
  }

  const onSubmit = data => {
    const { formData } = data;
    const newNode = {
      ...formData,
      children: modalData[0].node.children
    };

    const newTree = changeNodeAtPath({
      treeData: tree,
      path: modalData[0].path,
      getNodeKey,
      newNode
    });
    setTemplateTree(newTree);
    removeModal();
  };

  const onChange = data => {
    //generateCode();
  };

  const onValueChange = val => {
    console.log('console: ---------', val);
    console.log('console: ---------', modalData[0]);
    let newNode = {};
    if (currentModalData.subtitle === 'Schema') {
      newNode = {
        ...modalData[0].node,
        formSchema: val
      };
    } else if (currentModalData.subtitle === 'UISchema') {
      newNode = {
        ...modalData[0].node,
        formUISchema: val
      };
    } else if (currentModalData.subtitle === 'Block Implementation') {
      newNode = {
        ...modalData[0].node,
        blockImplementation: val
      };
    };

    console.log('console: newNode', newNode);

    console.log('console: formSchema', formSchema);

    const newTree = changeNodeAtPath({
      treeData: tree,
      path: modalData[0].path,
      getNodeKey,
      newNode
    });

    console.log('console: newTree', newTree);

    setTemplateTree(newTree);
  };

  const MyCustomWidget = props => {
    let val = '';
    if (currentModalData.subtitle === 'Schema') {
      val = currentModalData.formSchema;
    } else if (currentModalData.subtitle === 'UISchema') {
      val = currentModalData.formUISchema;
    } else if (currentModalData.subtitle === 'Block Implementation') {
      val = currentModalData.blockImplementation;
    }


    return (
      <div className="container_editor_area">
        <AceEditor
          mode="jsx"
          theme="xcode"
          onChange={onValueChange}
          name="UNIQUE_ID_OF_DIV"
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
      <>
        <Form
          schema={schema}
          onSubmit={onSubmit}
          onChange={onChange}
          formData={formSchema}
          uiSchema={uiSchema}
          widgets={widgets}
        />
      </>
    </div>
  );
};

export default TemplateItemForm;
