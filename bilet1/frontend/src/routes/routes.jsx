import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Basket from "../components/Pages/Basket";
import Fav from "../components/Pages/Fav";
import Home from "../components/Pages/Home";
import Detail from "../components/Pages/Detail";
import Admin from "../components/Pages/AdminPanel";

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
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/fav",
        element: <Fav />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

export default router;
