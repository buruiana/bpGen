export const getForms = forms => {
  return forms.map(form => {
    return {
      title: form.formName,
      subtitle: 'Form',
      expanded: true,
      formDescription: form.formDescription,
      formIsActive: form.formIsActive,
      formSchema: form.formSchema,
      formUISchema: form.formUISchema,
      formPrepareData: form.formPrepareData,
      formProps: form.formProps,
      children: [
        // {
        //   formSchema: form.formSchema,
        //   subtitle: `Schema`,
        //   formName: form.formName,
        // },
        // {
        //   formUISchema: form.formUISchema,
        //   subtitle: `UISchema`,
        // },
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
