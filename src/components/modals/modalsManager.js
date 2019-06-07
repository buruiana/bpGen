import React from "react";
import isEmpty from "lodash/isEmpty";
import TestModal from "../modals/TestModal";

const ModalsManager = modals => {
  const currentModal = !isEmpty(modals) ? modals[modals.length - 1] : null;

  if (currentModal) {
    switch (currentModal) {
      case "TEST_MODAL":
        return <TestModal />;
      default:
        return null;
    }
  }
};

export default ModalsManager;
