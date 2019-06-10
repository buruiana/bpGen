import React from "react";

const Home = props => {

  const addNewModal = () => props.addModal("TEST_MODAL");

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

export default Home;
