import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.scss";
import Root from "./routes/Root";

import Register from "./pages/Register";
import Login from "./pages/Login";
import AddCocktail from "./pages/AddCocktail";
import AllCocktails from "./pages/AllCocktails";
import RandomCocktail from "./pages/RandomCocktail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/add",
        element: <AddCocktail />,
      },
      {
        path: "/all",
        element: <AllCocktails />,
      },
      {
        path: "/generator",
        element: <RandomCocktail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
