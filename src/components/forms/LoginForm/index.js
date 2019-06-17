import { connect } from "react-redux";
import { login } from "../../../services/loginService/actions";
import LoginForm from "./loginForm";

// const mapStateToProps = state => {
//   return {
//     ingredients: state.ingredientsReducer.ingredients,
//   }
// };

const mapDispatchToProps = {
  login: credentials => login(credentials)
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
