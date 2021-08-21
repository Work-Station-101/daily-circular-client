import React from 'react';
import { Col, Container } from 'react-bootstrap';

import './ContentColumn.css';

function ContentColumn() {
  return (
    <Col md={6} className='content-col'>
      <Container fluid className='content-container'>
      </Container>
    </Col>
  )
}

export default ContentColumn;
