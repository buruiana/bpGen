import get from "lodash/get";
import isEmpty from "lodash/isEmpty";


export const getDafaultTreeData = [
  {
    children: [{
      subtitle: 'PropType Prop',
    }],
    propTypeProps: [],
    description: '',
    subtitle: 'PropType',
    title: '',
    expanded: true,
    isPublic: false,
    isActive: false,
  },
];

export const convertSortableTree2JsonSchema = treeData => {
  const getpropTypeProps = () => {
    return treeData[0].children.map(el => {
      return {
        description: get(el, 'description', ''),
        title: get(el, 'title', ''),
        subtitle: get(el, 'subtitle', ''),
        subtype: get(el, 'subtype', ''),
      };
    });
  };

  let treeObj = {
    description: get(treeData[0], 'description'),
    _id: get(treeData[0], '_id', null),
    isPublic: get(treeData[0], 'isPublic', false),
    isActive: get(treeData[0], 'isActive', false),
    subtitle: get(treeData[0], 'subtitle'),
    title: get(treeData[0], 'title'),
    propTypeProps: getpropTypeProps()
  };

  return treeObj;
};

export const convertJsonSchema2SortableTree = currentTemplate => {

  let tree = [];
  let treeObj = {
    children: [],
    isPublic: get(currentTemplate, 'isPublic', false),
    isActive: get(currentTemplate, 'isActive', false),
    description: get(currentTemplate, 'description', ''),
    _id: get(currentTemplate, '_id', null),
    subtitle: "PropType",
    title: get(currentTemplate, 'title', ''),
    expanded: true
  };

  if (currentTemplate && !isEmpty(currentTemplate.propTypeProps)) {
    currentTemplate.propTypeProps.map(prop => {
      treeObj.children.push({
        description: get(prop, 'description', ''),
        title: get(prop, 'title', ''),
        subtitle: 'PropType Prop',
      });
    });
  }
  tree.push(treeObj);
  return tree;
};