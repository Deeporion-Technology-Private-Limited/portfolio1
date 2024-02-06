import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import OurServices from "../pages/OurServices";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contactus";
import StyleGuide from "../StyleGuide";
import Layout from "../components/common/Layout";
import BlogDescription from "../components/blogs/BlogDescription";
import Page404 from "../components/common/Page404";

export const RouteLayout = () => {
  const unprotectedRoutes = [
    {
      path: "/",
      component: Home,
      name: "home",
    },

    {
      path: "/blogs",
      component: Blogs,
      name: "blogs",
    },

    {
      path: "/blogDescription",
      component: BlogDescription,
      name: "blogDescription",
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
      component: Page404,
      name: "404Page",
    },

    {
      path: "/style-guide",
      component: StyleGuide,
      name: "styleGuide",
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
