import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const ComponentInfo = ({ removeModal, modalData }) => {
  const { node } = modalData[0];
  const [open, setOpen] = useState({});

  const renderDescription = descr => {
    return descr
      ? (
        <textarea rows={Math.round(descr.length / 33)} cols="100" className='textarea-noBorder'>
          {descr}
        </textarea>
      )
      : null;
  };

  const renderProps = () => {
    const propsInfo = node.componentProps;

    const handleCklick = title => {
      setOpen({
        ...open,
        [title]: !open[title]
      });
    };

    const renderDetails = prop => {
      return (open[prop.title] || false)
        ? (
          <div>
            {prop.propType}
            {prop.description}
          </div>
        )
        : null;
    };

    return propsInfo.map(prop => {
      const { title } = prop;
      return (
        <div key={title}>
          <a onClick={() => handleCklick(title)} key={`${title}_a`} className='propsStyle'>{title}</a>
          {renderDetails(prop)}
        </div>
      );
    });
  };

  return (
    <div>
      <Modal
        show
        aria-labelledby="example-custom-modal-styling-title"
        onHide={removeModal}
        dialogClassName="modal-dialog modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{node.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>Provider: {node.provider}</div>
          <div>Techno: {node.techno}</div>
          <div>{renderDescription(node.description)}</div>
          <div>{renderProps()}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ComponentInfo;
