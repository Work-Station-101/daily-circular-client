import React from 'react';
import { Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import MyCirculars from '../circular/components/my-circulars/MyCirculars';
import Timeline from '../circular/components/timeline/Timeline';

import { RouteUrls } from '../config';
import './ContentColumn.css';

function ContentColumn() {
  return (
    <Col md={6} className='content-col'>
      <Route exact path={[RouteUrls.default, RouteUrls.timeline]} component={Timeline} />
      <Route exact path={RouteUrls.myCirculars} component={MyCirculars} />
    </Col>
  );
}

export default ContentColumn;
