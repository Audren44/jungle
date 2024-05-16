import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Jungle from "./pages/Jungle";
import Welcome from "./pages/Welcome";

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