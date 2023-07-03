// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
    createBrowserRouter,
  } from "react-router-dom";  
import MainPage from "../views/MainPage";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact_me",
          element: <Contact />,
        },
      ],
    },
  ]);

  export default router;