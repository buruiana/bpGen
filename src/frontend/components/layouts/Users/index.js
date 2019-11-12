import { connect } from "react-redux";
import UserListView from './userListView';
import {
  deleteUser,
  setUser,
  getAllUsers,
} from '../../../services/usersService/actions';

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    searchData: state.filterDataReducer.searchData,
    isAuthenticated: state.loginReducer.isAuthenticated,
    hasUsersImport: state.configsReducer.configs.hasUsersImport,
  }
}

const mapDispatchToProps = {
  deleteUser: user => deleteUser(user),
  setUser: user => setUser(user),
  getAllUsers: () => getAllUsers(),
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListView);