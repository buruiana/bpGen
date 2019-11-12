import { connect } from "react-redux";
import AlertComponent from "./alert";
import { clearAlert } from "../../../services/alertService/actions";

const mapStateToProps = state => {
  return {
    alertData: state.alertReducer,
  };
};

const mapDispatchToProps = {
  clearAlert,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertComponent);
