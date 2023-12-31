import React from "react";
import LoginPageComponent from "./components/LoginPageComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReduxUserState } from "../redux/actions/userActions";

const loginUserApiRequest = async (email, password, doNotLogout) => {
  const { data } = await axios.post("/api/users/login", { email, password, doNotLogout });
  if (data.userLoggedIn.doNotLogout) localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
  else sessionStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
  return data;
};

const LoginPage = () => {
  const reduxDispatch = useDispatch();

  return (
    <div style={mainPageStyle}>
      <LoginPageComponent loginUserApiRequest={loginUserApiRequest} reduxDispatch={reduxDispatch} setReduxUserState={setReduxUserState} />
    </div>
  );
};

const mainPageStyle = {
  background: "linear-gradient(to bottom, #FF5733, #FF8C00, #FFD700)", // Adjust gradient colors as needed
  minHeight: "100vh",
};

export default LoginPage;
