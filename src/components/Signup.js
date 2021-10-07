import { Form, Formik } from "formik";
import React from "react";
import TextField from "./TextField";
import * as Yub from "yup";

const Signup = () => {
  const validate = Yub.object({
    email: Yub.string()
      .email("Email must be valid")
      .required("Email is required"),
    password: Yub.string()
      .min(6, "Password must be 6 chars long")
      .required("Required"),
    passwordConfirm: Yub.string()
      .oneOf([Yub.ref("password"), null], "Passwords must much")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <Form>
          <h1>Sign up</h1>
          <TextField name="email" type="email" label="Email address" />
          <TextField name="password" type="password" label="Password" />
          <TextField
            name="passwordConfirm"
            type="password"
            label="Password confirmation"
          />
          <button className="btn btn-primary mt-3">Register now</button>
          <button
            className="btn btn-danger mt-3"
            type="reset"
            style={{ marginLeft: "1rem" }}
          >
            Reset
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
