import { connect } from "react-redux";
import App from "./app";


const mapStateToProps = state => {
  return {
    modals: state.modalsReducer.modals
  };
};

export default connect(
  mapStateToProps
)(App);
