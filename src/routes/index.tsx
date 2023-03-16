// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
    createBrowserRouter,
  } from "react-router-dom";  
import MainPage from "../views/MainPage";
import Home from "../views/Home";
import About from "../views/About";

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
      ],
    },
  ]);

  export default router;