import React, { useContext, useCallback, useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import app from "../../../firebase/firebaseConfig";
import { PetContext } from "../../../context/petContext";
import "./Register.scss";
import Button from "./../Elements/Button/Button";
import Input from "../Elements/Input/Input";


const Register = () => {
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [mailValue, setMailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");


  const { currentUser } = useContext(PetContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  const handleRegister = async () => {
    const name = nameValue;
    const surname = surnameValue;

    const email = mailValue;
    const password = passwordValue;

    
    try {
      await app.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        var user = app.auth().currentUser;
        user.updateProfile({
          displayName: `${name} ${surname}`,
        }).then(() => {
          // Update successful.
        }).catch((error) => {
          console.log(error);
        });

        console.log(user);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const inputChangeHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameValue(e.target.value)
        break;
      case "surname":
        setSurnameValue(e.target.value)
        break;
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

  return (
    <div className="full-page-bg">
      <div className="register">
        <span className="register__title mb-20">Register</span>

        <Input type="text" placeHolder="Name" onChangeFunction={inputChangeHandler} name="name"></Input>
        <Input type="text" placeHolder="Surname" onChangeFunction={inputChangeHandler} name="surname"></Input>

        <Input type="email" placeHolder="Email" onChangeFunction={inputChangeHandler} name="email"></Input>
        <Input type="password" placeHolder="Password" onChangeFunction={inputChangeHandler} name="password"></Input>
        <Button text="Register" onClickFunction={handleRegister}></Button>

        <span className="login__message mb-10">Go back to login page</span>
        <Link className="login__register-link" to="/register">Login Page</Link>

      </div>
    </div>
  );
};

export default withRouter(Register);
