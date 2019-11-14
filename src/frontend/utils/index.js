import { history } from "../redux/store";
import isEmpty from 'lodash/isEmpty';

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