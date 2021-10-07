import React, { useEffect, useState } from 'react';

import { } from 'react-bootstrap';
import CircularService from '../../service';
import CircularPreviewCard from '../circular-prview-card';

import './Timeline.css';

function Timeline() {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    let mounted = true;
    CircularService.getCirculars([])
      .then((circularList) => setCirculars(circularList));

    return () => mounted = false;
  }, []);

  return (
    <div>
      {
        circulars.map((circular) => (
          <CircularPreviewCard
            key={circular.guid}
            circular={circular}
          />
        ))
      }
    </div>
  );
}

export default Timeline;
