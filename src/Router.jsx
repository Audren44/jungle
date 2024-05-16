import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Jungle from "./components/pages/Jungle";
import Welcome from "./components/pages/Welcome";

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
                }

            ]
        }

    ]
);

export default router;