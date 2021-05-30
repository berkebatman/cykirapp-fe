/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import postUser from "../../services/User/postUser/index.js";
import useForm from "../../effects/useForm";

const LoginSuccess = () => {

  return (
    <>
      <div class="login-register-area pt-100 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-12 ml-auto mr-auto">
              <div class="login-register-wrapper">
              
                <div class="tab-content">
                  <div id="lg2" class="tab-pane active">
                    <div class="login-form-container">
                      <div class="login-register-form">
                       <h3 style={{textAlign: "center"}}>Login Successful!</h3>
                       <Link to="/products">
                        <h5 style={{textAlign: "center", color: "#a749ff"}} >View Products</h5>
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

export default LoginSuccess;
