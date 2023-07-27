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
      .get(`https://laravel1.bisplindia.in/ecom-backend-api/public/products`)
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
            src="https://www.papayaclothing.com/upload/banner/Sale_032923.png?ver=03292023221951"
          ></Image>
          <Heading as="h2" size="2xl">
            Top Categories To Choose From
          </Heading>
          <Image
            className={styles.imageClass}
            src="https://i.pinimg.com/736x/c3/46/37/c34637acf3eed4a16436e1177f23c559.jpg"
          ></Image>
          <Image
            className={styles.imageClass}
            src="https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg"
          ></Image>
          <Image
            className={styles.imageClass}
            src="https://www.papayaclothing.com/upload/banner/Sale_032923.png?ver=03292023221951"
          ></Image>
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
          {/* <Container
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
          </Container> */}
        </div>
      </Layout>
      <Footer />
    </>
  );
};
