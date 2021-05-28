/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router";
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
              return "Number is required";
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
            history.push("/");
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
                    <h4 style={{fontSize:"35px"}}> register </h4>
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
                            name="user-name"
                            placeholder="Username"
                          />
                           <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
                          />
                           <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
                          />
                           <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
                          />
                           <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
                          />
                           <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
                          />
                           <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
                          />
                           <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
                          />
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

export default Register;
