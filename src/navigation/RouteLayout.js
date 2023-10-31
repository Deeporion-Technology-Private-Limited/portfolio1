import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import OurServices from "../pages/OurServices";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contactus";
import Login from "../pages/authantication/Login";
import AuthGuard from "../pages/authantication/AuthGuard";
import Dashboard from "../pages/PrivatePages/Dashboard";
import Page404 from "../components/NoPage";
import Layout from "../components/Layout";

export const RouteLayout = () => {
  const unprotectedRoutes = [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/services",
      component: OurServices,
      name: "OurServices",
    },

    {
      path: "/about",
      component: AboutUs,
      name: "AboutUs",
    },

    {
      path: "/contact",
      component: Contact,
      name: "ContactUs",
    },

    {
      path: "*",
      component: Page404, // Add 404 component
      name: "404Page",
    },
  ];

  const protectedRoutes = [
    {
      path: "/dashboard",
      name: "dashboard",
      component: {
        admin: Page404,
        employee: Dashboard,
        client: Page404,
      },
      role: ["employee", "admin", "client"],
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {unprotectedRoutes.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              name={obj.name}
              Component={obj.component}
            />
          ))}
          {protectedRoutes.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              name={obj.name}
              element={
                <AuthGuard Component={obj.component} roleList={obj.role} />
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
