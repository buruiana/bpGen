export const getExportModulesCode = components => {
  let code = `export const getImport = async type => {
  switch (type) {`;

  components.map(el => {
    if (el.componentImport !== '-') {
      code += ` case "${el.componentImport}": return await import("${el.componentImport}");`;
    }
  });

  code += `}};`;
  return code;
};