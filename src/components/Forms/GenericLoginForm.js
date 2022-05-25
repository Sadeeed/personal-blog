import React from "react";
import { useFormik } from "formik";
import { Card } from "react-bootstrap";

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i.test(
      values.password
    )
  ) {
    errors.password = "Invalid Password";
  }
};

const GenericLoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Card className="bg-nord px-5 mx-5 my-5 py-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="text-nord-main">
              Username
            </label>
            <input
              type="text"
              className="form-control text-nord-input"
              id="username"
              placeholder="Enter Username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {/* <small id="passwordHelp" className="form-text text-nord-muted">
            We'll never share your password with anyone else.
          </small> */}

            {formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}

          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-nord-main">
              Password
            </label>
            <input
              type="password"
              className="form-control text-nord-input"
              id="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

          </div>
          <button type="submit" className="btn btn-nord mt-2">
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default GenericLoginForm;
