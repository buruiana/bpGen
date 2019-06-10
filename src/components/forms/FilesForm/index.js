import { connect } from "react-redux";
import { login } from "../../../services/loginFormService/actions";
import FilesForm from "./filesForm";

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
)(FilesForm);
