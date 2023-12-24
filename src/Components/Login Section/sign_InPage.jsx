import React from "react";
import Header from "./header";
import Button from "../button";
import InputBox from "../input";
import * as image from "../../assets/images/images";
import { auth } from "../../fireBase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { DataContext } from "../../router/router";
import { validation } from "./regular expression";
import "../../assets/css/sign_in.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorDialog from "./errordailoge";
import {  useDispatch } from 'react-redux'
import { isAuthenticated,isNotAuthenticated } from "../../redux/authSlice";

const SignInpage = () => {
  const {
    email,
    setEmail,
    pass,
    setPass,
    emailerror,
    setMailerror,
    passerror,
    setPasserror,
    // auths,
    // setAuth
  } = useContext(DataContext);
  const dispatch = useDispatch()
  const [error, setError] = useState("");
  const [vibility,setVisibility] =useState("visibility_off");
  const navigate = useNavigate();
  const halndeUser = (e) => {
    setEmail(e.target.value);
    validation(setPasserror, pass,setMailerror, email); 
    console.log(">>>>>>>",email);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
    validation(setPasserror, pass,setMailerror, email); 
    console.log(passerror);
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
        dispatch(isAuthenticated())
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        // dispatch(isNotAuthenticated)
        console.log(errorCode, errorMessage);
      });
  };
  const signUp = () => {
    navigate("/signup");
  };
  const closeError = () => {
    setError("");
  };
  const visibilityfun = () =>{
    {vibility == "visibility"?
    setVisibility("visibility_off")
    :
    setVisibility("visibility")
   }
    
    
  }

  return (
    <div className="Sign-IN">
      <div className="Spotlight">
        <h1 className="spotImg">
          <img src={image?.loginHero1} alt="hero" />
        </h1>
        <div className="sign_inForm">
          <div className="sign_in_section">
            <h1 className="title"> Sign in Page</h1>
            <div className="section1">
              <Button
                style="Google"
                image={image?.googlelogo}
                buttontxt="Continue With Google"
              />
              <Button
                style="Twitter"
                image={image.twitterLogo}
                buttontxt="Continue with Twitter"
              />
            </div>
            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-text">or</div>
              <div className="divider-line"></div>
            </div>
            <div className="section2">
              <div className="username-holder">
                <p className="label">User name or e-mail address</p>
                <InputBox type="email" style="username" onChange={halndeUser} />
                {email && <p className="error">{emailerror}</p>}
              </div>

              <div className="password-holder">
                <div className="label">
                  <p>Password</p> <span onClick={visibilityfun} class="material-symbols-outlined">{vibility}</span>
                </div>
                <InputBox
                  type={vibility == "visibility"?
                        "text"
                        : "password"
                       }
                  style="password"
                  onChange={handlePass}
                />
                <div className="sublabel">
                  {pass && <p className="error">{passerror}</p>}
                  <p className="forget_pass">Forget your Password ?</p>
                </div>
              </div>
            </div>
            <div className="section3">
              <Button style="sign_in_btn" buttontxt="Sign in" btnfun={signIn} />
              <p className="signup">
                Dont have an account? <span onClick={signUp}>Signup</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {error && <ErrorDialog errmsg={error} closeFun={closeError} />}
    </div>
  );
};
export default SignInpage;
