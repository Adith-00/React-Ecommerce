import React from "react";
import Button from "../button";
import InputBox from "../input";
import * as image from "../../assets/images/images";
import "../../assets/css/sign-Up/signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireBase";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../router/router";
import { useContext, useState } from "react";
import ErrorDialog from "./errordailoge";
import { validation } from "./regular expression";

const SignUppage = () => {
  const { email, setEmail, pass, setPass,emailerror, setMailerror,passerror,setPasserror } = useContext(DataContext);
  const [error, setError] = useState("");
  const [vibility,setVisibility] =useState("visibility_off");

   const navigate = useNavigate()

  const userHandler = (e) => {
    setEmail(e.target.value);
    validation(setPasserror, pass,setMailerror, email); 
    console.log(email);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
    validation(setPasserror, pass,setMailerror, email); 
    console.log(pass);
  };
  const closeError = () => {
    setError("");
  };
  const login = () => {
    navigate("/")
  }
  const signUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("created");
           navigate("/home")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        console.log(error);
      });
  };
  const visibilityfun = () =>{
    {vibility == "visibility"?
    setVisibility("visibility_off")
    :
    setVisibility("visibility")
   }
  }

  return (
    <div className="Sign-up">
      <div className="Spotlight">
        <h1 className="spotImg">
          <img src={image?.loginHero2} alt="hero" />
        </h1>
        <div className="sign_upForm">
          <div className="sign_up_section">
            <h1 className="title"> Sign Up</h1>
            <p className="subtitle">
              Sign up for free to access to in any of our products
            </p>
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

            <div className="section2">
              <div className="username-holder">
                <p className="label">Email Address</p>
                <InputBox
                  type="email"
                  style="username"
                  onChange={userHandler}
                />
                {email && <p className="errorlabel">{emailerror}</p>}
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
                  onChange={passHandler}
                />
                <p className="errorlable"></p>
                <p className="sublabel">
                {pass? <p className="errorlabel">{passerror}</p>:<p className="slabel"> Use 8 or more characters with a mix of letters, numbers &
                  symbols</p>}
                </p>
              </div>
              <div className="checkboxes">
                <div className="itm">
                  <InputBox type="checkbox" />
                  <p>
                    Agree to our <span>Terms of use</span> and
                    <span>Privacy Policy</span>
                  </p>
                </div>
                <div className="itm">
                  <InputBox type="checkbox" />
                  <p>Subscribe to our monthly newsletter</p>
                </div>
              </div>
            </div>
            <div className="section3">
              <Button style="sign_up_btn" buttontxt="Sign up" btnfun={signUp} />
              <p className="signup">
                Already have an account? <span onClick={login}>Log in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {error && <ErrorDialog errmsg={error} closeFun={closeError} />}
    </div>
  );
};
export default SignUppage;
