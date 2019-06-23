return {
  templateName: "react-component",
  templateDescription: "react-component",
  templateTechnos: "react",
  templateIsActive: true,
  templateFiles: [
    {
      fileName: "index.js",
      fileDescription: "hoc",
      fileIsActive: true,
      fileSequence: 1,
      fileForms: [
        {
          formName: "HOC",
          formDescription: "form for hoc",
          formIsActive: true,
          formSchema: "",
          formUISchema: "",
          formPrepareData: "",
          formProps: [
            {
              item: [
                {
                  propName: "connect-redux",
                  propType: "boolean"
                }
              ]
            },
            {
              item: [
                {
                  propName: "mapStateToProps",
                  propType: "boolean"
                }
              ]
            },
            {
              item: [
                {
                  propName: "mapDispatchToProps",
                  propType: "boolean"
                }
              ]
            }
          ]
        }
      ],
      fileBlocks: [
        {
          blockName: "imports block",
          blockDescription: "imports block",
          blockSequence: 1,
          blockIsActive: true,
          blockImplementation: ""
        },
        {
          blockName: "mapStateToProps block",
          blockDescription: "mapStateToProps block",
          blockSequence: 2,
          blockIsActive: true,
          blockImplementation: ""
        },
        {
          blockName: "mapDispatchToProps block",
          blockDescription: "mapDispatchToProps block",
          blockSequence: 3,
          blockIsActive: true,
          blockImplementation: ""
        },
        {
          blockName: "exports block",
          blockDescription: "exports block",
          blockSequence: 4,
          blockIsActive: true,
          blockImplementation: ""
        }
      ]
    },
    {
      fileName: "component.js",
      fileDescription: "file for component",
      fileIsActive: true,
      fileSequence: 2,
      fileForms: [],
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
      fileName: "styles.css",
      fileDescription: "file for styles",
      fileIsActive: true,
      fileSequence: 3,
      fileForms: [ ],
      fileBlocks: [
        {
          blockName: "import block",
          blockDescription: "import block descr",
          blockSequence: 1,
          blockIsActive: true,
          blockImplementation: ""
        },
      ]
    }
  ]
};

//export default schema;
