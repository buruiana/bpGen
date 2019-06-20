return {
  templateName: "react-redux",
  templateDescription: "react-redux",
  templateTechnos: "react, redux",
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
          formPrepareData: "",
          formProps: [
            {
              item: [
                {
                  propName: "name",
                  propType: "string"
                }
              ]
            },
            {
              item: [
                {
                  propName: "isSuccess",
                  propType: "boolean"
                }
              ]
            },
            {
              item: [
                {
                  propName: "isFailure",
                  propType: "boolean"
                }
              ]
            }
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
          formPrepareData: "",
          formProps: [
            {
              item: [
                {
                  propName: "name",
                  propType: "string"
                }
              ]
            },
            {
              item: [
                {
                  propName: "isActive",
                  propType: "boolean"
                }
              ]
            },
            {
              item: [
                {
                  propName: "payload",
                  propType: "string"
                }
              ]
            }
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
          formPrepareData: "",
          formProps: [
            {
              item: [
                {
                  propName: "name",
                  propType: "string"
                }
              ]
            },
            {
              item: [
                {
                  propName: "isActive",
                  propType: "boolean"
                }
              ]
            },
            {
              item: [
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
            }
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
