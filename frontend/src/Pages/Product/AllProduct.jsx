import React from "react";
import { Layout } from "../../Components/Container/Layout";
import Navbar from "../../Components/Navbar/Navbar";
import { Subnav } from "../../Components/Navbar/Subnav";
import Sidebar from "./Sidebar";

export const AllProduct = () => {
  return (
    <>
      <Navbar />
      <Subnav />
      <Layout hasSidebar={true} sideBar={<Sidebar />}>
        <div>
          <h2></h2>
        </div>
      </Layout>
    </>
  );
};
