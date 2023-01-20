import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  function onClickHandler(){
    localStorage.setItem("isAuth", false);
    console.log("isAuth set to false");
    logout({ returnTo: window.location.origin });
  }

  return (
    <button onClick={onClickHandler}>
      Log Out
    </button>
  );
};

export default LogoutButton;