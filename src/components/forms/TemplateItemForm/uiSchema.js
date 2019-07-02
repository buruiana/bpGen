const uiSchema = {
  blockImplementation: {
    "ui:widget": "myCustomWidget"
  },
  templateFiles: {
    items: {
      fileBlocks: {
        items: {
          blockImplementation: {
            "ui:widget": "myCustomWidget"
          }
        }
      },
      fileForms: {
        items: {
          formSchema: {
            "ui:widget": "textarea",
            "ui:options": {
              rows: 15
            }
          },
          formUISchema: {
            "ui:widget": "textarea",
            "ui:options": {
              rows: 15
            }
          },
          formPrepareData: {
            "ui:widget": "textarea",
            "ui:options": {
              rows: 15
            }
          }
        }
      }
    }
  }
};

export default uiSchema;
