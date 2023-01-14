import * as yup from "yup";

export let validate = yup.object().shape({
  nickname: yup
    .string()
    .matches(/^[a-zA-Z0-9]{4,20}$/, "Nickname must have 4-20 characters")
    .required(),
  fullname: yup
    .string()
    .matches(/^[a-zA-Z0-9 ]{8,70}$/, "Fullname must have at least 8 characters")
    .required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer()
    .min(15, "User must have at least 15 years old")
    .max(80, "User must have at most 80 years old"),
  email: yup.string().email("Invalid email").required("Email is required"),
  start_date: yup.date().default(function () {
    return new Date();
  }),
  type_category: yup.string().required(),
  password: yup
    .string()
    .matches(/^(?=.{8,16}$)/, "Must have 8-16 characters")
    .matches(/^(?=.*[a-z])/, "Must have lowercase letters")
    .matches(/^(?=.*[A-Z])/, "Must have uppercase letters")
    .matches(/^(?=.*\d)/, "Must have numbers")
    .matches(/^(?=.*[@$!%*#?&.])/, "Must have special characters (@$!%*#?&.)")
    .required("Enter a password"),
  passwordConfirmed: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});
