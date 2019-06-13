import { connect } from "react-redux";
import { setTemplate } from "../../../services/templatesFormService/actions";
import TemplatesForm from "./templatesForm";

// const mapStateToProps = state => {
//   return {
//     ingredients: state.ingredientsReducer.ingredients,
//   }
// };

const mapDispatchToProps = {
  setTemplate
};

export default connect(
  null,
  mapDispatchToProps
)(TemplatesForm);
