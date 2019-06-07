import { connect } from "react-redux";
import TestModal from "./testModal";
import { removeModal } from "../../../services/modalService/actions";

const mapDispatchToProps = {
  removeModal: () => removeModal()
};

export default connect(
  null,
  mapDispatchToProps
)(TestModal);
