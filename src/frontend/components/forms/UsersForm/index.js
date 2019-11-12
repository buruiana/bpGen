import { connect } from "react-redux";
import { setUser } from '../../../services/usersService/actions';
import UsersForm from './usersForm';

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
};

const mapDispatchToProps = {
  setUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersForm);