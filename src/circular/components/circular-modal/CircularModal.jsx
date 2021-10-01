import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import './CircularModal.css';

function CircularModal({
  circularId,
  showModal,
  handleClose,
}) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

CircularModal.propTypes = {
  circularId: PropTypes.string,
  showModal: PropTypes.bool,
  handleClose: PropTypes.func,
}

export default CircularModal;
