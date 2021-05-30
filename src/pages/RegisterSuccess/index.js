/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import postUser from "../../services/User/postUser/index.js";
import useForm from "../../effects/useForm";

const RegisterSuccess = () => {

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
                       <h3 style={{textAlign: "center"}}>Registration Successful!</h3>
                       <Link to="/login">
                        <h5 style={{textAlign: "center", color: "#a749ff"}} >Login to continue</h5>
                        </Link>
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

export default RegisterSuccess;
