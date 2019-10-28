import get from "lodash/get";
import isEmpty from "lodash/isEmpty";


export const getDafaultTreeData = [
  {
    children: [{
      subtitle: 'Component Prop',
    }],
    componentImport: '',
    componentProps: [],
    description: '',
    id:'',
    isDefault: false,
    provider: '',
    subtitle: 'Component',
    techno: '',
    title: '',
    expanded: true,
  },
];

export const convertSortableTree2JsonSchema = treeData => {
  const getcomponentProps = () => {
    return treeData[0].children.map(el => {
      return {
        description: el.description,
        propType: el.propType,
        propTypeIsrequired: el.propTypeIsrequired,
        title: el.title,
      };
    });
  };

  let treeObj = {
    closeTag: treeData[0].closeTag,
    componentImport: treeData[0].componentImport,
    description: treeData[0].description,
    id: treeData[0].id,
    isDefault: treeData[0].isDefault,
    provider: treeData[0].provider,
    subtitle: treeData[0].subtitle,
    techno: treeData[0].techno,
    title: treeData[0].title,
    componentProps: getcomponentProps()
  };

  return treeObj;
};

export const convertJsonSchema2SortableTree = currentTemplate => {

  let tree = [];
  let treeObj = {
    children: [],
    closeTag: currentTemplate.closeTag,
    componentImport: currentTemplate.componentImport,
    description: currentTemplate.description,
    id: currentTemplate.id,
    isDefault: currentTemplate.isDefault,
    provider: currentTemplate.provider,
    subtitle: "Component",
    techno: currentTemplate.techno,
    title: currentTemplate.title,
    expanded: true
  };

  if (currentTemplate && !isEmpty(currentTemplate.componentProps)) {
    currentTemplate.componentProps.map(prop => {
      treeObj.children.push({
        description: prop.description,
        propType: prop.propType,
        propTypeIsrequired: prop.propTypeIsrequired,
        title: prop.title,
        subtitle: 'Component Prop',
      });
    });
  }
  tree.push(treeObj);
  return tree;
};