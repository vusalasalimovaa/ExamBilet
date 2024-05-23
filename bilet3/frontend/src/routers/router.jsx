import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Pages/Home";
import Basket from "../components/Pages/Basket";
import Fav from "../components/Pages/Fav";
import Admin from "../components/Pages/AdminPanel";
import CreateMenu from "../components/Pages/AdminPanel/CreateMenu";
import Detail from "../components/Pages/AdminPanel/DetailPage";
import Edit from "../components/Pages/AdminPanel/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/basket",
        element: <Basket/>,
      },
      {
        path: "/fav",
        element: <Fav/>,
      },
    ]
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/add",
    element: <CreateMenu/>,
  },
  {
    path: "/detail/:id",
    element: <Detail/>,
  },
  {
    path: "/edit/:id",
    element: <Edit/>,
  }
]);

export default router;
