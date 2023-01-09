import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home";
import Event from "./pages/EventPage/Event";
import Faq from "./pages/FaqPage/Faq";
import Contact from "./pages/Contact/Contact";
import SingleEvent from "./pages/SingleEvent/SingleEvent";
import About from "./pages/About/About";
import FormRender from "./pages/FormRender/FormRender";
import Admin from "./pages/Admin/Admin";
import SponsorForm from "./pages/SponsorForm/SponsorForm";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Event />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/event/:id",
        element: <SingleEvent />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  {
    path: "/sponsor_us",
    element: <SponsorForm />,
  },
  {
    path: "/event/reg/:id",
    element: <FormRender />,
  },
]);

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
