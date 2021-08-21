import React from 'react';
import { Col, Container } from 'react-bootstrap';

import './SidebarLeft.css';

function SidebarLeft() {
  return (
    <Col md={3} className='sidebar-left-col'>
      <Container className='sidebar-left-container'>
      </Container>
    </Col>
  )
}

export default SidebarLeft;
