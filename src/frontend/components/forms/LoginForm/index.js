import { connect } from "react-redux";
import { login, loginSuccess } from "../../../services/loginService/actions";
import { authenticate, register } from "../../../services/backEndService/actions";
import LoginForm from "./loginForm";

// const mapStateToProps = state => {
//   return {
//     ingredients: state.ingredientsReducer.ingredients,
//   }
// };

const mapDispatchToProps = {
  login,
  loginSuccess,
  authenticate,
  register,
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
