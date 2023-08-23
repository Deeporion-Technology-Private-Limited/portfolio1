import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/authantication/Login";
import Signup from "../pages/authantication/Signup";
import ForgotPassword from "../pages/authantication/ForgotPassword";
import Home from "../components/Home";
import LoginTwo from "../pages/authantication/LoginTwo";

export default function Index() {
  // const isAuthenticated = true;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/LoginTwo" element={<LoginTwo />} />
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
        {/* <PrivateRoute exact path="/" component={Home} isAuthenticated={isAuthenticated} /> */}
      </Routes>
    </>
  );
}

// function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
//   return (
//     <Route {...rest} render={(props) => (
//       isAuthenticated ? <Component {...props} />
//     : <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />
//     )} />
//   );
// }
