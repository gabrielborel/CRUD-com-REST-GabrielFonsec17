import React from "react";
import ReactDOM from "react-dom/client";
import CreatePost from "./pages/CreatePost";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ListPosts from "./pages/List";
import EditPost from "./pages/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/create",
        element: <CreatePost />,
      },
      {
        path: "/",
        element: <ListPosts />,
      },
      {
        path: "/post/:id/edit",
        element: <EditPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
