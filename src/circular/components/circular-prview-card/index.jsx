import React from 'react';
import { Card } from 'react-bootstrap';
import CircularPreviewCardFooter from './CircularPreviewCardFooter';
import CircularPreviewCardHeader from './CircularPreviewCardHeader';

import './index.css';

function CircularPreviewCard() {


  return (
    <div className='cpc-div'>
      <Card>
        <Card.Header className='cpc-header'>
          <CircularPreviewCardHeader />
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
        <Card.Footer className='cpc-footer'>
          <CircularPreviewCardFooter />
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CircularPreviewCard;
