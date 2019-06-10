const schema = {
  type: "array",
  items: {
    type: 'object',
    properties: {
      filename: { type: 'string', title: 'File Name' },
      isActive: { type: 'boolean' },
      fileforms: {
        type: 'array',
        title: 'Forms',
        items: {
          type: 'object',
          properties: {
            formname: { type: 'string', title: 'Form Name' },
          },
        }
      },
      fileblocks: {
        type: 'array',
        title: 'Blocks',
        items: {
          type: 'object',
          properties: {
            blockname: { type: 'string', title: 'Block Name' },
          },
        }
      },
      fileprops: {
        type: 'array',
        title: 'Props',
        items: {
          type: 'object',
          properties: {
           propname: { type: 'string', title: 'Prop Name' },
          },
        }
      },
    }
  },
};

export default schema;
