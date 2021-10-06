import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';

import {
  Col,
  Row,
  Container,
  Form,
  Button,
} from 'react-bootstrap';
import { RouteUrls } from '../../../config';
import UserService from '../../../user/service';

import './Register.css';

function Register() {
  const alert = useAlert();
  const history = useHistory();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    presentAddress: '',
    permanentAddress: '',
  });

  const onChangeField = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onRegister = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert.error('Passwords much match!');
      return;
    }
    const userFromDB = await UserService.findUserByEmail(user.email);
    if (userFromDB) {
      alert.error('This email is already registered!');
      return;
    }
    try {
      await UserService.createUser({
        guid: uuid(),
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        address: {
          present: user.presentAddress,
          permanent: user.permanentAddress,
        }
      });
      alert.success('Registration successful!');
      history.push(RouteUrls.login);
    } catch (err) {
      alert.error('Registration failed!');
    }
  };

  const onReset = () => {
    setUser({
      ...user,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      presentAddress: '',
      permanentAddress: '',
    });
  }

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
          <Form className='rg-form' onSubmit={onRegister}>
            <Row className='mb-3'>
              <Form.Group as={Col} >
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder='First name' name='firstName' value={user.firstName} onChange={onChangeField} required />
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder='Last name' name='lastName' value={user.lastName} onChange={onChangeField} required />
              </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter a valid email' name='email' value={user.email} onChange={onChangeField} required />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formGridAddress1'>
              <Form.Label>Present Address</Form.Label>
              <Form.Control placeholder='Present Address' name='presentAddress' value={user.presentAddress} onChange={onChangeField} required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formGridAddress2'>
              <Form.Label>Permanent Address</Form.Label>
              <Form.Control placeholder='Permanent Address' name='permanentAddress' value={user.permanentAddress} onChange={onChangeField} required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' name='password' value={user.password} onChange={onChangeField} required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' placeholder='Confirm Password' name='confirmPassword' value={user.confirmPassword} onChange={onChangeField} required />
            </Form.Group>
            <Row>
              <Col md={4}>
                <Button variant='success' type='submit'>
                  Sign Up
                </Button>
              </Col>
              <Col md={5}></Col>
              <Col md={3}>
                <Button style={{ float: 'right' }} variant='primary' type='reset' onClick={onReset}>
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
