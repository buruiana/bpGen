import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const AlertComponent = props => {
  const {
    alertData,
  } = props;
  const [show, setShow] = useState(true);


  const showAlert = () => {
    const {
      alertHead,
      alertMsg,
      alertType,
      alertAutoClose = false,
      alertAutoCloseDelay = 5000,
    } = alertData;

    const onClose = () => {
      setShow(false);
      setTimeout(function () { setShow(true); }, alertAutoCloseDelay);
    };

    if (alertMsg && alertType) {
      if (alertAutoClose) setTimeout(function () { onClose(); }, alertAutoCloseDelay);
      return (
        <div className='alertStyle'>
          <Alert show={show} variant={alertType} onClose={onClose} dismissible>
            <Alert.Heading>{alertHead}</Alert.Heading>
            <p>{alertMsg}</p>
          </Alert>
        </div>
      );
    }
    return null;
  };

  return showAlert();
};

export default AlertComponent;
