import React from 'react';
import { Container } from 'react-bootstrap';
import CircularPreviewCard from '../circular-prview-card/CircularPreviewCard';

import './MyCirculars.css';

function MyCirculars() {
  return (
    <Container fluid className='my-circulars-continer overflow-auto'>
      <CircularPreviewCard />
      <CircularPreviewCard />
      <CircularPreviewCard />
      <CircularPreviewCard />
    </Container>
  );
}

export default MyCirculars;
