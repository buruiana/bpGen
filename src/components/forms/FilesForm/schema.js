const schema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      filename: { type: "string", title: "File Name" },
      isActive: { type: "boolean" },
      fileforms: {
        type: "array",
        title: "Forms",
        items: {
          type: "object",
          properties: {
            formname: { type: "string", title: "Form Name" },
            formschema: { type: "string", title: "Form Schema" },
            formnuischema: { type: "string", title: "Form UISchema" }
          }
        }
      },
      fileblocks: {
        type: "array",
        title: "Blocks",
        items: {
          type: "object",
          properties: {
            blockname: { type: "string", title: "Block Name" },
            blockseq: { type: "number", title: "Block Sequence" }
          }
        }
      },
      fileprops: {
        type: "array",
        title: "Props",
        items: {
          type: "object",
          properties: {
            propname: { type: "string", title: "Prop Name" },
            defaultpropval: { type: "string", title: "Default Prop Val" }
          }
        }
      }
    }
  }
};

export default schema;
