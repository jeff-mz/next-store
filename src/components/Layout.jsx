import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <main className="w-full">
      <NavBar />
      <div className=" container mx-auto p-4">{children}</div>
    </main>
  );
};

export default Layout;
