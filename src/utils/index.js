import { history } from "../redux/store";

export const navigate = id => {
  history.push(id);
};

export const navigate2Login = () => {
  history.push('/login');
};

