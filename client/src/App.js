import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/dashboard/Dashboard";
import LoginPage from "./Pages/login/LoginPage";
import RegisterPage from "./Pages/registration.jsx/RegisterPage";
import {
  getTomorrowReservations,
  sendReservationReminderMail,
} from "./setup/reservationService";

function App() {
  const [currUser, setCurrUser] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const setCurrentUser = () => {
    return sessionStorage.getItem("login_user");
  };

  const sendReminderEmails = async () => {
    const res = await getTomorrowReservations();
    if (res.length != 0) {
      res.forEach((element) => {
        console.log(element);
        //sendReservationReminderMail(element);
      });
    }
  };

  useEffect(() => {
    sendReminderEmails();
    const user = setCurrentUser();

    console.log(user);
    if (user) {
      console.log("im in");
      setCurrUser(user);
      setIsLogin(true);
    }
  }, []);

  return (
    // <Routes>
    //   <Route path="/register" element={<RegisterPage />} />
    //   <Route path="/login" element={<LoginPage />} />
    //   <Route path="dashboard/*" element={<Dashboard />} />
    // </Routes>
    <>
      {isLogin && (
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      )}

      {!isLogin && (
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
