import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

export const getForms = forms => {
  return forms.map(form => {
    return {
      title: get(form, 'formName', ''),
      subtitle: 'Form',
      expanded: true,
      formName: get(form, 'formName', ''),
      formDescription: get(form, 'formDescription', false),
      formIsActive: get(form, 'formIsActive', false),
      children: [
        {
          formSchema: get(form, 'formSchema', false),
          subtitle: `Schema`,
          formName: get(form, 'formName', ''),
          title: get(form, 'formName', '').substring(0, 20),
        },
        {
          formUISchema: get(form, 'formUISchema', ''),
          subtitle: `UI Schema`,
          title: get(form, 'formUISchema', '').substring(0, 20),
        },
        {
          formPrepareData: get(form, 'formPrepareData', ''),
          subtitle: `Prepare Data`,
          title: get(form, 'formPrepareData', '').substring(0, 20),
        },
        {
          formProps: get(form, 'formProps', ''),
          subtitle: `Props`,
        },
      ],
    };
  })
};

export const getBlocks = blocks => {
  return blocks.map(block => {
    return {
      title: get(block, 'blockName', ''),
      subtitle: 'Block',
      expanded: true,
      blockImplementation: get(block, 'blockImplementation', ''),
      blockDescription: get(block, 'blockDescription', ''),
      blockIsActive: get(block, 'blockIsActive', false),
      blockSequence: get(block, 'blockSequence', 0),
      blockName: get(block, 'blockName', ''),
      children: [
        {
          subtitle: 'Block Implementation',
          blockImplementation: get(block, 'blockImplementation', ''),
          title: get(block, 'blockImplementation', '').substring(0, 20),
        },
        {
          subtitle: 'Block Preview Implementation',
          blockPreviewImplementation: get(block, 'blockPreviewImplementation', ''),
          title: get(block, 'blockPreviewImplementation', '').substring(0, 20),
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
              element = {
                formDescription: get(c, 'formDescription', ''),
                formIsActive: get(c, 'formIsActive', false),
                formName: get(c, 'formName', ''),
                title: get(c, 'formName', ''),
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
    _id: get(treeData[0], '_id', null),
    title: get(treeData, '[0].title', ''),
    subtitle: get(treeData, '[0].subtitle', 'Template'),
    templateDescription: get(treeData, '[0].templateDescription', ''),
    templateFiles: getTemplateFiles(),
    templateIsActive: get(treeData, '[0].templateIsActive', false),
    templateIsPublic: get(treeData, '[0].templateIsPublic', false),
    templateIsComponent: get(treeData, '[0].templateIsComponent', false),
    templateTechno: get(treeData, '[0].templateTechno', ''),
    userid: get(treeData, '[0].userid', undefined),
  };

  return treeObj;
};

export const convertJsonSchema2SortableTree = currentTemplate => {
  let tree = [];
  let treeObj = {
    title: get(currentTemplate, 'title', ''),
    subtitle: 'Template',
    expanded: true,
    _id: get(currentTemplate, '_id', null),
    templateDescription: get(currentTemplate, 'templateDescription', ''),
    templateIsActive: get(currentTemplate, 'templateIsActive', false),
    templateIsPublic: get(currentTemplate, 'templateIsPublic', false),
    templateIsComponent: get(currentTemplate, 'templateIsComponent', false),
    templateTechno: get(currentTemplate, 'templateTechno', ''),
    userid: get(currentTemplate, 'userid', undefined),
    children: []
  };

  if (currentTemplate && !isEmpty(currentTemplate.templateFiles)) {
    currentTemplate.templateFiles.map(file => {
      treeObj.children.push({
        title: get(file, 'fileName', ''),
        subtitle: 'File',
        fileDescription: get(file, 'fileDescription', ''),
        fileIsActive: get(file, 'fileIsActive', false),
        fileName: get(file, 'fileName', ''),
        fileSequence: get(file, 'fileSequence', 1),
        expanded: true,
        children: [
          {
            title: 'File Forms',
            subtitle: 'File Forms Wrapper',
            children: getForms(file.fileForms),
            expanded: false
          },
          {
            title: 'File Blocks',
            subtitle: 'File Blocks Wrapper',
            children: getBlocks(file.fileBlocks),
            expanded: false
          }
        ]
      });
    });
  }
  tree.push(treeObj);
  return tree;
};

export const getDefaultTree = () => {
  return [{
    title: '',
    subtitle: 'Template',
    expanded: true,
    children: [],
  }]
};