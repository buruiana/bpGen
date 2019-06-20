const uiSchema = {
  templateFiles: {
    items: {
      fileBlocks: {
        items: {
          blockImplementation: {
            "ui:widget": "textarea",
            "ui:options": {
              rows: 5
            }
          }
        }
      },
      fileForms: {
        items: {
          formSchema: {
            "ui:widget": "textarea",
            "ui:options": {
              rows: 5
            }
          },
          formUISchema: {
            "ui:widget": "textarea",
            "ui:options": {
              rows: 5
            }
          },
          formPrepareData: {
            "ui:widget": "textarea",
            "ui:options": {
              rows: 5
            }
          }
        }
      }
    }
  }
};

export default uiSchema;
