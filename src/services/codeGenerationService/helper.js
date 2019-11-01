import * as helper from '../../utils/helper';

export const executeCodeGeneration = (template, forms) => {
  let codeFile = [];
  template.templateFiles.map(file => {
    let code = "";
    let codePreview = "";

    file.fileBlocks.map(block => {
      if (block.blockImplementation) {
        code+= new Function("forms", "helper", block.blockImplementation)(forms, helper);
      }
      if (block.blockPreviewImplementation) {
        codePreview+= new Function("forms", "helper", block.blockPreviewImplementation)(forms, helper);
      }
    });

    codeFile.push({
      id: file.fileName,
      code
    });
    codeFile.push({
      id: `${file.fileName}_preview`,
      code: codePreview
    });
  });

  return codeFile;
};
