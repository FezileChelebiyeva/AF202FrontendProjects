import { Helmet } from "react-helmet";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { usersValidationSchema } from "../../components/form-schema/login/schema/index.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Space } from "antd";

const LogInPage = () => {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => setUsersData(response.data));
  }, []);

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: usersValidationSchema,
      onSubmit: (values) => {
        let checkUsers = usersData.some(
          (element) =>
            element.name == values.username &&
            element.password == values.password
        );
        // console.log(checkUsers);
        checkUsers ? navigate("/users-page") : setErrorStatus(true);
        resetForm();
      },
    });
  return (
    <div className="page-login">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Log in</title>
        <link rel="canonical" href="http://login.com" />
      </Helmet>
      <h1>Login to Your Account</h1>
      <div id="log-in">
        <div className="form">
          <form id="form-login" onSubmit={handleSubmit}>
            <div style={{ color: "red" }} className="error-text">
              {errorStatus && (
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Alert
                    // message="Error"
                    description="User Not Found!"
                    type="error"
                    showIcon
                  />
                 </Space>
              )}
            </div>
            <div className="input-control">
              <p>
                <label htmlFor="username" className="m-2">
                  Name<span style={{ color: "red", fontSize: "16px" }}>*</span>
                </label>
              </p>
              <input
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
                value={values.username}
                placeholder="Username"
              />
              {errors.username && touched.username && (
                <div
                  style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "5px 0 5px 3px",
                  }}
                >
                  {errors.username}
                </div>
              )}
            </div>
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

            <div className="btn">
              <button type="submit" className="btn btn-success mt-2">
                Submit
              </button>
            </div>
            <div className="new-account">
              <p>Need an Account?</p>
              <Link to={"/sign-up-page"}>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
