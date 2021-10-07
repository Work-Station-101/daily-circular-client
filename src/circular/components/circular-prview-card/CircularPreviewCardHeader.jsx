import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

const CircularPreviewCardHeader = ({
  title,
  postedOn,
  createdBy,
}) => {
  return (
    <React.Fragment>
      <div>
        <Card.Title>{title}</Card.Title>
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
            <h6>{createdBy.firstName + ' ' + createdBy.lastName}</h6>
          </div>
          <div>
            <p className='cpc-header-date'>
              <strong>Posted on: </strong>{(new Date(postedOn)).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

CircularPreviewCardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  createdBy: PropTypes.object.isRequired,
  postedOn: PropTypes.string.isRequired,
};

export default CircularPreviewCardHeader;
