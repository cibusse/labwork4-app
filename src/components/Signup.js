import React, { useRef, useState } from 'react';
import { Form, Card, Button, CardBody, FormGroup, FormLabel, FormControl, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // Check if passwords match
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <CardBody>
          <h2 className='text-center mb-4'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup id="email">
              <FormLabel>Email</FormLabel>
              <FormControl type="email" ref={emailRef} required />
            </FormGroup>
            <FormGroup id="password">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" ref={passwordRef} required />
            </FormGroup>
            <FormGroup id="password-confirm">
              <FormLabel>Password Confirmation</FormLabel>
              <FormControl type="password" ref={passwordConfirmRef} required />
            </FormGroup>
            <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
          </Form>
        </CardBody>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/Login">Log in</Link>
      </div>
    </>
  );
}

