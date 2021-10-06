import React from 'react';
import { useState } from 'react';

import {
  Form,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import { RouteUrls } from '../../../config';
import './Login.css';

function Login() {

  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });

  const onChangeField = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    
  }

  return (
    <Row>
      <Col md={3}></Col>
      <Col md={6}>
        <Container className='lg-container shadow p-3 mb-5 bg-white rounded'>
          <Container
            className='shadow-sm p-3 mb-5 bg-white rounded'
            style={{ textAlign: 'center' }}
          >
            <h2>Welcome to Daily Circular</h2>
          </Container>
          <Form className='lg-form' onSubmit={handleLogin}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' name='email' required onChange={onChangeField} />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' name='password' required onChange={onChangeField} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Remember me' />
            </Form.Group>
            <Row>
              <Col md={3}>
                <Button variant='primary' type='submit'>
                  Login
                </Button>
              </Col>
              <Col md={4}></Col>
              <Col md={5}>
                <a
                  className='btn btn-success'
                  href={RouteUrls.registration}
                  style={{ float: 'right' }}
                >
                  Sign up
                </a>
              </Col>
            </Row>
          </Form>
        </Container>
      </Col>
    </Row>
  );
}

export default Login;
