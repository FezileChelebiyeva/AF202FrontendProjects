import * as Yup from "yup";

export const usersValidationSchema = Yup.object({
  name: Yup.string()
    .required("Please enter a name")
    .min(5, "must use min 5 characters!"),
  surname: Yup.string()
    .required("Please enter a surname")
    .matches(/^([A-Za-z]*)$/gi, "Surname can only contain letters."),
  password: Yup.string()
    .required("Please enter a password")
    .min(8, "must use min 8 characters!")
    .max(16, "must use max 16 characters!"),
  country: Yup.string().required("Please select a country"),
  city: Yup.string().required("Please select a city"),
});
