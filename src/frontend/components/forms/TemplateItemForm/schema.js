const schema = {
  type: "object",
  properties: {
    title: { type: "string", title: "Name" },
    templateDescription: { type: "string", title: "Description" },
    templateTechno: { type: "string", title: "Techno" },
    templateIsActive: { type: "boolean", title: "Active" },
    templateIsComponent: { type: "boolean", title: "isComponent" },
    templateIsPublic: { type: "boolean", title: "Public" },
    templateFiles: {
      type: "array",
      title: "Files",
      items: {
        type: "object",
        properties: {
          fileName: { type: "string", title: "File Name" },
          fileDescription: { type: "string", title: "File Description" },
          fileSequence: { type: "number", title: "File Sequence" },
          fileIsActive: { type: "boolean", title: "File is Active" },
          fileForms: {
            type: "array",
            title: "File Forms",
            items: {
              type: "object",
              properties: {
                formName: { type: "string", title: "Form Name" },
                formDescription: { type: "string", title: "Form Description" },
                formIsActive: { type: "boolean", title: "Form is Active" },
                formSchema: { type: "string", title: "Form Schema" },
                formUISchema: { type: "string", title: "Form UI Schema" },
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
              }
            }
          },
          fileBlocks: {
            type: "array",
            title: "File Blocks",
            items: {
              type: "object",
              properties: {
                blockName: { type: "string", title: "Block Name" },
                blockDescription: {
                  type: "string",
                  title: "Block Description"
                },
                blockSequence: { type: "number", title: "Block Sequence" },
                blockImplementation: {
                  type: "string",
                  title: "Block Implementation"
                },
                blockPreviewImplementation: {
                  type: "string",
                  title: "Block Preview Implementation"
                },
                blockIsActive: { type: "boolean", title: "Block is Active" }
              }
            }
          }
        }
      }
    }
  }
};

export default schema;
