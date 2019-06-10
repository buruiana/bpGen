const uiSchema = {
  users: {
    properties: {
      username: {
        'ui:options': {
          inputType: 'text',
          label: 'true',
          rows: 10,
        },
        'ui:placeholder': 'test',
        'ui:widget': 'text',
      },
      useraddress: {
        'ui:options': {
          inputType: 'text',
          label: 'true',
          rows: 10,
        },
        'ui:placeholder': 'aaaaaaaa',
        'ui:widget': 'textarea',
      },
    },
  },
};

export default uiSchema;