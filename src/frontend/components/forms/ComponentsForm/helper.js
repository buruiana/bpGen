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
    isDefault: false,
    provider: '',
    propType: '',
    subtitle: 'Component',
    techno: '',
    title: '',
    expanded: true,
    closeTag: false,
    isPublic: false,
    isActive: false,
  },
];

export const convertSortableTree2JsonSchema = treeData => {
  const getcomponentProps = () => {
    return treeData[0].children.map(el => {
      return {
        description: get(el, 'description', ''),
        propTypeProp: get(el, 'propTypeProp', ''),
        propTypeVal: get(el, 'propTypeVal', ''),
        propTypeIsRequired: get(el, 'propTypeIsRequired', false),
        title: get(el, 'title', ''),
        subtitle: get(el, 'subtitle', ''),
        type: get(el, 'type', ''),
      };
    });
  };

  let treeObj = {
    closeTag: get(treeData[0], 'closeTag', false),
    componentImport: get(treeData[0], 'componentImport'),
    description: get(treeData[0], 'description'),
    _id: get(treeData[0], '_id', null),
    isDefault: get(treeData[0], 'isDefault', false),
    isPublic: get(treeData[0], 'isPublic', false),
    isActive: get(treeData[0], 'isActive', false),
    provider: get(treeData[0], 'provider'),
    subtitle: get(treeData[0], 'subtitle'),
    techno: get(treeData[0], 'techno'),
    title: get(treeData[0], 'title'),
    propType: get(treeData[0], 'propType', ''),
    componentProps: getcomponentProps()
  };

  return treeObj;
};

export const convertJsonSchema2SortableTree = currentTemplate => {

  let tree = [];
  let treeObj = {
    children: [],
    isPublic: get(currentTemplate, 'isPublic', false),
    isActive: get(currentTemplate, 'isActive', false),
    closeTag: get(currentTemplate, 'closeTag', false),
    componentImport: get(currentTemplate, 'componentImport', ''),
    description: get(currentTemplate, 'description', ''),
    _id: get(currentTemplate, '_id', null),
    isDefault: get(currentTemplate, 'isDefault', false),
    provider: get(currentTemplate, 'provider', ''),
    subtitle: "Component",
    techno: get(currentTemplate, 'techno', ''),
    title: get(currentTemplate, 'title', ''),
    propType: get(currentTemplate, 'propType', ''),
    expanded: true
  };

  if (currentTemplate && !isEmpty(currentTemplate.componentProps)) {
    currentTemplate.componentProps.map(prop => {
      treeObj.children.push({
        description: get(prop, 'description', ''),
        propTypeProp: get(prop, 'propTypeProp', ''),
        propTypeVal: get(prop, 'propTypeVal', ''),
        propTypeIsRequired: get(prop, 'propTypeIsRequired', ''),
        title: get(prop, 'title', ''),
        subtitle: get(prop, 'propTypeProp', ''),
        type: 'Component Prop',
      });
    });
  }
  tree.push(treeObj);
  return tree;
};