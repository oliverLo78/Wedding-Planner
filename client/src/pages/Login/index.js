import React, { useState } from 'react';
import Email from '../../components/Email';
import Password from '../../components/Password';
import BtnComponent from '../../components/Button';
import { Card, Container, Row, Col } from 'react-bootstrap';
import user from './user.png';
import './style.css';

// function component using {useState} Hook
export default function LoginPage() {
  // added const `state` for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // validate email and password is not null
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // prevent default
  function handleSubmit(event) {
    event.preventDefault();
    console.log(`email: ${email} and password: ${password}`);
  }

  return (
    <Container fluid className="pt-5">
      <Row>
        <Col className="col-lg-6 col-sm-12 m-auto">
          <Card className="bgLoginComponent custom-style-login bg-light pb-4">
            <Card.Header className="text-center bg-light login-title-style">
              <h3>Login</h3>
            </Card.Header>
            <Card.Body>
              <Col className="custom pt-3">
                <Card.Img
                  className="login-img-style"
                  variant="top"
                  src={user}
                />
              </Col>
              <form onSubmit={handleSubmit}>
                <Email
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Col className="custom">
                  <BtnComponent
                    name="Submit"
                    disabled={!validateForm()}
                  />
                </Col>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
