const uiSchema = {
  templateFiles: {
    items: {
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
