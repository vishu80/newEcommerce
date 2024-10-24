import React, { lazy, Suspense } from "react";
import { createBrowserRouter, CreateBrowserRouter } from "react-router-dom";
import { Headers } from "../Headers/Headers";
import { Body } from "../Body/Body";
import About from "../Headers/About";
import App from "../../App";
import Contact from "../Headers/Contact";
import { Error } from "../Error/Error";
import Shimmer from "../Shimmer/index.js";
import { Grocery } from "../Grocery/Grocery.js";
import { Cart } from "../Cart/Cart.js";
import { Signup } from "../Headers/Signup.js";
const LazyLoading = lazy(() => import("../../Components/Body/Menudetails.js"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: <Grocery />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Login",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <LazyLoading />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  }
  
]);
