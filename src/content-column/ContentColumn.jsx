import React from 'react';
import { Col, Container } from 'react-bootstrap';
import CircularPreviewCard from '../circular/components/circular-prview-card/CircularPreviewCard';

import './ContentColumn.css';

function ContentColumn() {
  return (
    <Col md={6} className='content-col'>
      <Container fluid className='content-container overflow-auto'>
        <CircularPreviewCard />
        <CircularPreviewCard />
        <CircularPreviewCard />
        <CircularPreviewCard />
        <CircularPreviewCard />
        <CircularPreviewCard />
        <CircularPreviewCard />
        <CircularPreviewCard />
        <CircularPreviewCard />
        <CircularPreviewCard />
        <CircularPreviewCard />
      </Container>
    </Col>
  );
}

export default ContentColumn;
