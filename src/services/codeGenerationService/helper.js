export const executeCodeGeneration = (template, forms) => {
  let codeFile = [];
  template.templateFiles.map(file => {
    let code = "";
    file.fileBlocks.map(block => {
      if (block.blockImplementation) {
        code = new Function("forms", block.blockImplementation)(forms);
      }
    });

    codeFile.push({
      id: file.fileName,
      code
    });
  });

  return codeFile;
};
