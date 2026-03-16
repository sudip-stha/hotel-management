import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Guest from "./components/section/guest/Guest.tsx";
import Deal from "./components/section/Deal.tsx";
import Room from "./components/section/room/Room.tsx";
import Rate from "./components/section/Rate/Rate.tsx";
import FrontDesk from "./components/section/frontDesk/FrontDesk.tsx";
import Dashboard from "./components/section/dashboard/Dashboard.tsx";
import { AppRoutes } from "./data/routes.ts";

const router = createBrowserRouter([
  {
    path: AppRoutes.home,
    element: <App />,
    children: [
      {
        path: AppRoutes.dashboard,
        element: <Dashboard />,
      },
      {
        path: AppRoutes.guest,
        element: <Guest />,
      },
      {
        path: AppRoutes.deal,
        element: <Deal />,
      },
      {
        path: AppRoutes.room,
        element: <Room />,
      },
      {
        path: AppRoutes.rate,
        element: <Rate />,
      },
      {
        path: AppRoutes.forntDesk,
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
