const schema = {
  type: "object",
  properties: {
    templateName: { type: "string", title: "Name" },
    templateDescription: { type: "string", title: "Description" },
    templateTechnos: { type: "string", title: "Technos" },
    templateIsPublic: { type: "boolean", title: "Public" },
    templateIsActive: { type: "boolean", title: "Active" },
    templateFiles: {
      type: "array",
      title: "Files",
      items: {
        type: "object",
        properties: {
          fileName: { type: "string", title: "File Name" },
          fileDescription: { type: "string", title: "File Description" },
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
                formProps: {
                  type: "array",
                  title: "Form Props",
                  items: {
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
