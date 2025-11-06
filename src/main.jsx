import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import NewPost from "./components/NewPost";
import RootLayout from "./layouts/RootLayout";
import MainHeader from "./components/MainHeader";
import PostsLists from "./components/PostsLists";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="create-post" element={<NewPost />} />
      </Route>
    </>
  )
);

// const router = createBrowserRouter([
//   {path:"/" , element:<RootLayout />},
//   { path: "/", element: <App /> },
//   { path: "create-post", element: <NewPost /> },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
