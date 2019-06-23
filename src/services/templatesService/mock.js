export const mock = {
  allTemplates: [
    {
      name: 'react-componnet',
      templateDescription: 'react-component',
      templateFiles: [
        {
          fileBlocks: [
            {
              blockDescription: 'imports block',
              blockImplementation: '',
              blockIsActive: true,
              blockName: 'imports block',
              blockSequence: 1
            },
            {
              blockDescription: 'mapStateToProps block',
              blockImplementation: '',
              blockIsActive: true,
              blockName: 'mapStateToProps block',
              blockSequence: 2
            },
            {
              blockDescription: 'mapDispatchToProps block',
              blockImplementation: '',
              blockIsActive: true,
              blockName: 'mapDispatchToProps block',
              blockSequence: 3
            },
            {
              blockDescription: 'exports block',
              blockImplementation: '',
              blockIsActive: true,
              blockName: 'exports block',
              blockSequence: 4
            }
          ],
          fileDescription: 'hoc',
          fileForms: [
            {
              formDescription: 'form for hoc',
              formIsActive: true,
              formName: 'HOC',
              formPrepareData: '',
              formProps: [
                {
                  item: [
                    {
                      propName: 'connect-redux',
                      propType: 'boolean'
                    }
                  ]
                },
                {
                  item: [
                    {
                      propName: 'mapStateToProps',
                      propType: 'boolean'
                    }
                  ]
                },
                {
                  item: [
                    {
                      propName: 'mapDispatchToProps',
                      propType: 'boolean'
                    }
                  ]
                }
              ],
              formSchema: '',
              formUISchema: ''
            }
          ],
          fileIsActive: true,
          fileName: 'index.js',
          fileSequence: 1
        },
        {
          fileBlocks: [
            {
              blockDescription: 'import block descr',
              blockImplementation: '',
              blockIsActive: true,
              blockName: 'import block',
              blockSequence: 1
            },
            {
              blockDescription: 'definition block descr',
              blockImplementation: '',
              blockIsActive: true,
              blockName: 'definition block',
              blockSequence: 2
            }
          ],
          fileDescription: 'file for component',
          fileForms: [],
          fileIsActive: true,
          fileName: 'component.js',
          fileSequence: 2
        },
        {
          fileBlocks: [
            {
              blockDescription: 'import block descr',
              blockImplementation: '',
              blockIsActive: true,
              blockName: 'import block',
              blockSequence: 1
            }
          ],
          fileDescription: 'file for styles',
          fileForms: [],
          fileIsActive: true,
          fileName: 'styles.css',
          fileSequence: 3
        }
      ],
      templateIsActive: true,
      templateName: 'react-component',
      templateTechnos: 'react',
      userid: 'aaa',
      id: 'Ce4eZvpVbG93tq66qRPu'
    },
    {
      id: 'gc45ycQcM1m0K7sjLcCA',
      name: 'react-redux',
      templateDescription: 'react-redux',
      templateFiles: [
        {
          fileBlocks: [
            {
              blockDescription: 'definition block descr',
              blockImplementation: 'let code = \'\';\n\nconst isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;\n\nif(isEmpty(forms.actionTypesForm)) return;\n\nforms.actionTypesForm.map(el => {\n    code = code + `export const ${el.name} = \'${el.name}\';`;\n    if (el.isSuccess) {\n      code = code + `export const ${el.name}_SUCCESS = \'${el.name}_SUCCESS\';\\n`;\n    }\n    if (el.isFail) {\n      code = code + `export const ${el.name}_FAIL = \'${el.name}_FAIL\';\\n`;\n    }\n  });\n\nreturn code;',
              blockIsActive: true,
              blockName: 'definition block',
              blockSequence: 1
            }
          ],
          fileDescription: 'file for action types',
          fileForms: [
            {
              formDescription: 'form to add new actionTypes',
              formIsActive: true,
              formName: 'actionTypesForm',
              formPrepareData: 'return forms.actionTypesForm;',
              formProps: [
                {
                  item: [
                    {
                      propName: 'name',
                      propType: 'string'
                    }
                  ]
                },
                {
                  item: [
                    {
                      propName: 'isSuccess',
                      propType: 'boolean'
                    }
                  ]
                },
                {
                  item: [
                    {
                      propName: 'isFailure',
                      propType: 'boolean'
                    }
                  ]
                }
              ],
              formSchema: 'return {\n  type: "array",\n  items: {\n    type: \'object\',\n    properties: {\n      name: { type: \'string\', title: \'Name\'},\n      isSuccess: { type: \'boolean\'},\n      isFail: { type: \'boolean\'},\n    }\n  },\n};\nreturn actions;',
              formUISchema: 'return {\n  items: { \'ui:emptyValue\': \'\' },\n  name: { \'ui:disabled\': true }\n};'
            }
          ],
          fileIsActive: true,
          fileName: 'actionTypes.js',
          fileSequence: 1
        },
        {
          fileBlocks: [
            {
              blockDescription: 'import block descr',
              blockImplementation: 'const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;\n\nif(isEmpty(forms.actionsForm)) return;\n\nconst actions = forms.actionsForm;\n\nconst hasActiveActions = !isEmpty(actions.find(el => el.isActive));\n\n  let code = \'\';\n  if (hasActiveActions) {\n    code = `import * as actionTypes from \'./ actionTypes\';\\n\\n`;\n\n    actions.map(el => {\n      if (el.isActive) {\n        code = code + `export const ${el.name} = `;\n        if (!isEmpty(el.payload) && el.payload.length === 1) {\n          code = code + ` ${el.payload[0].payload}`;\n        } else if (!isEmpty(el.payload) && el.payload.length > 1) {\n          code = code + `(\\n`;\n\n          el.payload.map(payloadEl => {\n            code = code + `${payloadEl.payload},\\n`;\n          });\n          code = code + `)`;\n        } else {\n          code = code + `()`;\n        }\n        code = code + ` => ({\\n`;\n        code = code + ` type: actionTypes.${el.actionType},\\n`;\n        el.payload.map(payloadEl => {\n          code = code + ` ${payloadEl.payload},\\n`;\n        });\n\n        code = code + `});\\n\\n`;\n      }\n    });\n  }\n\n  return code;\n\n',
              blockIsActive: true,
              blockName: 'import block',
              blockSequence: 1
            },
            {
              blockDescription: 'definition block descr',
              blockImplementation: '',
              blockIsActive: true,
              blockName: 'definition block',
              blockSequence: 2
            }
          ],
          fileDescription: 'file for actions',
          fileForms: [
            {
              formDescription: 'form to add new actions',
              formIsActive: true,
              formName: 'actionsForm',
              formPrepareData: 'let actions = [];\n\nforms.actionTypesForm.map(actionType => {\n    let object = {\n      isActive: false,\n      name: `${actionType.name}`,\n      actionType: actionType.name.toUpperCase(),\n      payload: [],\n    };\n    actions.push(object);\n\n    if (actionType.isSuccess) {\n      object = {\n        isActive: false,\n        name: `${actionType.name}Success`,\n        actionType: `${actionType.name.toUpperCase()}_SUCCESS`,\n        payload: [],\n      }\n      actions.push(object);\n    }\n\n    if (actionType.isFail) {\n      object = {\n        isActive: false,\n        name: `${actionType.name}Fail`,\n        actionType: `${actionType.name.toUpperCase()}_FAIL`,\n        payload: [],\n      }\n      actions.push(object);\n    }\n  });\nreturn actions;',
              formProps: [
                {
                  item: [
                    {
                      propName: 'name',
                      propType: 'string'
                    }
                  ]
                },
                {
                  item: [
                    {
                      propName: 'isActive',
                      propType: 'boolean'
                    }
                  ]
                },
                {
                  item: [
                    {
                      propName: 'payload',
                      propType: 'string'
                    }
                  ]
                }
              ],
              formSchema: 'return {\n  type: "array",\n  items: {\n    type: \'object\',\n    properties: {\n      name: { type: \'string\', title: \'Name\' },\n      isActive: { type: \'boolean\' },\n      payload: {\n        type: \'array\',\n        title: \'Payload\',\n        items: {\n          type: \'object\',\n          properties: {\n            payload: { type: \'string\', title: \'Payload\' },\n          },\n        }\n      },\n    }\n  },\n};',
              formUISchema: 'return {\n  items: { \'ui:emptyValue\': \'\' },\n  "ui:options": { removable: false, addable: false },\n};'
            }
          ],
          fileIsActive: true,
          fileName: 'actions.js',
          fileSequence: 2
        },
        {
          fileBlocks: [
            {
              blockDescription: 'import block descr',
              blockImplementation: 'const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;\n\nif(isEmpty(forms.reducerForm)) return \'no reducer\';\nconst reducer = forms.reducerForm;\n\n  let code = ``;\n\n    code = `import * as actionTypes from \'./actionTypes\';\\n\\n`;\n    code+= `export const initialState = () => ({\\n`;\n    const reducerInitVals = [];\n    reducer.map(el => {\n      if (!isEmpty(el.payloadInfo)) {\n        el.payloadInfo.map(payloadInfo => {\n          const dup = reducerInitVals.find(el => el === payloadInfo.payload);\n          if (isEmpty(dup)) {\n            reducerInitVals.push(payloadInfo.payload);\n            code += `${payloadInfo.payload}: ${payloadInfo.initVal},\\n`;\n          }\n        });\n      }\n    });\n    code += `});\\n\\n`;\n\n    code += `export default (state = initialState(), action) => {\\n`;\n    code += ` switch (action.type) {\\n`;\n\n\n    reducer.map(el => {\n      if (el.isActive) {\n        code += `   case actionTypes.${el.name}:\\n`;\n        code += `     return {\\n`;\n        code += `       ...state,\\n`;\n        if (!isEmpty(el.payloadInfo)) {\n          el.payloadInfo.map(payloadInfoEl => {\n            code += `       ${payloadInfoEl.payload}: ${payloadInfoEl.payloadVal},\\n`;\n          });\n        }\n        code += `       };\\n`;\n      }\n    });\n\n    code += `  default:  return state;\\n }\\n`;\n    code += `}\\n`;\n\n  return code;',
              blockIsActive: true,
              blockName: 'import block',
              blockSequence: 1
            },
            {
              blockDescription: 'initialState block descr',
              blockImplementation: '',
              blockIsActive: true,
              blockName: 'initialState block',
              blockSequence: 2
            },
            {
              blockDescription: 'definition block descr',
              blockImplementation: '',
              blockIsActive: true,
              blockName: 'definition block',
              blockSequence: 3
            }
          ],
          fileDescription: 'file for reducer',
          fileForms: [
            {
              formDescription: 'form reducer',
              formIsActive: true,
              formName: 'reducerForm',
              formPrepareData: 'let reducer = [];\n\n  forms.actionTypesForm.map(actionType => {\n    reducer.push({\n      isActive: false,\n      name: actionType.name.toUpperCase(),\n      payloadInfo: []\n    });\n\n    if (actionType.isSuccess) {\n      reducer.push({\n        isActive: false,\n        name: `${actionType.name.toUpperCase()}_SUCCESS`,\n        payloadInfo: []\n      });\n    }\n\n    if (actionType.isFail) {\n      reducer.push({\n        isActive: false,\n        name: `${actionType.name.toUpperCase()}_FAIL`,\n        payloadInfo: []\n      });\n    }\n  });\nreturn reducer;',
              formProps: [
                {
                  item: [
                    {
                      propName: 'name',
                      propType: 'string'
                    }
                  ]
                },
                {
                  item: [
                    {
                      propName: 'isActive',
                      propType: 'boolean'
                    }
                  ]
                },
                {
                  item: [
                    {
                      propName: 'payload',
                      propType: 'string'
                    },
                    {
                      propName: 'payloadVal',
                      propType: 'string'
                    },
                    {
                      propName: 'payloadInitVal',
                      propType: 'string'
                    }
                  ]
                }
              ],
              formSchema: 'return {\n  type: "array",\n  items: {\n    type: \'object\',\n    properties: {\n      name: { type: \'string\', title: \'Action Type\' },\n      isActive: { type: \'boolean\' },\n      payloadInfo: {\n        type: \'array\',\n        title: \'Payload\',\n        items: {\n          type: \'object\',\n          properties: {\n            payload: { type: \'string\', title: \'Payload\' },\n            payloadVal: { type: \'string\', title: \'Payload Value\' },\n            initVal: { type: \'string\', title: \'Init Value\' },\n          }\n        },\n      },\n    }\n  },\n};',
              formUISchema: 'return {\n  items: { \'ui:emptyValue\': \'\', name: { \'ui:disabled\': true } },\n  "ui:options": { removable: false, addable: false }\n};'
            }
          ],
          fileIsActive: true,
          fileName: 'reducer.js',
          fileSequence: 3
        }
      ],
      templateIsActive: true,
      templateName: 'react-redux',
      templateTechnos: 'react, redux',
      userid: 'aaa'
    }
  ],
}