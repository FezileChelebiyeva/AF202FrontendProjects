import * as Yup from "yup";

export const usersValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Please enter a username")
    .min(5, "must use min 5 characters!")
    .max(10, "must use max 10 characters!"),
  password: Yup.string()
    .required("Please enter a password")
    .min(8, "must use min 8 characters!")
    .max(16, "must use max 16 characters!"),
});
5;
