return [
    {
        name: 'react-componnet',
        templateDescription: 'react-component',
        templateFiles: [
            {
                fileBlocks: [
                    {
                        blockDescription: 'imports block',
                        blockImplementation: 'let code = `import ${helper.capitalize(forms.projectSettings.projectName)} from \'./${forms.projectSettings.projectName}\';\\n`;\n\n  if (forms.HOC.connectRedux || false) {\n    let mapStateToProps = \'null\';\n    let mapDispatchToProps = \'null\';\n\n    code+= `import { connect } from "react-redux";\\n\\n`\n\n    if (forms.HOC.mapStateToProps  || false) {\n      code+= `const mapStateToProps = () => {}\\n\\n`;\n      mapStateToProps = \'mapStateToProps\';\n    }\n\n    if (forms.HOC.mapDispatchToProps  || false) {\n      code+= `const mapDispatchToProps = () => {}\\n\\n`;\n      mapDispatchToProps = \'mapDispatchToProps\';\n    }\n\n    if ((forms.HOC.mapStateToProps  || false) && !forms.HOC.mapDispatchToProps) {\n      code += `export default connect(${mapStateToProps})(${helper.capitalize(forms.projectSettings.projectName)});`;\n    } else if (forms.HOC.mapDispatchToProps) {\n      code += `export default connect(${mapStateToProps}, ${mapDispatchToProps})(${helper.capitalize(forms.projectSettings.projectName)});`;\n    } else {\n      code += `export default connect(null, null)(${helper.capitalize(forms.projectSettings.projectName)});`;\n    }\n  } else {\n    code += `export default ${helper.capitalize(forms.HOC.projectName)};`;\n  }\n\n  return code;',
                        blockIsActive: true,
                        blockName: 'imports block',
                        blockSequence: 1
                    }
                ],
                fileDescription: 'hoc',
                fileForms: [
                    {
                        formDescription: 'form for hoc',
                        formIsActive: true,
                        formName: 'HOC',
                        formPrepareData: 'return \'\';',
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
                        formSchema: 'return {\n    type: \'object\',\n    properties: {\n      connectRedux: { type: \'boolean\', title: \'Connect To Redux\' },\n      mapStateToProps: { type: \'boolean\', title: \'mapStateToProps\' },\n      mapDispatchToProps: { type: \'boolean\', title: \'mapDispatchToProps\' },\n    },\n  };',
                        formUISchema: 'return {\n    "ui:options": { removable: false },\n  };'
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
                        blockImplementation: 'let code = \'\';\n  const constList = helper.getConstList(forms.tree);\n  const importsList = helper.getImportList(forms.tree);\n\n  const flatData = helper.getFlatDataFromTree1({\n    treeData: forms.tree,\n    getNodeKey: ({ treeIndex }) => treeIndex,\n    ignoreCollapsed: false,\n  });\n\n  // IMPORTS\n  code += `import React from \'react\';\\n`;\n  importsList.sortedDefaultImports.map(el => {\n    code += `import ${el.node.title} from \'${el.node.componentImport}\';\\n`;\n  });\n\n  Object.keys(importsList.groupSortedNonDefaultImports).forEach(key => {\n    code += `import {\\n`;\n    importsList.groupSortedNonDefaultImports[key].map(el => {\n      code += `${el.node.title},\\n`;\n    });\n    code += `} from \'${importsList.groupSortedNonDefaultImports[key][0].node.providerPath}\';\\n`;\n  });\n\n  // START COMPONENT\n  code += `\\nconst ${helper.capitalize(forms.projectSettings.projectName)} = props => {\\n`;\n\n  // CONSTANTS\n  if (!helper.isEmpty(constList)) {\n    constList.map(el => {\n      code += ` const ${el} = () => {\\n`;\n      code += `   return null;\\n`;\n      code += ` };\\n\\n`;\n    });\n  }\n\n  // RETURN\n  code += ` return (\\n`;\n  code += helper.getTree(flatData) || \'<div />\';\n  code += ` );\\n`;\n  code += `};\\n\\n`;\n  code += `export default ${helper.capitalize(forms.projectSettings.projectName)};`;\n\n  return code;',
                        blockIsActive: true,
                        blockName: 'import block',
                        blockSequence: 1
                    }
                ],
                fileDescription: 'file for component',
                fileForms: [],
                fileIsActive: true,
                fileName: 'component.js',
                fileSequence: 2
            },
            {
                fileBlocks: [],
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
    },
    {
        name: 'react-dumb-component',
        templateDescription: 'react-dumb-component',
        templateFiles: [
            {
                fileBlocks: [
                    {
                        blockDescription: 'hoc imports block',
                        blockImplementation: 'let code = `import ${helper.capitalize(forms.projectSettings.projectName)} from \'./${forms.projectSettings.projectName}\';\\n`;\n\nif (forms.HOC.connectRedux || false) {\n  code+= `import { connect } from "react-redux";\\n\\n`\n}\n\nreturn code;',
                        blockIsActive: true,
                        blockName: 'hoc imports block',
                        blockSequence: 1
                    },
                    {
                        blockDescription: 'hoc main block',
                        blockImplementation: 'let code = \'\';\nif (forms.HOC.connectRedux || false) {\n  let mapStateToProps = \'null\';\n  let mapDispatchToProps = \'null\';\n  if (forms.HOC.mapStateToProps  || false) {\n    code+= `const mapStateToProps = () => {}\\n\\n`;\n    mapStateToProps = \'mapStateToProps\';\n  }\n\n  if (forms.HOC.mapDispatchToProps  || false) {\n    code+= `const mapDispatchToProps = () => {}\\n\\n`;\n    mapDispatchToProps = \'mapDispatchToProps\';\n  }\n}\nreturn code;',
                        blockIsActive: true,
                        blockName: 'hoc main block',
                        blockPreviewImplementation: 'return \'\';',
                        blockSequence: 2
                    },
                    {
                        blockDescription: 'hoc exports block',
                        blockImplementation: 'let code = \'\';\n let mapStateToProps = \'null\';\n  let mapDispatchToProps = \'null\';\n  if (forms.HOC.mapStateToProps  || false) {\n    mapStateToProps = \'mapStateToProps\';\n  }\n\n  if (forms.HOC.mapDispatchToProps  || false) {\n    mapDispatchToProps = \'mapDispatchToProps\';\n  }\n\nif (forms.HOC.connectRedux || false) {\n  if ((forms.HOC.mapStateToProps  || false) && !forms.HOC.mapDispatchToProps) {\n    code += `export default connect(${mapStateToProps})(${helper.capitalize(forms.projectSettings.projectName)});`;\n  } else if (forms.HOC.mapDispatchToProps) {\n    code += `export default connect(${mapStateToProps}, ${mapDispatchToProps})(${helper.capitalize(forms.projectSettings.projectName)});`;\n  } else {\n    code += `export default connect(null, null)(${helper.capitalize(forms.projectSettings.projectName)});`;\n  }\n} else {\n  code += `export default ${helper.capitalize(forms.HOC.projectName)};`;\n}\n\nreturn code;',
                        blockIsActive: true,
                        blockName: 'hoc exports block',
                        blockPreviewImplementation: 'return \'\';',
                        blockSequence: 3
                    }
                ],
                fileDescription: 'hoc',
                fileForms: [
                    {
                        formDescription: 'form for hoc',
                        formIsActive: true,
                        formName: 'HOC',
                        formPrepareData: 'return {};',
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
                        formSchema: 'return {\n  type: \'object\',\n  properties: {\n    connectRedux: { type: \'boolean\', title: \'Connect To Redux\' },\n    mapStateToProps: { type: \'boolean\', title: \'mapStateToProps\' },\n    mapDispatchToProps: { type: \'boolean\', title: \'mapDispatchToProps\' },\n  },\n};',
                        formUISchema: 'return {\n  "ui:options": { removable: false },\n};'
                    }
                ],
                fileIsActive: true,
                fileName: 'index.js',
                fileSequence: 1
            },
            {
                fileBlocks: [
                    {
                        blockDescription: 'component imports block',
                        blockImplementation: 'let code = \'\';\nconst importsList = helper.getImportList(forms.tree);\ncode += `import React from \'react\';\\n`;\nimportsList.sortedDefaultImports.map(el => {\n  code += `import ${el.node.title} from \'${el.node.componentImport}\';\\n`;\n});\n\nObject.keys(importsList.groupSortedNonDefaultImports).forEach(key => {\n  code += `import {\\n`;\n  importsList.groupSortedNonDefaultImports[key].map(el => {\n    code += `${el.node.title},\\n`;\n  });\n  code += `} from \'${importsList.groupSortedNonDefaultImports[key][0].node.providerPath}\';\\n`;\n});\nreturn code;',
                        blockIsActive: true,
                        blockName: 'component imports block',
                        blockPreviewImplementation: 'return \'\';',
                        blockSequence: 1
                    },
                    {
                        blockDescription: 'component start block',
                        blockImplementation: 'let code = \'\';\ncode += `\\nconst ${helper.capitalize(forms.projectSettings.projectName)} = props => {\\n`;\nreturn code;',
                        blockIsActive: true,
                        blockName: 'component start block',
                        blockPreviewImplementation: 'let code = \'\';\ncode += `() => {\\n`;\nreturn code;',
                        blockSequence: 2
                    },
                    {
                        blockDescription: 'component constants block',
                        blockImplementation: 'let code = \'\';\nconst constList = helper.getConstList(forms.tree);\nif (!helper.isEmpty(constList)) {\n  constList.map(el => {\n    code += ` const ${el} = () => {\\n`;\n    code += `   return null;\\n`;\n    code += ` };\\n\\n`;\n  });\n}\nreturn code;',
                        blockIsActive: true,
                        blockName: 'component constants block',
                        blockPreviewImplementation: 'let code = \'\';\nconst constList = helper.getConstList(forms.tree);\nif (!helper.isEmpty(constList)) {\n  constList.map(el => {\n    code += ` const ${el} = () => {\\n`;\n    code += `   return null;\\n`;\n    code += ` };\\n\\n`;\n  });\n}\nreturn code;',
                        blockSequence: 3
                    },
                    {
                        blockDescription: 'component return block',
                        blockImplementation: 'let code = \'\';\nconst flatData = helper.getFlatDataFromTree1({\n  treeData: forms.tree,\n  getNodeKey: ({ treeIndex }) => treeIndex,\n  ignoreCollapsed: false,\n});\ncode += ` return (\\n`;\ncode += helper.getTree(flatData) || \'<div />\';\ncode += ` );\\n`;\ncode += `};\\n\\n`;\nreturn code;',
                        blockIsActive: true,
                        blockName: 'component return block',
                        blockPreviewImplementation: 'let code = \'\';\nconst flatData = helper.getFlatDataFromTree1({\n  treeData: forms.tree,\n  getNodeKey: ({ treeIndex }) => treeIndex,\n  ignoreCollapsed: false,\n});\ncode += ` return (\\n`;\ncode += helper.getTree(flatData) || \'<div />\';\ncode += ` );\\n`;\ncode += `};\\n\\n`;\nreturn code;',
                        blockSequence: 4
                    },
                    {
                        blockDescription: 'component export block',
                        blockImplementation: 'let code = \'\';\ncode += `export default ${helper.capitalize(forms.projectSettings.projectName)};`;\nreturn code;',
                        blockIsActive: true,
                        blockName: 'component export block',
                        blockPreviewImplementation: 'return \'\';',
                        blockSequence: 5
                    }
                ],
                fileDescription: 'file for component',
                fileForms: [],
                fileIsActive: true,
                fileName: 'component.js',
                fileSequence: 2
            },
            {
                fileBlocks: [],
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
    },
    {
        name: 'react-dumb-component-duplicate',
        templateDescription: 'react-dumb-component',
        templateFiles: [
            {
                fileBlocks: [
                    {
                        blockDescription: 'hoc imports block',
                        blockImplementation: 'let code = `import ${helper.capitalize(forms.projectSettings.projectName)} from \'./${forms.projectSettings.projectName}\';\\n`;\n\nif (forms.HOC.connectRedux || false) {\n  code+= `import { connect } from "react-redux";\\n\\n`\n}\n\nreturn code;',
                        blockIsActive: true,
                        blockName: 'hoc imports block',
                        blockPreviewImplementation: '',
                        blockSequence: 1
                    },
                    {
                        blockDescription: 'hoc main block',
                        blockImplementation: 'let code = \'\';\nif (forms.HOC.connectRedux || false) {\n  let mapStateToProps = \'null\';\n  let mapDispatchToProps = \'null\';\n  if (forms.HOC.mapStateToProps  || false) {\n    code+= `const mapStateToProps = () => {}\\n\\n`;\n    mapStateToProps = \'mapStateToProps\';\n  }\n\n  if (forms.HOC.mapDispatchToProps  || false) {\n    code+= `const mapDispatchToProps = () => {}\\n\\n`;\n    mapDispatchToProps = \'mapDispatchToProps\';\n  }\n}\nreturn code;',
                        blockIsActive: true,
                        blockName: 'hoc main block',
                        blockPreviewImplementation: 'return \'\';',
                        blockSequence: 2
                    },
                    {
                        blockDescription: 'hoc exports block',
                        blockImplementation: 'let code = \'\';\n let mapStateToProps = \'null\';\n  let mapDispatchToProps = \'null\';\n  if (forms.HOC.mapStateToProps  || false) {\n    mapStateToProps = \'mapStateToProps\';\n  }\n\n  if (forms.HOC.mapDispatchToProps  || false) {\n    mapDispatchToProps = \'mapDispatchToProps\';\n  }\n\nif (forms.HOC.connectRedux || false) {\n  if ((forms.HOC.mapStateToProps  || false) && !forms.HOC.mapDispatchToProps) {\n    code += `export default connect(${mapStateToProps})(${helper.capitalize(forms.projectSettings.projectName)});`;\n  } else if (forms.HOC.mapDispatchToProps) {\n    code += `export default connect(${mapStateToProps}, ${mapDispatchToProps})(${helper.capitalize(forms.projectSettings.projectName)});`;\n  } else {\n    code += `export default connect(null, null)(${helper.capitalize(forms.projectSettings.projectName)});`;\n  }\n} else {\n  code += `export default ${helper.capitalize(forms.HOC.projectName)};`;\n}\n\nreturn code;',
                        blockIsActive: true,
                        blockName: 'hoc exports block',
                        blockPreviewImplementation: 'return \'\';',
                        blockSequence: 3
                    }
                ],
                fileDescription: 'hoc',
                fileForms: [
                    {
                        formDescription: 'form for hoc',
                        formIsActive: true,
                        formName: 'HOC',
                        formPrepareData: 'return {};',
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
                        formSchema: 'return {\n  type: \'object\',\n  properties: {\n    connectRedux: { type: \'boolean\', title: \'Connect To Redux\' },\n    mapStateToProps: { type: \'boolean\', title: \'mapStateToProps\' },\n    mapDispatchToProps: { type: \'boolean\', title: \'mapDispatchToProps\' },\n  },\n};',
                        formUISchema: 'return {\n  "ui:options": { removable: false },\n};'
                    }
                ],
                fileIsActive: true,
                fileName: 'index.js',
                fileSequence: 1
            },
            {
                fileBlocks: [
                    {
                        blockDescription: 'component imports block',
                        blockImplementation: 'let code = \'\';\nconst importsList = helper.getImportList(forms.tree);\ncode += `import React from \'react\';\\n`;\nimportsList.sortedDefaultImports.map(el => {\n  code += `import ${el.node.title} from \'${el.node.componentImport}\';\\n`;\n});\n\nObject.keys(importsList.groupSortedNonDefaultImports).forEach(key => {\n  code += `import {\\n`;\n  importsList.groupSortedNonDefaultImports[key].map(el => {\n    code += `${el.node.title},\\n`;\n  });\n  code += `} from \'${importsList.groupSortedNonDefaultImports[key][0].node.providerPath}\';\\n`;\n});\nreturn code;',
                        blockIsActive: true,
                        blockName: 'component imports block',
                        blockPreviewImplementation: 'return \'\';',
                        blockSequence: 1
                    },
                    {
                        blockDescription: 'component start block',
                        blockImplementation: 'let code = \'\';\ncode += `\\nconst ${helper.capitalize(forms.projectSettings.projectName)} = props => {\\n`;\nreturn code;',
                        blockIsActive: true,
                        blockName: 'component start block',
                        blockPreviewImplementation: 'let code = \'\';\ncode += `() => {\\n`;\nreturn code;',
                        blockSequence: 2
                    },
                    {
                        blockDescription: 'component constants block',
                        blockImplementation: 'let code = \'\';\nconst constList = helper.getConstList(forms.tree);\nif (!helper.isEmpty(constList)) {\n  constList.map(el => {\n    code += ` const ${el} = () => {\\n`;\n    code += `   return null;\\n`;\n    code += ` };\\n\\n`;\n  });\n}\nreturn code;',
                        blockIsActive: true,
                        blockName: 'component constants block',
                        blockPreviewImplementation: 'let code = \'\';\nconst constList = helper.getConstList(forms.tree);\nif (!helper.isEmpty(constList)) {\n  constList.map(el => {\n    code += ` const ${el} = () => {\\n`;\n    code += `   return null;\\n`;\n    code += ` };\\n\\n`;\n  });\n}\nreturn code;',
                        blockSequence: 3
                    },
                    {
                        blockDescription: 'component return block',
                        blockImplementation: 'let code = \'\';\nconst flatData = helper.getFlatDataFromTree1({\n  treeData: forms.tree,\n  getNodeKey: ({ treeIndex }) => treeIndex,\n  ignoreCollapsed: false,\n});\ncode += ` return (\\n`;\ncode += helper.getTree(flatData) || \'<div />\';\ncode += ` );\\n`;\ncode += `};\\n\\n`;\nreturn code;',
                        blockIsActive: true,
                        blockName: 'component return block',
                        blockPreviewImplementation: 'let code = \'\';\nconst flatData = helper.getFlatDataFromTree1({\n  treeData: forms.tree,\n  getNodeKey: ({ treeIndex }) => treeIndex,\n  ignoreCollapsed: false,\n});\ncode += ` return (\\n`;\ncode += helper.getTree(flatData) || \'<div />\';\ncode += ` );\\n`;\ncode += `};\\n\\n`;\nreturn code;',
                        blockSequence: 4
                    },
                    {
                        blockDescription: 'component export block',
                        blockImplementation: 'let code = \'\';\ncode += `export default ${helper.capitalize(forms.projectSettings.projectName)};`;\nreturn code;',
                        blockIsActive: true,
                        blockName: 'component export block',
                        blockPreviewImplementation: 'return \'\';',
                        blockSequence: 5
                    }
                ],
                fileDescription: 'file for component',
                fileForms: [],
                fileIsActive: true,
                fileName: 'component.js',
                fileSequence: 2
            },
            {
                fileBlocks: [],
                fileDescription: 'file for styles',
                fileForms: [],
                fileIsActive: true,
                fileName: 'styles.css',
                fileSequence: 3
            }
        ],
        templateIsActive: true,
        templateIsComponent: false,
        templateName: 'react-component',
        templateTechnos: 'react',
    },
    {
        name: 'uma_sevice',
        templateDescription: 'uma_sevice',
        templateFiles: [
            {
                fileBlocks: [
                    {
                        blockDescription: 'main',
                        blockImplementation: 'return \'\';',
                        blockIsActive: true,
                        blockName: 'main',
                        blockPreviewImplementation: 'return \'\';',
                        blockSequence: 1,
                        title: 'main'
                    }
                ],
                fileDescription: 'actions',
                fileForms: [
                    {
                        formDescription: '',
                        formIsActive: true,
                        formName: 'actionsForm',
                        formPrepareData: 'return \'\';',
                        formProps: [
                            {
                                item: [
                                    {
                                        propName: 'test',
                                        propType: 'boolean'
                                    }
                                ]
                            }
                        ],
                        formSchema: 'return {\n  "type": "object",\n  "required": ["actionName", "actionType"],\n  "properties": {\n    "actionName": {"type": "string"},\n    "actionType": {"type": "string"},\n    "actionIsAsync": {"type": "boolean"},\n    "actionPropsAsync": {\n      "type": "array",\n      "uniqueItems": true,\n      "items": {\n        "type": "object",\n        "properties": {\n          "propNameAsync": {"type": "string"},\n          "propArgsAsync": {\n            "type": "array",\n            "uniqueItems": true,\n            "items": {\n              "type": "object",\n              "properties": {\n                "argNameAsync": {"type": "string"},\n                "argTypeAsync": {"type": "string"}\n              }\n            }\n          },\n          "propReturnsAsync": {\n            "type": "array",\n            "uniqueItems": true,\n            "items": {\n              "type": "object",\n              "properties": {\n                "returnNameAsync": {"type": "string"}\n              }\n            }\n          }\n        }\n      }\n    },\n    "actionProps": {\n      "type": "array",\n      "uniqueItems": true,\n      "items": {\n        "type": "object",\n        "properties": {\n          "propArgs": {\n            "type": "array",\n            "items": {\n              "type": "object",\n              "properties": {\n                "argName": {"type": "string"},\n                "argType": {"type": "string"}\n              }\n            }\n          },\n          "propReturns": {\n            "type": "array",\n            "items": {\n              "type": "object",\n              "properties": {\n                "returnName": {"type": "string"}\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n};',
                        formUISchema: 'return {\n  "actionName": {},\n  "actionType": {},\n  "actionIsAsync": {},\n  "actionPropsAsync": {\n    "items": {\n      "propNameAsync": {},\n      "propArgsAsync": {\n        "items": {"argNameAsync": {}, "argTypeAsync": {}}\n      },\n      "propReturnsAsync": {"items": {"returnNameAsync": {}}}\n    }\n  },\n  "actionProps": {\n    "items": {\n      "propArgs": {"items": {"argName": {}, "argType": {}}},\n      "propReturns": {"items": {"returnName": {}}}\n    }\n  }\n};',
                        title: 'actionsForm'
                    }
                ],
                fileIsActive: true,
                fileName: 'actions.ts',
                fileSequence: 1
            },
            {
                fileBlocks: [],
                fileDescription: '',
                fileForms: [
                    {
                        formDescription: 'reducerForm descr',
                        formIsActive: false,
                        formName: '',
                        formPrepareData: '',
                        formProps: [],
                        formSchema: '',
                        formUISchema: '',
                        title: ''
                    }
                ],
                fileIsActive: true,
                fileName: 'reducer.js',
                fileSequence: 2
            }
        ],
        templateIsActive: false,
        templateIsComponent: true,
        templateIsPublic: true,
        templateName: 'uma_sevice',
        templateTechnos: 'react',
        title: 'uma_sevice',
    },
    {
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
                        blockPreviewImplementation: '',
                        blockSequence: 1,
                        title: 'definition block'
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
                        formUISchema: 'return {\n  items: { \'ui:emptyValue\': \'\' },\n  name: { \'ui:disabled\': true }\n};',
                        title: 'actionTypesForm'
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
                        blockPreviewImplementation: '',
                        blockSequence: 1,
                        title: 'import block'
                    },
                    {
                        blockDescription: 'definition block descr',
                        blockImplementation: '',
                        blockIsActive: true,
                        blockName: 'definition block',
                        blockPreviewImplementation: '',
                        blockSequence: 2,
                        title: 'definition block'
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
                        formUISchema: 'return {\n  items: { \'ui:emptyValue\': \'\' },\n  "ui:options": { removable: false, addable: false },\n};',
                        title: 'actionsForm'
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
                        blockImplementation: 'const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;\n\nif(isEmpty(forms.reducerForm)) return \'\';\nconst reducer = forms.reducerForm;\n\n  let code = ``;\n\n    code = `import * as actionTypes from \'./actionTypes\';\\n\\n`;\n    code+= `export const initialState = () => ({\\n`;\n    const reducerInitVals = [];\n    reducer.map(el => {\n      if (!isEmpty(el.payloadInfo)) {\n        el.payloadInfo.map(payloadInfo => {\n          const dup = reducerInitVals.find(el => el === payloadInfo.payload);\n          if (isEmpty(dup)) {\n            reducerInitVals.push(payloadInfo.payload);\n            code += `${payloadInfo.payload}: ${payloadInfo.initVal},\\n`;\n          }\n        });\n      }\n    });\n    code += `});\\n\\n`;\n\n    code += `export default (state = initialState(), action) => {\\n`;\n    code += ` switch (action.type) {\\n`;\n\n\n    reducer.map(el => {\n      if (el.isActive) {\n        code += `   case actionTypes.${el.name}:\\n`;\n        code += `     return {\\n`;\n        code += `       ...state,\\n`;\n        if (!isEmpty(el.payloadInfo)) {\n          el.payloadInfo.map(payloadInfoEl => {\n            code += `       ${payloadInfoEl.payload}: ${payloadInfoEl.payloadVal},\\n`;\n          });\n        }\n        code += `       };\\n`;\n      }\n    });\n\n    code += `  default:  return state;\\n }\\n`;\n    code += `}\\n`;\n\n  return code;',
                        blockIsActive: true,
                        blockName: 'import block',
                        blockPreviewImplementation: '',
                        blockSequence: 1,
                        title: 'import block'
                    },
                    {
                        blockDescription: 'initialState block descr',
                        blockImplementation: '',
                        blockIsActive: true,
                        blockName: 'initialState block',
                        blockPreviewImplementation: '',
                        blockSequence: 2,
                        title: 'initialState block'
                    },
                    {
                        blockDescription: 'definition block descr',
                        blockImplementation: '',
                        blockIsActive: true,
                        blockName: 'definition block',
                        blockPreviewImplementation: '',
                        blockSequence: 3,
                        title: 'definition block'
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
                        formUISchema: 'return {\n  items: { \'ui:emptyValue\': \'\', name: { \'ui:disabled\': true } },\n  "ui:options": { removable: false, addable: false }\n};',
                        title: 'reducerForm'
                    }
                ],
                fileIsActive: true,
                fileName: 'reducer.js',
                fileSequence: 3
            }
        ],
        templateIsActive: true,
        templateIsComponent: false,
        templateIsPublic: true,
        templateName: 'react-redux',
        templateTechnos: 'react, redux',
        title: 'react-redux',
    }
];