return {
  templateName: "react-redux",
  templateDescription: "react-redux",
  templateTechnos: "react, redux",
  templateIsPublic: true,
  templateIsActive: true,
  templateFiles: [
    {
      fileName: "actionTypes.js",
      fileDescription: "file for action types",
      fileIsActive: true,
      fileSequence: 1,
      fileForms: [
        {
          formName: "actionTypesForm",
          formDescription: "form to add new actionTypes",
          formIsActive: true,
          formSchema: "actionTypesForm Schema",
          formUISchema: "actionTypesForm UISchema",
          formProps: [
            [
              {
                propName: "name",
                propType: "string"
              }
            ],
            [
              {
                propName: "isSuccess",
                propType: "boolean"
              }
            ],
            [
              {
                propName: "isFailure",
                propType: "boolean"
              }
            ]
          ]
        }
      ],
      fileBlocks: [
        {
          blockName: "definition block",
          blockDescription: "definition block descr",
          blockSequence: 1,
          blockIsActive: true,
          blockImplementation: ""
        }
      ]
    },
    {
      fileName: "actions.js",
      fileDescription: "file for actions",
      fileIsActive: true,
      fileSequence: 2,
      fileForms: [
        {
          formName: "actionsForm",
          formDescription: "form to add new actions",
          formIsActive: true,
          formSchema: "actionsForm Schema",
          formUISchema: "actionsForm UISchema",
          formProps: [
            [
              {
                propName: "name",
                propType: "string"
              }
            ],
            [
              {
                propName: "isActive",
                propType: "boolean"
              }
            ],
            [
              {
                propName: "payload",
                propType: "string"
              }
            ]
          ]
        }
      ],
      fileBlocks: [
        {
          blockName: "import block",
          blockDescription: "import block descr",
          blockSequence: 1,
          blockIsActive: true,
          blockImplementation: ""
        },
        {
          blockName: "definition block",
          blockDescription: "definition block descr",
          blockSequence: 2,
          blockIsActive: true,
          blockImplementation: ""
        }
      ]
    },
    {
      fileName: "reducer.js",
      fileDescription: "file for reducer",
      fileIsActive: true,
      fileSequence: 3,
      fileForms: [
        {
          formName: "reducerForm",
          formDescription: "form reducer",
          formIsActive: true,
          formSchema: "reducerForm Schema",
          formUISchema: "reducerForm UISchema",
          formProps: [
            [
              {
                propName: "name",
                propType: "string"
              }
            ],
            [
              {
                propName: "isActive",
                propType: "boolean"
              }
            ],
            [
              {
                propName: "payload",
                propType: "string"
              },
              {
                propName: "payloadVal",
                propType: "string"
              },
              {
                propName: "payloadInitVal",
                propType: "string"
              }
            ]
          ]
        }
      ],
      fileBlocks: [
        {
          blockName: "import block",
          blockDescription: "import block descr",
          blockSequence: 1,
          blockIsActive: true,
          blockImplementation: ""
        },
        {
          blockName: "initialState block",
          blockDescription: "initialState block descr",
          blockSequence: 2,
          blockIsActive: true,
          blockImplementation: ""
        },
        {
          blockName: "definition block",
          blockDescription: "definition block descr",
          blockSequence: 3,
          blockIsActive: true,
          blockImplementation: ""
        }
      ]
    }
  ]
};

//export default schema;
