import reduxSchema from "../../example/reduxSchema";

export const executeCodeGeneration = template => {
  const filesCode = [];

  template.templateFiles.map(file => {
    let code = "";
    file.fileBlocks.map(block => {
      code = code + block.blockImplementation;
    });

    filesCode.push({
      id: file.fileName,
      code
    });
  });

  return filesCode;
};

// export const executeBlockGeneration = block => {
//   const blockCode = new Function(block.implementation);

//   return blockCode;
// };
