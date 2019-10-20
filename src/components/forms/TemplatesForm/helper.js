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
      blockName: block.blockName
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
];
