import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setEmailActions,
  setTokenActions,
  setUserLoadingActions,
} from "../../store/userReducer";
import style from "./AuthForm.module.scss";

export const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordlDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email can't be empty");
  const [passwordError, setPasswordError] = useState("Password can't be empty");
  const [formValid, setFormValid] = useState(false);
  const [look, setLook] = useState(false);
  const [type, setType] = useState("password");

  const dispatch = useDispatch();

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 5) {
      setPasswordError("Password too short");
      if (!e.target.value) {
        setPasswordError("Password can't be empty");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        return 0;
    }
  };
  const sendUserData = () => {
    dispatch(setUserLoadingActions(true));
    dispatch(setEmailActions(email));

    setTimeout(() => dispatch(setTokenActions("1")), 2000);
  };

  const toggleHandler = () => {
    setLook((prev) => !prev);
    if (look) {
      setType("password");
    } else {
      setType("text");
    }
  };

  return (
    <div className={style.auth_wrapper}>
      <h1 className={style.title}>Registration</h1>
      <div className={style.input_group}>
        {emailDirty && emailError && (
          <div className={style.error}> {emailError} </div>
        )}
        <div className={style.wrapper}>
          <input
            onChange={(e) => emailHandler(e)}
            value={email}
            onBlur={(e) => blurHandler(e)}
            name="email"
            type="text"
            placeholder="Please enter your email"
          />
          {passwordlDirty && passwordError && (
            <div className={style.error}> {passwordError} </div>
          )}
        </div>
        <div className={style.wrapper}>
          <input
            className={style.password_input}
            onChange={(e) => passwordHandler(e)}
            value={password}
            onBlur={(e) => blurHandler(e)}
            name="password"
            type={type}
            placeholder="Please enter your password"
          />
          <div className={style.password_icon} onClick={toggleHandler}>
            {look ? (
              <img src="/img/svg/eye.svg" alt="cart" />
            ) : (
              <img src="/img/svg/no-eye.svg" alt="eye" />
            )}
          </div>
        </div>
      </div>
      <button
        className={style.btn}
        disabled={!formValid}
        onClick={() => {
          sendUserData();
        }}
      >
        Send
      </button>
    </div>
  );
};
