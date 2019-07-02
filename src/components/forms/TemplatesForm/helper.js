export const getForms = forms => {
  return forms.map(form => {
    return {
      title: form.formName,
      subtitle: 'Form',
      expanded: true,
      children: [
        {
          formSchema: form.formSchema,
          subtitle: `${form.formName}_Schema`,
          formName: form.formName,
        },
        {
          formUISchema: form.formUISchema,
          subtitle: `${form.formName}_UISchema`,
        },
      ],
    };
  })
};

export const getBlocks = blocks => {
  console.log('console: blocks', blocks);
  return blocks.map(block => {
    return {
      title: block.blockName,
      subtitle: 'Block',
      expanded: true,
      children: [{
        blockImplementation: block.blockImplementation,
        subtitle: 'Block Implementation',
      }],
    };
  })
};

export const getDafaultTreeData = [
  {
    title: '',
    subtitle: 'File',
    children: [
      {
        subtitle: 'Blocks Wrapper',
        children: [
          {
            subtitle: 'Block Implementation'
          }
        ],
      },
    ],
  },
  {
    title: '',
    subtitle: 'Forms Wrapper',
    children: [
      {
        subtitle: 'Form',
        children: [
          {
            subtitle: 'Schema'
          },
          {
            subtitle: 'UISchema'
          },
        ],
      }
    ],
  },
  {
    title: '',
    subtitle: 'Form',
    children: [
      {
        subtitle: 'Schema'
      },
      {
        subtitle: 'UISchema'
      },
    ],
  },
  {
    title: '',
    subtitle: 'Blocks Wrapper',
    children: [
      {
        subtitle: 'Block Implementation'
      }
    ],
  },
  {
    title: '',
    subtitle: 'Block',
  },
];
