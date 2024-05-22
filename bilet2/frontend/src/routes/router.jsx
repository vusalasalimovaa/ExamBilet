import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Pages/Home";
import Admin from "../components/Pages/AdminPanel";
import CreateMenu from "../components/Pages/AdminPanel/CreateMenu";
import DetailMenu from "../components/Pages/AdminPanel/DetailMenu";
import EditMenu from "../components/Pages/AdminPanel/EditMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/create",
    element: <CreateMenu />,
  },
  {
    path: "/detail/:id",
    element: <DetailMenu />,
  },
  {
    path: "/edit/:id",
    element: <EditMenu />,
  },
]);

export default router;
