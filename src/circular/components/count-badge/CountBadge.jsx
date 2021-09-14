import React from 'react';
import { Badge } from 'react-bootstrap';

function CountBadge(props) {
  return (
    <Badge
      pill
      bg='secondary'
      style={{ top: '-15px', fontSize: '5pt' }}
    >
      {props.count ?? 0}
    </Badge>
  );
}

export default CountBadge;
