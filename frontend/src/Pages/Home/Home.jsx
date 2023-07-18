import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/Container/Layout";
import styles from "./Home.module.css";
import {
  Button,
  Container,
  Divider,
  Grid,
  Heading,
  Image,
} from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Subnav } from "../../Components/Navbar/Subnav";
import axios from "axios";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

export const Home = () => {
  const [data, setData] = useState([]);
  let limit = 20;
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
    setPerPageProds(data.slice(start, end));
  }, [data, page]);

  useEffect(() => {
    setNumPages(Math.ceil(data.length / limit));
  }, [data]);

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

  console.log("FrontEndURL:", process.env);

  const getHomePageData = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/product?limit=200`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  return (
    <>
      <Navbar />
      <Subnav />
      <Layout>
        <div className={styles["main-div"]}>
          <Image
            className={styles.imageClass}
            // src="https://meesho-clone-ashokprjapati.vercel.app/header1.png"
            src="https://images-static.nykaa.com/creatives/0a2773dd-95a1-40ff-a93c-64cdd5f704e5/default.jpg?tr=w-1200,cm-pad_resize"
          ></Image>
          {/* <Heading as="h2" size="2xl">
            Top Categories To Choose From
          </Heading>
          <Image
            className={styles.imageClass}
            src="https://meesho-clone-ashokprjapati.vercel.app/header3.png"
          ></Image>
          <Image
            className={styles.imageClass}
            src="https://meesho-clone-ashokprjapati.vercel.app/header4.png"
          ></Image>
          <Image
            className={styles.imageClass}
            src="https://meesho-clone-ashokprjapati.vercel.app/lastheader.png"
          ></Image> */}
        </div>
        <Heading as="h2" size="2xl" pb={10}>
          ------- Products For You ------
        </Heading>
        <div className={styles.gridDiv}>
          <Grid
            templateColumns="repeat(auto-fill, 280px)"
            gap={6}
            margin={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {perPageProds?.map((el) => {
              return <SingleProduct key={el._id} el={el} />;
            })}
          </Grid>
          <Container
            maxW={"md"}
            gap={6}
            m={{ base: "1rem 11%", md: "2rem 35%" }}
          >
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
        </div>
      </Layout>
      <Footer />
    </>
  );
};
