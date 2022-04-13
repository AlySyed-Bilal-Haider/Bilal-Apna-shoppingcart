import * as Yup from "yup";
export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("email is required").email("Invalid email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Minimum length of password 8")
    .max(20, "Minimum length of password 20"),
  cpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  fname: Yup.string().required("Name is required"),
  lname: Yup.string().required("Name is required"),
  username: Yup.string().required("Name is required"),
});
