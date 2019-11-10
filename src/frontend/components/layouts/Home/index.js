import Home from "./home";
import { connect } from "react-redux";

import { addModal } from "../../../services/modalService/actions";

const mapDispatchToProps = {
  addModal: modal => addModal(modal)
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
