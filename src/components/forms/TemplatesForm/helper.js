import get from "lodash/get";
import isEmpty from "lodash/isEmpty";

export const getForms = forms => {
  return forms.map(form => {
    return {
      title: form.formName,
      subtitle: 'Form',
      expanded: true,
      formName: form.formName,
      formDescription: form.formDescription,
      formIsActive: form.formIsActive,
      formSchema: form.formSchema,
      formUISchema: form.formUISchema,
      formPrepareData: form.formPrepareData,
      children: [
        {
          formSchema: form.formSchema,
          subtitle: `Schema`,
          formName: form.formName,
        },
        {
          formUISchema: form.formUISchema,
          subtitle: `UI Schema`,
        },
        {
          formPrepareData: form.formPrepareData,
          subtitle: `Prepare Data`,
        },
        {
          formProps: form.formProps,
          subtitle: `Props`,
        },
      ],
    };
  })
};

export const getBlocks = blocks => {
  return blocks.map(block => {
    return {
      title: block.blockName,
      subtitle: 'Block',
      expanded: true,
      blockImplementation: block.blockImplementation,
      blockDescription: block.blockDescription,
      blockIsActive: block.blockIsActive,
      blockSequence: block.blockSequence,
      blockName: block.blockName,
      children: [
        {
          subtitle: 'Block Implementation',
          blockImplementation: block.blockImplementation,
        }
      ]
    };
  })
};

export const getDafaultTreeData = [
  {
    title: '',
    subtitle: 'File',
    expanded: true,
    children: [
      {
        title: '',
        subtitle: 'Blocks Wrapper',
        expanded: true,
        children: [
          {
            title: '',
            subtitle: 'Block',
            expanded: true,
            children: [
              {
                subtitle: 'Block Implementatio'
              },

            ],
          },
        ],
      },
      {
        title: '',
        subtitle: 'Forms Wrapper',
        expanded: true,
        children: [
          {
            subtitle: 'Form',
            expanded: true,
            children: [
              {
                subtitle: 'Schema'
              },
              {
                subtitle: 'UI Schema'
              },
              {
                subtitle: 'Prepare Data'
              },
              {
                subtitle: 'Props'
              },
            ],
          }
        ],
      },
    ],
  },
];

export const convertSortableTree2JsonSchema = treeData => {
  console.log('console: convertSortableTree2JsonSchema-intro', treeData);
  let treeObj = {
    id: get(treeData[0], 'id', ''),
    name: treeData[0].name,
    templateDescription: treeData[0].templateDescription,
    templateFiles: treeData[0].children,
    templateIsActive: treeData[0].templateIsActive,
    templateIsComponent: treeData[0].templateIsComponent,
    templateName: treeData[0].templateName,
    templateTechnos: treeData[0].templateTechnos,
    userid: treeData[0].userid
  };
  console.log("console: convertSortableTree2JsonSchema", treeObj);
  return treeObj;
};

export const convertJsonSchema2SortableTree = currentTemplate => {
  let tree = [];
  let treeObj = {
    title: get(currentTemplate, "name", ""),
    subtitle: "Template",
    expanded: true,
    id: get(currentTemplate, 'id', ''),
    name: currentTemplate.name,
    templateDescription: currentTemplate.templateDescription,
    templateIsActive: currentTemplate.templateIsActive,
    templateIsComponent: currentTemplate.templateIsComponent,
    templateName: currentTemplate.templateName,
    templateTechnos: currentTemplate.templateTechnos,
    userid: currentTemplate.userid,
    children: []
  };

  if (currentTemplate && !isEmpty(currentTemplate.templateFiles)) {
    currentTemplate.templateFiles.map(file => {
      treeObj.children.push({
        title: file.fileName,
        subtitle: "File",
        fileDescription: file.fileDescription,
        fileIsActive: file.fileIsActive,
        fileName: file.fileName,
        fileSequence: file.fileSequence,
        expanded: true,
        children: [
          {
            title: "File Forms",
            subtitle: "File Forms Wrapper",
            children: getForms(file.fileForms),
            expanded: true
          },
          {
            title: "File Blocks",
            subtitle: "File Blocks Wrapper",
            children: getBlocks(file.fileBlocks),
            expanded: true
          }
        ]
      });
    });
  }
  tree.push(treeObj);
  return tree;
};