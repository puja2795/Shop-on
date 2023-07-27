import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/Container/Layout";
import Navbar from "../../Components/Navbar/Navbar";
import { Subnav } from "../../Components/Navbar/Subnav";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "@chakra-ui/react";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import { Grid, Heading, Text } from "@chakra-ui/react";
import Footer from "../../Components/Footer/Footer";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import axios from "axios";

export const LayoutHeading = ({ productFor }) => {
  return (
    <>
      <Text fontSize={"30px"} fontWeight={700} textAlign={"left"}>
        {productFor?.charAt(0).toUpperCase() + productFor?.slice(1, 15)}
      </Text>
      <Text textAlign={"left"}>Showing 1-20 out of 10000 products</Text>
    </>
  );
};

export const AllProduct = () => {
  const { products, productFor } = useSelector((store) => {
    return store.productReducer;
  });

  let limit = 12;
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [perPageProds, setPerPageProds] = useState([]);
  const [showBtns, setShowBtns] = useState([]);
  const [startBtn, setStartBtn] = useState(1);
  const [endBtn, setEndBtn] = useState(7);

  const makeListFunc = () => {
    let lis = [];
    for (let i = startBtn; i <= endBtn; i++) {
      lis.push(i);
    }
    setShowBtns(lis);
  };

  useEffect(() => {
    makeListFunc();
  }, [numPages, startBtn]);

  useEffect(() => {
    let end = limit * page;
    let start = end - limit;
    setPerPageProds(products.slice(start, end));
  }, [products, page]);

  useEffect(() => {
    setNumPages(Math.ceil(products.length / limit));
  }, [products]);

  const pageHandler = (value) => {
    setPage(value);
  };

  const nextHandler = () => {
    setPage(page + 1);
    if (page >= 6) {
      setStartBtn(startBtn + 1);
      setEndBtn(endBtn + 1);
    }
  };

  const prevHandler = () => {
    setPage(page - 1);
    if (page > 6) {
      setStartBtn(startBtn - 1);
      setEndBtn(endBtn - 1);
    }
  };

 
  
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
          <Grid
            templateColumns="repeat(auto-fill, 230px)"
            gap={4}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {perPageProds.map((el) => {
              return <SingleProduct key={el.id} el={el} />;
            })}
          </Grid>
        </div>
        <Container maxW={"md"} gap={6} m={{ base: "1rem 11%", md: "2rem 35%" }}>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={prevHandler}
            isDisabled={page == 1}
          >
            <FcPrevious color="#fc2779" />
          </Button>
          {showBtns.map((el) => {
            return (
              <Button
                backgroundColor={page == el ? "#fc2779" : "gray"}
                borderRadius="50%"
                color="white"
                key={el}
                onClick={() => {
                  pageHandler(el);
                }}
              >
                {el}
              </Button>
            );
          })}

          <Button
            colorScheme="teal"
            variant="outline"
            onClick={nextHandler}
            isDisabled={endBtn == numPages}
          >
            <FcNext color="#fc2779" />
          </Button>
        </Container>
      </Layout>
      <Footer />
    </>
  );
};
