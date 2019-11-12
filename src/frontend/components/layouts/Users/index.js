import { connect } from "react-redux";
import UserListView from './userListView';
import {
  deleteUser,
  setUser,
  getAllUsers,
} from '../../../services/usersService/actions';
import { importData } from '../../../services/configsService/actions';

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    searchData: state.filterDataReducer.searchData,
    isAuthenticated: state.loginReducer.isAuthenticated,
    hasUsersImport: state.configsReducer.configs.hasUsersImport,
  }
}

const mapDispatchToProps = {
  deleteUser,
  setUser,
  getAllUsers,
  importData,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListView);