import React from 'react';
import { Col, Container } from 'react-bootstrap';

import './SidebarRight.css';

function SidebarRight() {
  return (
    <Col md={3} className='sidebar-right-col'>
      <Container className='sidebar-right-container'>
      </Container>
    </Col>
  );
}

export default  SidebarRight;
