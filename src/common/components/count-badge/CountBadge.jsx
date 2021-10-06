import React from 'react';
import PropTypes from 'prop-types';

import './CountBadge.css';
function CountBadge({ count }) {
  return (
    <span className='badge count-badge'> {count || 0}</span>
  );
}

CountBadge.propTypes = {
  count: PropTypes.number,
};

export default CountBadge;
