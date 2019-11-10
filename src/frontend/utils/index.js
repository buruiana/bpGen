import { history } from "../redux/store";

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