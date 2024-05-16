import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Jungle from "./pages/Jungle";
import Welcome from "./pages/Welcome";
import About from "./pages/About";


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