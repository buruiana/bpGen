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
        },
        {
          subtitle: 'Block Preview Implementation',
          blockPreviewImplementation: block.blockPreviewImplementation,
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
        subtitle: 'File Blocks Wrapper',
        expanded: true,
        children: [
          {
            title: '',
            subtitle: 'Block',
            expanded: true,
            children: [
              {
                subtitle: 'Block Implementation'
              },
              {
                subtitle: 'Block Preview Implementation'
              },
            ],
          },
        ],
      },
      {
        title: '',
        subtitle: 'File Forms Wrapper',
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

  const getTemplateFiles = () => {
    return treeData[0].children.map(el => {
      const getFileForms = f => {
        let forms = [];
        f.children.map(u => {
          let element = {};
          u.children.map(c => {
            if ('formName' in c) {
              console.log('console:zzzzzzzzzzzzzzz ', c);
              element = {
                formDescription: get(c, 'formDescription', ''),
                formIsActive: get(c, 'c.formIsActive', false),
                formName: get(c, 'c.formName', ''),
                title: get(c, 'c.formName', ''),
              };
            };

            c.children.map(k => {
              if ('formPrepareData' in k) {
                element = {
                  ...element,
                  formPrepareData: get(k, 'formPrepareData', ''),
                };
              };
              if ('formProps' in k) {
                element = {
                  ...element,
                  formProps: get(k, 'formProps', []),
                };
              };
              if ('formSchema' in k) {
                element = {
                  ...element,
                  formSchema: get(k, 'formSchema', ''),
                };
              };
              if ('formUISchema' in k) {
                element = {
                  ...element,
                  formUISchema: get(k, 'formUISchema', ''),
                };
              };
            });
            if (!isEmpty(element)) {
              forms.push(element);
            };
          });
        });
        console.log('console: formsforms', forms);
        if (!isEmpty(forms)) return forms;
      };

      const getFileBlocks = f => {
        let blocks = [];
        f.children.map(u => {
          let element = {};
          u.children.map(c => {
            if (c.blockName) {
              element = {
                blockDescription: get(c, 'blockDescription', ''),
                blockImplementation: get(c, 'blockImplementation', ''),
                blockIsActive: get(c, 'blockIsActive', false),
                blockName: get(c, 'blockName', ''),
                blockPreviewImplementation: get(c, 'blockPreviewImplementation', ''),
                blockSequence: get(c, 'blockSequence', 1),
                title: get(c, 'blockName', ''),
              };
            };

            c.children.map(k => {
              if ('blockImplementation' in k) {
                element = {
                  ...element,
                  blockImplementation: get(k, 'blockImplementation', ''),
                };
              };
              if ('blockPreviewImplementation' in k) {
                element = {
                  ...element,
                  blockPreviewImplementation: get(k, 'blockPreviewImplementation', ''),
                };
              };
            });
            if (!isEmpty(element)) {
              blocks.push(element);
            };
          });
        });
        if (!isEmpty(blocks)) return blocks;
      };
      return {
        fileDescription: get(el, 'fileDescription', ''),
        fileIsActive: get(el, 'fileIsActive', false),
        fileName: get(el, 'fileName', ''),
        fileSequence: get(el, 'fileSequence', ''),
        fileForms: getFileForms(el) || [],
        fileBlocks: getFileBlocks(el) || []
      };
    });

  };

  let treeObj = {
    id: get(treeData[0], 'id', ''),
    name: get(treeData, '[0].name', ''),
    templateDescription: get(treeData, '[0].templateDescription', ''),
    templateFiles: getTemplateFiles(),
    templateIsActive: get(treeData, '[0].templateIsActive', false),
    templateIsComponent: get(treeData, '[0].templateIsComponent', false),
    templateName: get(treeData, '[0].name', ''),
    templateTechnos: get(treeData, '[0].templateTechnos', ''),
    userid: get(treeData, '[0].userid', ''),
  };

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