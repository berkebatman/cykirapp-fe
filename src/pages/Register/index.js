/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import postUser from "../../services/User/postUser/index.js";
import useForm from "../../effects/useForm";

const Register = () => {
  const history = useHistory();

  const {
    firstName,
    setFirstName,
    firstNameErrorMessage,
    lastName,
    setLastName,
    lastNameErrorMessage,
    dateOfBirth,
    setDateOfBirth,
    dateOfBirthErrorMessage,
    email,
    setEmail,
    emailErrorMessage,
    password,
    passwordErrorMessage,
    setPassword,
    town,
    setTown,
    townErrorMessage,
    city,
    setCity,
    cityErrorMessage,
    phoneNumber,
    setPhoneNumber,
    phoneNumberErrorMessage,
  } = useForm({
    firstName: {
      validation: (firstName) => {
        if (firstName === "") {
          return "First name is required";
        }
      },
      initialValue: "",
    },
    lastName: {
      validation: (lastName) => {
        if (lastName === "") {
          return "Last name is required";
        }
      },
      initialValue: "",
    },
    dateOfBirth: {
      validation: (dateOfBirth) => {
        if (dateOfBirth === "") {
          return "Date of birth is required";
        }
      },
      initialValue: "",
    },

    email: {
      validation: (email) => {
        if (email === "") {
          return "e-mail is required";
        }
      },
      initialValue: "",
    },
    password: {
      validation: (password) => {
        if (password === "") {
          return "Password is required";
        }
      },
      initialValue: "",
    },
    town: {
      validation: (town) => {
        if (town === "") {
          return "Town is required";
        }
      },
      initialValue: "",
    },
    city: {
      validation: (city) => {
        if (city === "") {
          return "City is required";
        }
      },
      initialValue: "",
    },
    phoneNumber: {
      validation: (phoneNumber) => {
        if (phoneNumber === "") {
          return "Phone number is required";
        }
      },
      initialValue: "",
    },
  });

  const handleSignUp = (event) => {
    event.preventDefault();
    postUser({
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
      town,
      city,
      phoneNumber,
    })
      .then(() => {
        history.push("/register-success");
      })
      .catch((err) => console.log(err, "nope"));
  };

  return (
    <>
      <div class="login-register-area pt-100 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-12 ml-auto mr-auto">
              <div class="login-register-wrapper">
                <div class="login-register-tab-list nav">
                  <a data-toggle="tab" href="#lg1">
                    <Link to="login">
                      <h4> login </h4>
                    </Link>
                  </a>

                  <a class="active" data-toggle="tab" href="#lg2">
                    <h4 style={{ fontSize: "35px" }}> register </h4>
                  </a>
                </div>
                <div class="tab-content">
                  <div id="lg1" class="tab-pane">
                    <div class="login-form-container">
                      <div class="login-register-form">
                        <form action="#" method="post">
                          <input
                            id="first-name"
                            type="text"
                            name="first-name"
                            placeholder=""
                          />
                          <input
                            type="password"
                            name="user-password"
                            placeholder="Password"
                          />
                          <div class="button-box">
                            <div class="login-toggle-btn">
                              <input type="checkbox" />
                              <label>Remember me</label>
                              <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit">
                              <span>Login</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div id="lg2" class="tab-pane active">
                    <div class="login-form-container">
                      <div class="login-register-form">
                        <form action="#" method="post">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            required
                          />
                          {firstNameErrorMessage && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "12px",
                                "margin-top": "-7px",
                              }}
                            >
                              {firstNameErrorMessage}
                            </p>
                          )}
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            required
                          />
                          {lastNameErrorMessage && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "12px",
                                "margin-top": "-7px",
                              }}
                            >
                              {lastNameErrorMessage}
                            </p>
                          )}
                          <input
                            type="date"
                            name="dateOfBirth"
                            placeholder="Date of Birth"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            value={dateOfBirth}
                            required
                          />
                          {dateOfBirthErrorMessage && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "12px",
                                "margin-top": "-7px",
                              }}
                            >
                              {dateOfBirthErrorMessage}
                            </p>
                          )}
                          <input
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
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
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
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
                          <input
                            type="text"
                            name="town"
                            placeholder="Town"
                            onChange={(e) => setTown(e.target.value)}
                            value={town}
                            required
                          />
                         {townErrorMessage && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "12px",
                                "margin-top": "-7px",
                              }}
                            >
                              {townErrorMessage}
                            </p>
                          )}
                          <input
                            type="text"
                            name="city"
                            placeholder="City"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                            required
                          />
                          {cityErrorMessage && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "12px",
                                "margin-top": "-7px",
                              }}
                            >
                              {cityErrorMessage}
                            </p>
                          )}
                          <input
                            name="user-email"
                            placeholder="Phone Number"
                            type="text"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            required
                          />
                          {phoneNumberErrorMessage && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "12px",
                                "margin-top": "-7px",
                              }}
                            >
                              {phoneNumberErrorMessage}
                            </p>
                          )}
                          <div class="button-box">
                            <button type="submit"  onClick={handleSignUp}>
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

export default Register;
