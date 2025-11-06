import React from "react";
import MainHeader from "../components/MainHeader";
import { NavLink, Outlet } from "react-router-dom";
import PostsLists from "../components/PostsLists";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
