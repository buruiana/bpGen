const uiSchema = {
  templateFiles: {
    items: {
      fileBlocks: {
        items: {
          blockImplementation: {
            "ui:widget": "textarea",
            "ui:options": {
              rows: 15
            }
          },
          blockPreviewImplementation: {
            "ui:widget": "textarea",
            "ui:options": {
              rows: 15
            }
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
