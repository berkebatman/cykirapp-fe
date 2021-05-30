import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Authentication from "../../services/Authentication";
import useForm from "../../effects/useForm";

let auth = new Authentication();

const Login = () => {
  const history = useHistory();
  const [invalidCredentialsError, setInvalidCredentialsError] = useState("");

  const {
    email,
    setEmail,
    emailErrorMessage,
    password,
    passwordErrorMessage,
    setPassword,
  } = useForm({
    email: {
      validation: (email) => {
        if (email === "") {
          return "Please enter your e-mail";
        }
      },
      initialValue: "",
    },
    password: {
      validation: (password) => {
        if (password === "") {
          return "Please enter your password";
        }
      },
      initialValue: "",
    },
  });

  const handleLogin = (event) => {
    event.preventDefault();
    auth
      .login({ email, password })
      .then(() => {
        history.push("/login-success");
      })
      .catch((err) => {
        setInvalidCredentialsError("Incorrect Email or Password");
      });
  };

  return (
    <>
      <div class="login-register-area pt-100 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-12 ml-auto mr-auto">
              <div class="login-register-wrapper">
                <div class="login-register-tab-list nav">
                  <a class="active" data-toggle="tab" href="#lg1">
                    <h4 style={{ fontSize: "35px" }}> login </h4>
                  </a>
                  <Link to="register">
                    <a data-toggle="tab" href="#lg2">
                      <h4> register </h4>
                    </a>
                  </Link>
                </div>
                <div class="tab-content">
                  <div id="lg1" class="tab-pane active">
                    <div class="login-form-container">
                      <div class="login-register-form">
                        <form action="#" method="post">
                          <input
                            type="email"
                            name="email"
                            placeholder="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            value={email}
                            required
                          />
                          {emailErrorMessage && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "12px",
                                "margin-top": "-7px",
                              }}
                            >
                              {emailErrorMessage}
                            </p>
                          )}
                          <input
                            type="password"
                            name="user-password"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            value={password}
                            required
                          />
                          {passwordErrorMessage && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "12px",
                                "margin-top": "-7px",
                              }}
                            >
                              {passwordErrorMessage}
                            </p>
                          )}
                          <div class="button-box">
                            <div class="login-toggle-btn">
                              <input type="checkbox" />
                              <label>Remember me</label>
                              <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit" onClick={handleLogin}> 
                              <span>Login</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div id="lg2" class="tab-pane">
                    <div class="login-form-container">
                      <div class="login-register-form">
                        <form action="#" method="post">
                          <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
                          />
                          <input
                            type="password"
                            name="user-password"
                            placeholder="Password"
                          />
                          <input
                            name="user-email"
                            placeholder="Email"
                            type="email"
                          />
                          <div class="button-box">
                            <button type="submit">
                              <span>Register</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
