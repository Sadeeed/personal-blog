import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"

const validate = (values) => {
  const errors = {};

  if (!values.Username) {
    errors.Username = "Required";
    // } else if (values.Username.length > 15) {
    //   errors.Username = "Must be 15 characters or less";
  } else if (/\W/.test(values.Username)) {
    errors.Username = "Username must not contain numbers or symbols";
  }

  if (!values.Password) {
    errors.Password = "Required";
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.Password)) {
    errors.Password = "Invalid Password";
  }

  if (!values.Email) {
    errors.Email = "Required";
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][\D]{8,12}$/i.test(values.Email) &&
    values.Email.length > 7 &&
    values.Email.length < 13
  ) {
    errors.Email = "Invalid email address";
  } else {
    console.log(
      "email",
      values.Email,
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.Email)
    );
  }

  if (!values.Image) {
    errors.Image = "Required";
  }

  if (!values.AgeGroup) {
    errors.AgeGroup = "Required";
  } else if (/\D/.test(values.AgeGroup)) {
    errors.AgeGroup = "Age Group should be an integer";
  }

  if (!values.Gender) {
    errors.Gender = "Please select your gender";
  }

  if (!values.toc) {
    errors.toc = "Please accept the Terms & Conditions";
  }

  console.log(errors, Object.keys(errors).length);
  if (Object.keys(errors).length > 0) {
    // console.log("true cond", document.getElementById("submit-button").disabled);
    document.getElementById("submit-button").disabled = true;
  } else {
    // console.log(
    //   "false cond",
    //   document.getElementById("submit-button").disabled
    // );
    document.getElementById("submit-button").removeAttribute("disabled");
  }

  return errors;
};

const SignupForm = (props) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Username: "",
      Password: "",
      Email: "",
      Image: "",
      AgeGroup: [],
      Gender: "",
      toc: false,
    },

    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // <Link to={{pathname: '/dashboard', state:values}} ></Link>
      // props.func(values);
      navigate("/dashboard", { state: values });
      // props.history.push("/dashboard", { state: values });
    },
  });

  return (
    <article className="main-article">
      <form onSubmit={formik.handleSubmit}>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="Username"
                className="form-control text-nord-input"
                placeholder="Username"
                onChange={formik.handleChange}
                value={formik.values.Username}
              />
              {formik.errors.Username ? (
                <div>{formik.errors.Username}</div>
              ) : null}
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input
                type="password"
                id="Password"
                className="form-control text-nord-input"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.Password}
              />
              {formik.errors.Password ? (
                <div>{formik.errors.Password}</div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Extra Text Field */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="Email"
                className="form-control text-nord-input"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.Email}
              />
              {formik.errors.Email ? <div>{formik.errors.Email}</div> : null}
            </div>
          </div>
        </div>

        {/* File */}
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            accept="image/png"
            id="Image"
            onChange={formik.handleChange}
            value={formik.values.Image}
          />
          <label className="input-group-text" htmlFor="Image">
            Upload Image
          </label>
          {formik.errors.Image ? <div>{formik.errors.Image}</div> : null}
        </div>

        {/* Select */}
        <div>
          <select
            className="form-select mb-4"
            aria-label="Age Group"
            id="AgeGroup"
            name="AgeGroup"
            onChange={formik.handleChange}
            // value={formik.values.AgeGroup}
          >
            <option defaultValue={""}>Select Your Age Group</option>
            <option value={20}>Twenties</option>
            <option value={30}>Thirties</option>
            <option value={40}>Forties</option>
            <option value={50}>Fifties</option>
            <option value={60}>Sixties</option>
            <option value={70}>Seventies</option>
          </select>
          {formik.errors.AgeGroup ? <div>{formik.errors.AgeGroup}</div> : null}
        </div>

        {/* Radios */}
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Gender"
              id="GenderM"
              onChange={formik.handleChange}
              value="M"
            />
            <label
              className="form-check-label text-nord-main"
              htmlFor="GenderM"
            >
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Gender"
              id="GenderF"
              onChange={formik.handleChange}
              value="F"
            />
            <label
              className="form-check-label text-nord-main"
              htmlFor="GenderF"
            >
              Female
            </label>
            {formik.errors.Gender ? <div>{formik.errors.Gender}</div> : null}
          </div>
        </div>

        {/* Checkbox */}
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input text-nord-input me-2"
            type="checkbox"
            id="toc"
            onChange={formik.handleChange}
            value={formik.values.toc}
          />
          <label className="form-check-label text-nord-main" htmlFor="toc">
            I have read the terms and conditions
          </label>
          {formik.errors.toc ? <div>{formik.errors.toc}</div> : null}
        </div>

        <button type="submit" className="btn btn-nord mb-4" id="submit-button">
          Sign up
        </button>
      </form>
    </article>
  );
};

export default SignupForm;
