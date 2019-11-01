import get from 'lodash/get';

export const getNewtemplate = formData => {
  let newTemplate = {};
  if ('templateDescription' in formData) {
    newTemplate = {
      expanded: true,
      id: get(formData, 'id', undefined),
      name: get(formData, 'name', ''),
      subtitle: 'Template',
      templateDescription: get(formData, 'templateDescription', ''),
      templateIsActive: get(formData, 'templateIsActive', false),
      templateIsComponent: get(formData, 'templateIsComponent', false),
      templateTechnos: get(formData, 'templateTechnos', ''),
      title: get(formData, 'name', ''),
      userid: get(formData, 'id', ''),
    };
  };

  if ('fileName' in formData) {
    newTemplate = {
      fileName: get(formData, 'fileName', ''),
      expanded: true,
      fileDescription: get(formData, 'fileDescription', ''),
      fileIsActive: get(formData, 'fileIsActive', false),
      fileSequence: get(formData, 'fileSequence', 0),
      subtitle: 'File',
      title: get(formData, 'fileName', ''),
      children: get(formData, 'children', []),
    };
  };

  if ('blockName' in formData) {
    newTemplate = {
      blockDescription: get(formData, 'blockDescription', ''),
      blockIsActive: get(formData, 'blockIsActive', false),
      blockName: get(formData, 'blockName', ''),
      blockSequence: get(formData, 'blockSequence', 0),
      children: get(formData, 'children', []),
      expanded: true,
      subtitle: 'Block',
      title: get(formData, 'blockName', ''),
    };
  };

  if ('formName' in formData) {
    newTemplate = {
      children: get(formData, 'children', []),
      expanded: true,
      formDescription: get(formData, 'formDescription', ''),
      formIsActive: get(formData, 'formIsActive', false),
      formName: get(formData, 'formName', ''),
      subtitle: 'Form',
      title: get(formData, 'formName', ''),
    };
  };
  return newTemplate;
};

export const getNewNodeForValueChange = (currentModalData, modalData, val) => {
  let newNode = {};
  if (currentModalData.subtitle === 'Schema') {
    newNode = {
      ...modalData[0].node,
      formSchema: val,
      title: val.substring(0, 20),
    };
  } else if (currentModalData.subtitle === 'UI Schema') {
    newNode = {
      ...modalData[0].node,
      formUISchema: val,
      title: val.substring(0, 20),
    };
  } else if (currentModalData.subtitle === 'Block Implementation') {
    newNode = {
      ...modalData[0].node,
      blockImplementation: val,
      title: val.substring(0, 20),
    };
  } else if (currentModalData.subtitle === 'Block Preview Implementation') {
    newNode = {
      ...modalData[0].node,
      blockPreviewImplementation: val,
      title: val.substring(0, 20),
    };
  } else if (currentModalData.subtitle === 'Prepare Data') {
    newNode = {
      ...modalData[0].node,
      prepareData: val,
      title: val.substring(0, 20),
    };
  };
  return newNode;
};

export const getSchema = (currentModalData, schema) => {
  if (currentModalData.subtitle === 'File') {
    schema.properties = {
      ...schema.properties,
      fileName: {
        type: 'string',
        title: ' File Name',
        default: currentModalData.fileName
      },
      fileDescription: {
        type: 'string',
        title: ' File Description',
        default: currentModalData.fileDescription
      },
      fileSequence: {
        type: 'number',
        title: ' File Sequence',
        default: currentModalData.fileSequence
      },
      fileIsActive: {
        type: 'boolean',
        title: ' File Active',
        default: currentModalData.fileIsActive
      },
    };
  }

  if (currentModalData.subtitle === 'Form') {
    schema.properties = {
      ...schema.properties,
      formName: {
        type: 'string',
        title: 'Form Name',
        default: currentModalData.formName
      },
      formDescription: {
        type: 'string',
        title: 'Form Description',
        default: currentModalData.formDescription
      },
      formIsActive: {
        type: 'boolean',
        title: 'Form is Active',
        default: currentModalData.formIsActive
      },
    };
  }

  if (currentModalData.subtitle === 'Block') {
    schema.properties = {
      ...schema.properties,
      blockName: {
        type: 'string',
        title: 'Block Name',
        default: currentModalData.blockName
      },
      blockDescription: {
        type: 'string',
        title: 'Block Description',
        default: currentModalData.blockDescription
      },
      blockSequence: { type: 'number', title: 'Block Sequence' },
      blockIsActive: { type: 'boolean', title: 'Block is Active' },
    };
  }

  if (currentModalData.subtitle === 'Schema') {
    schema.properties = {
      ...schema.properties,
      formSchema: {
        type: 'string',
        title: 'Form Schema',
        default: currentModalData.formSchema
      },
    };
  }

  if (currentModalData.subtitle === 'UI Schema') {
    schema.properties = {
      ...schema.properties,
      formUISchema: {
        type: 'string',
        title: 'Form UI Schema',
        default: currentModalData.formUISchema
      },
    };
  }

  if (currentModalData.subtitle === 'Prepare Data') {
    schema.properties = {
      ...schema.properties,
      formPrepareData: {
        type: 'string',
        title: 'Form Prepare Data',
        default: currentModalData.formPrepareData
      },
    };
  }

  if (currentModalData.subtitle === 'Props') {
    schema.properties = {
      ...schema.properties,
      formProps: {
        type: 'array',
        title: 'Form Props',
        items: {
          type: 'object',
          properties: {
            item: {
              title: 'Item',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  propName: { type: 'string', title: 'Prop Name', default: get(currentModalData, 'formProps.propName', '') },
                  propType: { type: 'string', title: 'Prop Type', default: get(currentModalData, 'formProps.propType', '') }
                }
              }
            }
          }
        }
      }
    };
  }

  if (currentModalData.subtitle === 'Block Implementation') {
    schema.properties = {
      ...schema.properties,
      blockImplementation: {
        type: 'string',
        default: currentModalData.blockImplementation
      }
    };
  }

  if (currentModalData.subtitle === 'Block Preview Implementation') {
    schema.properties = {
      ...schema.properties,
      blockPreviewImplementation: {
        type: 'string',
        default: currentModalData.blockPreviewImplementation
      }
    };
  }

  if (currentModalData.subtitle === 'Template') {
    schema.properties = {
      ...schema.properties,
      id: {
        type: 'string',
        title: 'ID',
        default: currentModalData.id
      },
      name: {
        type: 'string',
        title: 'Name',
        default: currentModalData.name
      },
      templateDescription: {
        type: 'string',
        title: 'Description',
        default: currentModalData.templateDescription
      },
      templateTechnos: {
        type: 'string',
        title: 'Technos',
        default: currentModalData.templateTechnos
      },
      templateIsActive: {
        type: 'boolean',
        title: 'Is Active',
        default: currentModalData.templateIsActive
      },
      templateIsComponent: {
        type: 'boolean',
        title: 'Is Component Template',
        default: currentModalData.templateIsActive
      },
      userid: {
        type: 'string',
        title: 'User',
        default: currentModalData.userid
      }
    };
  }
  return schema;
};