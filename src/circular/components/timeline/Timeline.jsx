import React from 'react';

import { Container } from 'react-bootstrap';
import CircularPreviewCard from '../circular-prview-card/CircularPreviewCard';

import './Timeline.css';

function Timeline() {
  return (
    <Container fluid className='timeline-container overflow-auto'>
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
  );
}

export default Timeline;
