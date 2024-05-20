import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../components/Layout";
import Basket from "../components/Pages/Basket";
import Fav from "../components/Pages/Fav";
import Home from "../components/Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/basket",
        element:<Basket/>
      },
      {
        path:"/fav",
        element:<Fav/>
      },
    ]
  },
]);

export default router