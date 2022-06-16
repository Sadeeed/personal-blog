import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { setToken, userLogin } from "../../service/api";
import { useNavigate } from 'react-router-dom'

const LoginForm = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  // const [token, setToken] = useState();

  async function onClickHandler(e) {
    e.preventDefault();
    const userData = { username: username, password: password };
    userLogin(userData).then((res) => {
      if (res.data.status === 200) {
        alert(JSON.stringify(res.data.token));
        setToken(res.data.token)
        localStorage.setItem('jwt', res.data.token)
        navigate("/");
      }
    });
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
        <Form method="POST" className="auth-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onClickHandler} className="submit-button">
            Submit
          </Button>
        </Form>
      </Container>
    </article>
  );
};

export default LoginForm;
