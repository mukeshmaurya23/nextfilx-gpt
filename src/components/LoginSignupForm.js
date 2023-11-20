import React, { useState } from "react";
import { useFormik } from "formik";
import { formValidationSchema } from "../validation/Schema";
import * as Yup from "yup";
const HelperText = ({ touched, error }) => {
  return touched && error ? (
    <p className="text-errorColor text-[14px] mt-1">{error}</p>
  ) : null;
};

const LoginSignupForm = () => {
  const [isSignupForm, setIsSignupForm] = useState(false);
  const toggleForm = () => {
    setIsSignupForm(!isSignupForm);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //if clikc on handleubmit then it will check the validation

  const handleSubmit = () => {
    if (!formik.dirty && !formik.isValid)
      return formik.setFieldTouched({
        fullName: true,
        email: true,
        password: true,
      });
    console.log(formik.values, "values");
    formik.handleSubmit();
    formik.resetForm();
  };
  return (
    <form className="absolute rounded bg-black flex flex-col top-[20%] left-0 right-0 mx-auto w-[30%] height-[50dvh] p-14 bg-opacity-80 ">
      <h2 className="text-white px-2 text-formHeading font-formHeadingBold">
        {isSignupForm ? "Sign Up" : "Login"}
      </h2>
      {isSignupForm && (
        <>
          <input
            type="text"
            placeholder="Full Name"
            className={`bg-[#333333] ${
              formik.touched.fullName ? "border-b-2 border-errorColor " : ""
            } rounded space-y-5 text-white px-6 py-3 mt-4 text-defaultFont focus:outline-none font-defaultBold`}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            name="fullName"
            onChange={formik.handleChange}
          />
          <HelperText
            touched={formik.touched.fullName}
            error={formik.errors.fullName}
          />
        </>
      )}
      <input
        type="text"
        name="email"
        placeholder="Email or Phone number"
        className={`bg-[#333333] ${
          formik.touched.email ? "border-b-2 border-errorColor " : ""
        } rounded space-y-5 text-white px-6 py-3 mt-4 text-defaultFont focus:outline-none font-defaultBold`}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      <HelperText touched={formik.touched.email} error={formik.errors.email} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onBlur={formik.handleBlur}
        value={formik.values.password}
        onChange={formik.handleChange}
        className={`bg-[#333333] ${
          formik.touched.password ? "border-b-2 border-errorColor " : ""
        } rounded space-y-5 text-white px-6 py-3 mt-4 text-defaultFont focus:outline-none font-defaultBold`}
      />
      <HelperText
        touched={formik.touched.password}
        error={formik.errors.password}
      />
      <button
        className="bg-primary px-4  py-3 text-white text-defaultFont leading-8 rounded-md mt-[3rem] mb-[5rem] font-defaultBold"
        type="button"
        onClick={handleSubmit}
      >
        {isSignupForm ? "Sign Up" : "Login"}
      </button>
      <p className="text-white text-[14px] tracking-wide ">
        {isSignupForm ? "Already a user?" : "New to Netflix?"}
        <span className="text-primary cursor-pointer" onClick={toggleForm}>
          {isSignupForm ? "Sign In Now." : "Sign Up Now."}
        </span>
      </p>

      <p className="text-white text-[14px] mt-3 tracking-wide">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <span className="text-primary cursor-pointer">Learn more.</span>
      </p>
    </form>
  );
};

export default LoginSignupForm;
