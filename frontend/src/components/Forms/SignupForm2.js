import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { userRegister } from "../../service/api";

const SignupForm2 = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState({
    password: '',
    password2: ''
  });
  const [token, setToken] = useState();

  async function onClickHandler(e) {
    e.preventDefault();
    const userData = { email: email, password: password };
    userRegister(userData).then((response) => {
      setToken(JSON.stringify(response.data.token));
      localStorage.setItem("jwt", token);
    });
  }

  return (
    <article className="main-article">
      <header className="article-header">
        <div className="article-details">
          <div className="article-title-wrapper">
            <h2 className="article-title">Register</h2>
          </div>
        </div>
      </header>
      <Container className="p-5">
        <Form method="POST" className="auth-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword({...password, password:e.target.value})}
            />
            <Form.Control
              type="password"
              name="password2"
              placeholder="Confirm Password"
              onChange={(e) => setPassword({...password ,password2:e.target.value})}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onClickHandler}>
            Submit
          </Button>
        </Form>
      </Container>
    </article>
  );
};

export default SignupForm2;
