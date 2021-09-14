import React from 'react';
import {
  Card,
  Button,
  ButtonGroup,
  Row,
  Col,
} from 'react-bootstrap';
import {
  FaEye,
  FaThumbsUp,
  FaThumbsDown,
  FaComment,
  FaShare,
} from 'react-icons/fa';
import CountBadge from '../count-badge/CountBadge';

import './CircularPreviewCard.css';


function CircularPreviewCard() {
  return (
    <div className='circular-prview-card-div'>
      <Card>
        <Card.Header>
          <Card.Title>Special title treatment</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content. 
            With supporting text below as a natural lead-in to additional content. 
            With supporting text below as a natural lead-in to additional content. 
            With supporting text below as a natural lead-in to additional content. 
            With supporting text below as a natural lead-in to additional content. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col md={10}>
              <ButtonGroup aria-label='Basic example'>
                <Button>
                  <FaEye />
                  <CountBadge count={5} />
                </Button>
                <Button>
                  <FaThumbsUp />
                  <CountBadge />
                </Button>
                <Button>
                  <FaThumbsDown />
                  <CountBadge />
                </Button>
                <Button>
                  <FaComment />
                  <CountBadge />
                </Button>
              </ButtonGroup>
            </Col>
            <Col md={2}>
              <Button
                variant='primary'
                className='circular-preview-card-share-button'
              >
                <FaShare />
                <CountBadge />
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CircularPreviewCard;
