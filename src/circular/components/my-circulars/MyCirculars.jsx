import React from 'react';
import { useEffect, useState } from 'react';
import CircularService from '../../service';
import CircularPreviewCard from '../circular-prview-card';

import './MyCirculars.css';

function MyCirculars() {
  const [myCirculars, setMyCirculars] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    let mounted = true;
    CircularService.getCircularsByUserGUID(currentUser.guid)
      .then((circularList) => setMyCirculars(circularList));

    return () => mounted = false;
  }, []);

  return (
    <div>
      {
        myCirculars.map((circular) => (
          <CircularPreviewCard 
            key={circular.guid}
            circular={circular}
          />
        ))
      }
    </div>
  );
}

export default MyCirculars;
