import HomePage from "../pages/home";
import TeamPage from "../pages/teams";

import Root from "./Root";

import { Navigate, createBrowserRouter } from "react-router-dom";

const pageArray = [
  { path: "/home", element: <HomePage /> },
  { path: "/team", element: <TeamPage /> },
];

const router = createBrowserRouter([
  { element: <Root />, children: pageArray },
  { path: "/", element: <Navigate replace to="/" /> },
  { path: "*", element: <Navigate replace to="/" /> },
]);

export default router;
