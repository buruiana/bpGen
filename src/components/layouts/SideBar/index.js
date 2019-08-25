import SideBar from "./sideBar";
import { connect } from "react-redux";

import { initApp } from "../../../services/configsService/actions";

const mapStateToProps = state => {
  return {
    initAppDone: state.configsReducer.initAppDone,
  }
}

const mapDispatchToProps = {
  initApp,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
