import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import MyCirculars from '../circular/components/my-circulars/MyCirculars';
import Timeline from '../circular/components/timeline/Timeline';

import { RouteUrls } from '../config';
import './ContentColumn.css';

function ContentColumn(props) {
  console.log(props);
  return (
    <Col md={6} className='content-col'>
      <Container fluid className='content-column-container overflow-auto'>
        <Route exact path={[RouteUrls.default, RouteUrls.timeline]} component={Timeline} />
        <Route exact path={RouteUrls.myCirculars} component={MyCirculars} />
      </Container>
    </Col>
  );
}

export default ContentColumn;
