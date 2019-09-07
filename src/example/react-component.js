return {
  templateName: "react-component",
  templateDescription: "react-component",
  templateTechnos: "react",
  templateIsActive: true,
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
  ]
};

//export default schema;
