import React from "react";
import CustomNavBar from "../CustomNavBar";
import Ace from "../AceEditor";
import isEmpty from "lodash/isEmpty";

const Editor = props => {
  const { projectSettings } = props;
  const renderAce = () => {
    return !isEmpty(projectSettings) ? <Ace /> : null;
  };
  return (
    <div>
      <CustomNavBar />
      {renderAce()}
    </div>
  );
};

export default Editor;
