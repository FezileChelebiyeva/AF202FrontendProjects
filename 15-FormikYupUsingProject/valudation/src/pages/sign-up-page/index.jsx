import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../../assets/sass/main.scss";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { uid } from "uid";
import { usersValidationSchema } from "../../components/form-schema/sign-up/schema/index.js";
import { useFormik } from "formik";

const SignUpPage = () => {
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        password: "",
        replayPassword: "",
        country: "",
        city: "",
      },
      validationSchema: usersValidationSchema,
      onSubmit: (values) => {
        axios.post("http://localhost:8000/users", values);
        // console.log(values);
        resetForm();
      },
    });

  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountryData(response.data));
  }, []);

  return (
    <div className="page-signup">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign up</title>
        <link rel="canonical" href="http://signup.com" />
      </Helmet>
      <h1>Sign Up</h1>
      <div id="sign-up">
        <div className="form-signup">
          <form id="form-signup" onSubmit={handleSubmit}>
            <div className="row">
              <div className="left">
                <div className="input-control">
                  <p>
                    <label htmlFor="name" className="m-2">
                      Name
                      <span style={{ color: "red", fontSize: "16px" }}>*</span>
                    </label>
                  </p>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    placeholder="Name"
                  />
                  {errors.name && touched.name && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.name}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="surname" className="m-2">
                      Surname
                      <span style={{ color: "red", fontSize: "16px" }}>*</span>
                    </label>
                  </p>
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    onChange={handleChange}
                    value={values.surname}
                    placeholder="Surname"
                  />
                  {errors.surname && touched.surname && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.surname}
                    </div>
                  )}
                </div>
              </div>
              <div className="right">
                <div className="input-control">
                  <p>
                    <label htmlFor="password" className="m-2">
                      Password
                      <span style={{ color: "red", fontSize: "16px" }}>*</span>
                    </label>
                  </p>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                    placeholder="Password"
                  />
                  {errors.password && touched.password && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.password}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="replayPassword" className="m-2">
                      Replay Password
                      <span style={{ color: "red", fontSize: "16px" }}>*</span>
                    </label>
                  </p>
                  <input
                    id="replayPassword"
                    name="replayPassword"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                    placeholder="Replay Password"
                  />
                  {errors.replayPassword && touched.replayPassword && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.replayPassword}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="for-select">
              <div className="select-country">
                <select
                  id="country"
                  name="country"
                  onChange={handleChange}
                  value={values.country}
                >
                  <option value="Country">Country</option>
                  {countryData.map((element) => {
                    return (
                      <option key={uid()} value={element.name}>
                        {element.name}
                      </option>
                    );
                  })}
                </select>
                {errors.country && touched.country && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.country}
                  </div>
                )}
              </div>

              <div className="select-city">
                <select
                  id="city"
                  name="city"
                  onChange={handleChange}
                  value={values.city}
                >
                  <option value="City">City</option>
                  {countryData.map((element) => {
                    if (values.country == element.name) {
                      values.city = element?.capital;
                    }
                    return (
                      <option key={uid()} value={element?.capital}>
                        {element?.capital}
                      </option>
                    );
                  })}
                </select>
                {errors.city && touched.city && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.city}
                  </div>
                )}
              </div>
            </div>
            <div className="btn">
              <button type="submit" className="btn btn-success mt-2">
                Submit
              </button>
            </div>
            <div className="have-account">
              <p>Already a User?</p>
              <Link to={"/"}>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
