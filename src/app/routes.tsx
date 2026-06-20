import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);
