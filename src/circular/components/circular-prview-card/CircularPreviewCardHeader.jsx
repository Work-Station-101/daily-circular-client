import React from 'react';
import { Card, Image } from 'react-bootstrap';

const CircularPreviewCardHeader = () => {
  return (
    <React.Fragment>
      <div>
        <Card.Title>Special title treatment</Card.Title>
      </div>
      <div className='cpc-header-info'>
        <div
          className='cpc-header-user-imgae-col'
        >
          <Image
            className='cpc-header-user-image'
            src={'user.png'}
            thumbnail
          />
        </div>
        <div
          className='cpc-header-user-name-col'
        >
          <div>
            <h6>{'FirstName LastName'}</h6>
          </div>
          <div>
            <p className='cpc-header-date'><strong>Posted on: </strong>{(new Date()).toDateString()}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CircularPreviewCardHeader;
