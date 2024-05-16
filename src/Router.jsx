import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Jungle from "./components/pages/Jungle";
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About.jsx";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "",
                    element: <Welcome />,
                },
                {
                    path: "jungle",
                    element: <Jungle />,
                },
                {
                    path: "about",
                    element: <About />,
                }

            ]
        }

    ]
);

export default router;