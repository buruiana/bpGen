import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import get from 'lodash/get';

const ComponentInfo = ({ removeModal, modalData }) => {
  const { node } = modalData[0];
  const [open, setOpen] = useState(new Map());

  const renderDescription = descr => {
    return descr
      ? (
        <textarea rows={Math.round(descr.length / 33)} cols="100" className='textarea-noBorder'>
          {descr}
        </textarea>
      )
      : null;
  };

  const handleCklick = title => {
    console.log('console: -----------------', title, open);
    console.log('console: =================', open.get(title) || false);
    setOpen(open.set(title, !open.get(title)));
  };

  const renderProps = () => {
    const propsInfo = node.componentProps;

    return propsInfo.map(prop => {
      return (
        <div key={prop.title}>
          ---{open}---
          <a onClick={() => handleCklick(prop.title)} key={`${prop.title}_a`}>{prop.title}</a>
          {
            (
              open.get(prop.title) || false
            ) &&
              <div>
                {prop.propType}
                {prop.description}
              </div>
            }
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


{/* <div key={prop.name}>
  <a href="" onClick={setOpen(!open)} >{prop.name}</a>
  <Collapse in={open}>
    <div>
      {prop.propType}
    </div>
    <div>
      <textarea rows={Math.round(prop.description.length / 30)} cols="118" className='textarea-noBorder'>
        {prop.description}
      </textarea>
    </div>
  </Collapse>
</div> */}