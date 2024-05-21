import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Pages/Home";
import Admin from "../components/Pages/AdminPanel";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            }

        ]
    },
    {
        path:"/admin",
        element:<Admin/>
    }
]);

export default router