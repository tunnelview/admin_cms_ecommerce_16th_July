import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SideMenu } from "../components/side-menu/SideMenu";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />
      <SideMenu />
      {/* mainbody */}
      <main className="main container">{children}</main>

      {/* footer */}
      <Footer />
    </div>
  );
};
