const schema = {
  type: "object",
  properties: {
    name: { type: "string", title: "Name" },
    templateDescription: { type: "string", title: "Description" },
    templateTechnos: { type: "string", title: "Technos" },
    templateIsActive: { type: "boolean", title: "Active" },
    templateIsComponent: { type: "boolean", title: "isComponent" },
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
                formName: { type: "string", title: "Form Name", default: '' },
                formDescription: { type: "string", title: "Form Description", default: '' },
                formIsActive: { type: "boolean", title: "Form is Active", default: false},
                formSchema: { type: "string", title: "Form Schema", default: '' },
                formUISchema: { type: "string", title: "Form UI Schema", default: ''},
                formPrepareData: { type: "string", title: "Form Prepare Data", default: '' },
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
                            propName: { type: "string", title: "Prop Name", default: '' },
                            propType: { type: "string", title: "Prop Type", default: '' }
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
