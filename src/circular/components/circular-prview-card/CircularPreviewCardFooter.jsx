import React from 'react';
import PropTypes from 'prop-types';
import {
  FaComment,
  FaEye,
  FaShare,
  FaThumbsDown,
  FaThumbsUp,
} from 'react-icons/fa';
import CountBadge from '../../../common/components/count-badge/CountBadge';

const CircularPreviewCardFooter = ({
  onClickViewButton,
}) => {
  return (
    <React.Fragment>
      <div>
        <button
          className='cpc-footer-action-btn'
          onClick={onClickViewButton}
        >
          <FaEye size='20px' />
          <CountBadge count={5} />
        </button>
        <button className='cpc-footer-action-btn'>
          <FaThumbsUp size='20px' />
          <CountBadge />
        </button>
        <button className='cpc-footer-action-btn'>
          <FaThumbsDown size='20px' />
          <CountBadge />
        </button>
        <button className='cpc-footer-action-btn'>
          <FaComment size='20px' />
          <CountBadge />
        </button>
      </div>
      <div>
        <button
          className='cpc-footer-action-btn cpc-footer-action-btn-share'
        >
          <FaShare size='20px' />
          <CountBadge />
        </button>
      </div>
    </React.Fragment>
  );
};

CircularPreviewCardFooter.propTypes = {
  onClickViewButton: PropTypes.func.isRequired,
};

export default CircularPreviewCardFooter;
