import React from "react";
import CustomNavBar from "../CustomNavBar";

const Editor = props => {
  const addNewModal = () => props.addModal("PROJECT_SETTINGS");

  return (
    <div>
      <CustomNavBar />
      <p>
        <a onClick={addNewModal}>Modal</a>
      </p>
      <p>
        <img src="boiler.jpeg" />
      </p>
    </div>
  );
};

export default Editor;
