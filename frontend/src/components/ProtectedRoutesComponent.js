import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LoginPage from "../pages/LoginPage";

const ProtectedRoutesComponent = ({ admin }) => {
  const [isAuth, setIsAuth] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axios.get("/api/get-token").then((data) => {
      if (data.data.token) {
        setIsAuth(data.data.token);
        setIsAdmin(data.data.admin); // Assuming admin status is available in data
      }
    });
  }, []);

  if (isAuth === undefined) return <LoginPage />;

  return isAdmin ? (
    <>
      {admin && <Navigate to="/login" />} {/* Redirect admin to login */}
      <Outlet />
    </>
  ) : (
    <>
      {!admin && <UserChatComponent />} {/* Show UserChatComponent for non-admin users */}
      <Outlet />
    </>
  );
};

export default ProtectedRoutesComponent;
