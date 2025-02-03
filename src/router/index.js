import { Navigate } from "react-router-dom";
import React from "react";

// 懒加载
const Home = React.lazy(() => import("@/views/home/Home"));
const Entire = React.lazy(() => import("@/views/entire/Entire"));
const Detail = React.lazy(() => import("@/views/detail/Detail"));

const routes = [
  {
    path: "",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
];

export default routes;
