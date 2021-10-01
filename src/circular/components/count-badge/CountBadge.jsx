import React from 'react';
import PropTypes from 'prop-types';

import './CountBadge.css';
function CountBadge({ count }) {
  return (
    <span className='badge count-badge' pill> {count || 0}</span>
  );
}

CountBadge.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CountBadge;
