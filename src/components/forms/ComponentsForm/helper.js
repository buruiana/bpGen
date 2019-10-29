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
        description: get(el, 'description', ''),
        propType: get(el, 'propType', ''),
        propTypeIsrequired: get(el, 'propTypeIsrequired', false),
        title: get(el, 'title', ''),
        subtitle: get(el, 'subtitle', ''),
      };
    });
  };

  let treeObj = {
    closeTag: get(treeData[0], 'closeTag', false),
    componentImport: get(treeData[0], 'componentImport'),
    description: get(treeData[0], 'description'),
    id: get(treeData[0], 'id', null),
    isDefault: get(treeData[0], 'isDefault', false),
    provider: get(treeData[0], 'provider'),
    subtitle: get(treeData[0], 'subtitle'),
    techno: get(treeData[0], 'techno'),
    title: get(treeData[0], 'title'),
    componentProps: getcomponentProps()
  };

  return treeObj;
};

export const convertJsonSchema2SortableTree = currentTemplate => {

  let tree = [];
  let treeObj = {
    children: [],
    closeTag: get(currentTemplate, 'closeTag', false),
    componentImport: get(currentTemplate, 'componentImport', ''),
    description: get(currentTemplate, 'description', ''),
    id: get(currentTemplate, 'id', null),
    isDefault: get(currentTemplate, 'isDefault', false),
    provider: get(currentTemplate, 'provider', ''),
    subtitle: "Component",
    techno: get(currentTemplate, 'techno', ''),
    title: get(currentTemplate, 'title', ''),
    expanded: true
  };

  if (currentTemplate && !isEmpty(currentTemplate.componentProps)) {
    currentTemplate.componentProps.map(prop => {
      treeObj.children.push({
        description: get(prop, 'description', ''),
        propType: get(prop, 'propType', ''),
        propTypeIsrequired: get(prop, 'propTypeIsrequired', ''),
        title: get(prop, 'title', ''),
        subtitle: 'Component Prop',
      });
    });
  }
  tree.push(treeObj);
  return tree;
};