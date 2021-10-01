import React from 'react';
import { FaComment, FaEye, FaShare, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import CountBadge from '../count-badge/CountBadge';

const CircularPreviewCardFooter = () => {
  return (
    <React.Fragment>
      <div>
        <button className='cpc-footer-action-btn'>
          <FaEye size='30px' />
          <CountBadge count={5} />
        </button>
        <button className='cpc-footer-action-btn'>
          <FaThumbsUp size='30px' />
          <CountBadge />
        </button>
        <button className='cpc-footer-action-btn'>
          <FaThumbsDown size='30px' />
          <CountBadge />
        </button>
        <button className='cpc-footer-action-btn'>
          <FaComment size='30px' />
          <CountBadge />
        </button>
      </div>
      <div>
        <button
          className='cpc-footer-action-btn cpc-footer-action-btn-share'
        >
          <FaShare size='30px' />
          <CountBadge />
        </button>
      </div>
    </React.Fragment>
  );
};

export default CircularPreviewCardFooter;
