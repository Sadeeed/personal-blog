import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { userLogin } from "../../service/api";

const LoginForm = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [token, setToken] = useState();

  async function onClickHandler(e) {
    e.preventDefault();
    const userData = { email: email, password: password };
    userLogin(userData).then((response) => alert(JSON.stringify(response.data)));
  }

  return (
    <article className="main-article">
      <header className="article-header">
        <div className="article-details">
          <div className="article-title-wrapper">
            <h2 className="article-title">Login</h2>
          </div>
        </div>
      </header>
      <Container className="p-5">
        <Form method="POST">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
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

export default LoginForm;
