import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  function onClickHandler(){
    localStorage.setItem("isAuth", true);
    console.log("isAuth set to true");

    loginWithRedirect();
  }

  return <button onClick={onClickHandler}>Log In</button>;
};

export default LoginButton;