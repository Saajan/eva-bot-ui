import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ConfirmationModal = (props) => {
  const {
    className,
    setModal,
    toggleModal
  } = props;

  console.log(props)
  return (
      <Modal isOpen={setModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Notification scheduled</ModalHeader>
        <ModalBody>
          Your message has been scheduled to be delievred to all the customers.
          You may check the status in the Notification status tab anytime.
        </ModalBody>
        <ModalFooter>
          <Button style={{backgroundColor:"#5e72e4", color: "white"}} onClick={toggleModal}>OK</Button>{' '}
        </ModalFooter>
      </Modal>
  );
}

export default ConfirmationModal;