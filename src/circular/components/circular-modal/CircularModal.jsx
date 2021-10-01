import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

import './CircularModal.css';

const CircularModal = ({
  showModal,
  handleClose,
  circular,
}) => {
  return (
    <Modal show={showModal} onHide={handleClose} size='xl'>
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
};

CircularModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  circular: PropTypes.object,
}

export default CircularModal;
