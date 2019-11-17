import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import {
  getTechnoName,
  getProviderName,
  getPropTypeName,
 } from '../../../utils';

const ComponentInfo = ({ removeModal, modalData, technos, providers, propTypes }) => {
  const { node } = modalData[0];
  const [open, setOpen] = useState({});

  const renderDescription = descr => {
    return descr
      ? <textarea rows={Math.round(descr.length / 33)} cols="100" className='textarea-noBorder' defaultValue={descr} />
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
            <div className='blue_title'>{prop.propTypeProp}</div>
            <div className='blue_title'>{prop.propTypeVal}</div>
            <textarea rows={Math.round(prop.description.length / 50)} cols="100" className='textarea-noBorder' defaultValue={prop.description} />
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
          <div className='red_title'>Provider: {getProviderName(providers, node.provider)}</div>
          <div className='red_title'>Techno: {getTechnoName(technos, node.techno)}</div>
          <div className='red_title'>PropType: {getPropTypeName(propTypes, node.propType)}</div>
          <div>{renderDescription(node.description)}</div>
          <div>{renderProps()}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ComponentInfo;
