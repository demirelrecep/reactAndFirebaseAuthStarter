import React, { useContext, useCallback, useState } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import app from "../../../firebase/firebaseConfig";
import { PetContext } from "../../../context/petContext";
import "./Login.scss";
import Button from "./../Elements/Button/Button";
import Input from "../Elements/Input/Input";

const Login = () => {
  const [mailValue, setMailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const { currentUser } = useContext(PetContext);
  
  const inputChangeHandler = (e) => {
    switch (e.target.type) {
      case "email":
        setMailValue(e.target.value)
        break;
      case "password":
        setPasswordValue(e.target.value)
        break;
      default:
        break;
    }
  }

  const handleLogin = async () => {
    const email = mailValue;
    const password = passwordValue;

    try {
      await app.auth().signInWithEmailAndPassword(email, password);  
    } catch (error) {
      console.log(error);
    }
  }

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="full-page-bg">
      <div className="login">
        <span className="login__title mb-20">Log in</span>

        <Input type="email" placeHolder="Email" onChangeFunction={inputChangeHandler}></Input>
        <Input type="password" placeHolder="Password" onChangeFunction={inputChangeHandler}></Input>
        <Button text="Log in" onClickFunction={handleLogin}></Button>
        
        <span className="login__message mb-10">Don't have an account yet?</span>
        <Link className="login__register-link" to="/register">Register Now!</Link>
        <Link></Link>
      </div>
    </div>
  );
};

export default withRouter(Login);
