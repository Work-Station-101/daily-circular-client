import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import Timeline from '../../../circular/components/timeline/Timeline';
import MyCirculars from '../../../circular/components/my-circulars/MyCirculars';
import Profile from '../../../profile/components';

import { RouteUrls } from '../../../config';
import './ContentColumn.css';

function ContentColumn() {
  return (
    <div className='content-col'>
      <Container fluid className='content-column-container overflow-auto'>
        <Route exact path={[RouteUrls.default, RouteUrls.timeline]} component={Timeline} />
        <Route exact path={RouteUrls.myCirculars} component={MyCirculars} />
        <Route exact path={RouteUrls.profile} component={Profile} />
      </Container>
    </div>
  );
}

export default ContentColumn;
