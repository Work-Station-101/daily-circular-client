import React from 'react';

import {
  Col,
  Row,
  Container,
  Form,
  Button,
} from 'react-bootstrap';
import { RouteUrls } from '../../../config';

import './Register.css';

function Register() {
  return (
    <Row>
      <Col md={3}></Col>
      <Col md={6}>
        <Container className='rg-container'>
          <Container
            className='shadow-sm p-3 mb-5 bg-white rounded'
            style={{ textAlign: 'center' }}
          >
            <h2>Sign up to Daily Circular</h2>
            <p>Already signed up! <a href={RouteUrls.login}>login</a></p>
          </Container>
          <Form className='rg-form'>
            <Row className="mb-3">
              <Form.Group as={Col} >
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First name" />
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last name" />
              </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' placeholder='Confirm Password' />
            </Form.Group>
            <Row>
              <Col md={4}>
                <Button variant='success' type='submit'>
                  Sign Up
                </Button>
              </Col>
              <Col md={5}></Col>
              <Col md={3}>
                <Button style={{ float: 'right' }} variant='primary' type='reset'>
                  Reset
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Col>
    </Row>
  );
}

export default Register;
