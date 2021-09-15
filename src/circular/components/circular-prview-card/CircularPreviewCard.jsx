import React from 'react';
import {
  Card,
  Button,
  ButtonGroup,
  Row,
  Col,
  Image,
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
    <div className='cpc-div'>
      <Card>
        <Card.Header className='cpc-header'>
          <Row>
            <Card.Title>Special title treatment</Card.Title>
          </Row>
          <Row>
            <Col
              md={1}
              className='cpc-user-imgae-col'
            >
              <Image
                className='cpc-user-image'
                src={'user.png'}
                thumbnail
              />
            </Col>
            <Col
              md={7}
              className='cpc-user-name-col'
            >
              <h6>{'FirstName LastName'}</h6>
              <p className='cpc-date'>{(new Date()).toDateString()}</p>
            </Col>
          </Row>
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
                <Button className='cpc-action-btn'>
                  <FaEye />
                  <CountBadge count={5} />
                </Button>
                <Button className='cpc-action-btn'>
                  <FaThumbsUp />
                  <CountBadge />
                </Button>
                <Button className='cpc-action-btn'>
                  <FaThumbsDown />
                  <CountBadge />
                </Button>
                <Button className='cpc-action-btn'>
                  <FaComment />
                  <CountBadge />
                </Button>
              </ButtonGroup>
            </Col>
            <Col md={2}>
              <ButtonGroup style={{ float: 'right' }}>
                <Button
                  variant='primary'
                  className='cpc-action-btn'
                >
                  <FaShare />
                  <CountBadge />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CircularPreviewCard;
