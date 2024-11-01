import React, { useRef, useState } from 'react';
import { Form, Card, Button, FormGroup, FormLabel, FormControl, Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Log In</h2>
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
            <Button disabled={loading} className="w-100" type="submit">Log In</Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/ForgotPassword">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/Signup">Sign Up</Link>
      </div>
    </>
  );
}
