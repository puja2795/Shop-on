import React, { useEffect } from "react";
import { Layout } from "../../Components/Container/Layout";
import Navbar from "../../Components/Navbar/Navbar";
import { Subnav } from "../../Components/Navbar/Subnav";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";

import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import { Grid, Heading, Text } from "@chakra-ui/react";

export const LayoutHeading = ({ productFor }) => {
  return (
    <>
      <Text fontSize={"30px"} fontWeight={700} textAlign={"left"}>
        {productFor.charAt(0).toUpperCase() + productFor.slice(1, 15)}
      </Text>
      <Text textAlign={"left"}>Showing 1-20 out of 10000 products</Text>
    </>
  );
};

export const AllProduct = () => {
  const { products, productFor } = useSelector((store) => {
    return store.productReducer;
  });

  return (
    <>
      <Navbar />
      <Subnav />
      <Layout
        hasSidebar={true}
        sideBar={<Sidebar />}
        heading={<LayoutHeading productFor={productFor} />}
      >
        <div>
          <Grid templateColumns="repeat(auto-fill, 230px)" gap={4}>
            {products.map((el) => {
              return <SingleProduct key={el._id} el={el} />;
            })}
          </Grid>
        </div>
      </Layout>
    </>
  );
};
