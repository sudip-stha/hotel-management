import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Guest from "./components/main/Guest.tsx";
import Deal from "./components/main/Deal.tsx";
import Room from "./components/main/Room.tsx";
import Rate from "./components/main/Rate.tsx";
import FrontDesk from "./components/main/FrontDesk.tsx";
import Dashboard from "./components/main/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/guest",
        element: <Guest />,
      },
      {
        path: "/deal",
        element: <Deal />,
      },
      {
        path: "/room",
        element: <Room />,
      },
      {
        path: "/rate",
        element: <Rate />,
      },
      {
        path: "/front-desk",
        element: <FrontDesk />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
