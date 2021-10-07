import { Form, Formik } from "formik";
import React from "react";
import TextField from "./TextField";
import * as Yub from "yup";

const Signup = () => {
  const validate = Yub.object({
    email: Yub.string()
      .email("Must be valid email")
      .required("Email is required"),
    password: Yub.string()
      .min(6, "Password must be 7 chars long")
      .required("Password is required"),
    confPass: Yub.string()
      .oneOf([Yub.ref("password"), null], "Passwords must much")
      .required("Password confirmation is required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confPass: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="container">
          <h1>Sign up now</h1>

          <Form>
            <TextField label="Email address" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm password"
              name="confPass"
              type="password"
            />
            <button className="btn btn-primary mt-3"> Register </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
