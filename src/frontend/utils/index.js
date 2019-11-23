import { history } from "../redux/store";
import isEmpty from 'lodash/isEmpty';
import { walk, changeNodeAtPath } from 'react-sortable-tree';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';

export const navigate = id => {
  history.push(id);
};

export const navigate2Login = () => {
  history.push('/login');
};

export const replaceUndefined = (obj) => {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') replaceUndefined(obj[key]);
    else if (obj[key] === undefined) obj[key] = '';
  });
  return obj;
};

export const getTechnosEnums = technos => !isEmpty(technos)
  ? technos.map(techno => techno._id)
  : [];
export const getTechnosEnumNames = technos => !isEmpty(technos)
  ? technos.map(techno => techno.title)
  : [];

export const getProvidersEnums = providers => !isEmpty(providers)
  ? providers.map(provider => provider._id)
  : [];
export const getProvidersEnumNames = providers => !isEmpty(providers)
  ? providers.map(provider => provider.title)
  : [];

export const getPropTypesEnums = propTypes => !isEmpty(propTypes)
  ? propTypes.map(p => p._id)
  : [];
export const getPropTypesEnumNames = propTypes => !isEmpty(propTypes)
  ? propTypes.map(p => p.title)
  : [];

export const getTechnoName = (technos, id) => technos.filter(e => e._id === id).map(el => el.title);
export const getProviderName = (providers, id) => providers.filter(e => e._id === id).map(el => el.title);
export const getPropTypeName = (propTypes, id) => propTypes.filter(e => e._id === id).map(el => el.title);


export const fillNodeData = (treeData, providers) => {
  walk({
    treeData: treeData,
    getNodeKey: ({ treeIndex: number }) => number,
    callback: rowInfo => {
      let node = {
        ...rowInfo.node,
      };
      node.uniqId = uniqueId();
      node.hasChildren = !isEmpty(node.children);
      const hasComponentPropsVals = get(node, 'componentProps', []).filter(el => el.val);
      node.hasComponentPropsVals = !isEmpty(hasComponentPropsVals);
      node.providerPath = get(providers.filter(provider => provider.name === node.provider), '[0].path', '');

      treeData = changeNodeAtPath({
        treeData: treeData,
        path: rowInfo.path,
        newNode: node,
        getNodeKey: ({ treeIndex }) => treeIndex,
        ignoreCollapsed: false
      });
    },
    ignoreCollapsed: false
  });

  return treeData;
}