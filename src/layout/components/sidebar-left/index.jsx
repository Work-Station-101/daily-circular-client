import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Preference from '../../../preference/components';

import './index.css';

const SidebarLeft = () => {
  const [circularTagList, setCircularTagList] = useState([
    { _id: '1', tagName: 'Job' },
    { _id: '2', tagName: 'Admission' },
    { _id: '3', tagName: 'House rent' },
    { _id: '4', tagName: 'Govt Job' },
    { _id: '5', tagName: 'X' },
    { _id: '6', tagName: 'y' },
    { _id: '7', tagName: 'z' },
  ]);

  return (
    <div className='sidebar-left-col'>
      <Container className='sidebar-left-container'>
        <Preference 
          circularTagList={circularTagList}
        />
      </Container>
    </div>
  );
};

export default SidebarLeft;
