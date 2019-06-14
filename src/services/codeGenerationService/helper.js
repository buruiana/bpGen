import reduxSchema from "../../reduxSchema";

export const executeCodeGeneration = (template, state) => {
  const filesCode = [];

  template.files.map(file => {
    const code = "";
    file.blocks.map(block => {
      code = blockCode.concat(executeBlockGeneration(block, state));
    });
    filesCode.push({
      id: file.name,
      code
    });
  });
  return filesCode;
};

export const executeBlockGeneration = (block, state) => {
  const blockCode = new Function(block.implementation);
  return blockCode;
};
