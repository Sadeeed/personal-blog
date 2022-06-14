import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { userRegister } from "../../service/api";
import { useNavigate } from "react-router-dom";

const SignupForm2 = (props) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState({
    password: "",
    password2: "",
  });
  const navigate = useNavigate();

  async function onClickHandler(e) {
    e.preventDefault();
    const userData = { email: email, username: username, password: password };
    userRegister(userData).then((res) => {
      console.log(res);
      if (res.status === 200) {
        navigate("/");
      }
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
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setPassword({ ...password, password: e.target.value })
              }
            />
            <Form.Control
              type="password"
              name="password2"
              placeholder="Confirm Password"
              onChange={(e) =>
                setPassword({ ...password, password2: e.target.value })
              }
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={onClickHandler}
            className="submit-button"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </article>
  );
};

export default SignupForm2;
