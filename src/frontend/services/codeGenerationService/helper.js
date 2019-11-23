import * as helper from '../../utils/helper';

export const executeCodeGeneration = (template, forms) => {
  let codeFile = [];
  template.templateFiles.map(file => {
    console.log('console: file', file);
    let code = "";
    let codePreview = "";
    console.log('console: formsformsforms', forms);
    file.fileBlocks.map(block => {
      console.log('console: block', block );
      if (block.blockImplementation) {
        console.log('console: before block1', block);
        code += new Function("forms", "helper", block.blockImplementation)(forms, helper);
        console.log('console: after block');
      }
      console.log('console:111111111111111111111 ', code);
      if (block.blockPreviewImplementation) {
        console.log('console: before blockImpl');
        codePreview += new Function("forms", "helper", block.blockPreviewImplementation)(forms, helper);
        console.log('console: after blockImpl');
      }
    });
    console.log('console: after file');
    codeFile.push({
      id: file.fileName,
      code
    });
    codeFile.push({
      id: `preview_${file.fileName}`,
      code: codePreview
    });
  });

  return codeFile;
};
