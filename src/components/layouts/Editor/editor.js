import React from "react";

const Editor = props => {
  const addNewModal = () => props.addModal("PROJECT_SETTINGS");

  return (
    <div>
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
