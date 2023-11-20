import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Email is required")
    .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid Email"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters")
    .required("Password is required"),
});
