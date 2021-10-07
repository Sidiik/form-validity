import { useField, ErrorMessage } from "formik";
import React from "react";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mt-3">
      <label htmlFor={field.name}> {label} </label>
      <input
        {...props}
        {...field}
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
      />
      <ErrorMessage name={field.name} />
    </div>
  );
};

export default TextField;
