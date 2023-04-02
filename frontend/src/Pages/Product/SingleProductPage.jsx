import styles from "./SingleProductPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Subnav } from "../../Components/Navbar/Subnav";
import { Layout } from "../../Components/Container/Layout";
import { Button, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleProductPage = () => {
  const [selected, setSelected] = useState({});
  const prodID = localStorage.getItem("selected_product");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/product/${prodID}`)
      .then((res) => {
        setSelected(res.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Subnav />
      <Layout>
        <div className={styles.container}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "7%",
              gap: "5px",
            }}
          >
            <Image src={selected.image} height={"80px"} width={"80px"} />
            <Image src={selected.image} height={"80px"} width={"80px"} />
            <Image src={selected.image} height={"80px"} width={"80px"} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              gap: "5px",
              borderRadius: "10px",
            }}
          >
            <Image
              src={selected.image}
              height={"472px"}
              borderRadius={"10px"}
              border="1px solid gray"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Button
                width={"220px"}
                height={"40px"}
                variant={"outline"}
                border={"1px solid black"}
              >
                Add to Cart
              </Button>
              <Button
                width={"220px"}
                color={"white"}
                bgColor={"rgb(244, 51, 151)"}
                _hover={{ backgroundColor: "rgb(240, 51, 151)" }}
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div
            style={{
              width: "47%",
              borderRadius: "10px",
              border: "1px solid gray",
              padding: "15px",
              height: "470px",
            }}
          >
            <p style={{ textAlign: "left" }}>
              With so many different cosmetics brands, products, and items to
              choose from, it can be overwhelming when trying to find the right
              makeup for you. Sometimes it's nice to try out new products, but
              if you buy bad quality makeup that breaks you out, it's not very
              cost-effective. We are only concerned with the best products. We
              only stock up on the best makeup and skincare that won't damage
              your skin or make you break out. We have everything from
              foundations, makeup removers, concealers to primer, mascara, eye
              shadow, and lipsticks.
            </p>
            <Stack marginTop={"20px"}>
              <div style={{ textAlign: "left" }}>
                <Heading fontSize={"2xl"}>
                  ₹{selected.price}{" "}
                  <span
                    style={{ fontSize: "12px", color: "rgb(153, 153, 153)" }}
                  >
                    onwards
                  </span>
                </Heading>
              </div>
              <p style={{ textAlign: "left" }}>Free Delivery</p>
              <div style={{ display: "flex", height: "30px", gap: "6px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  <Text fontWeight={500} fontSize={"md"}>
                    {selected?.rating?.toFixed(1)}
                  </Text>
                  <AiFillStar />
                </div>
                <Text fontSize={"xs"} color={"gray.400"} pt={1} pb={8}>
                  {selected?.reviews}
                </Text>
              </div>
              <div style={{ display: "flex" }}>
                <Text fontWeight={500} fontSize={"md"}>
                  Fabric:
                </Text>
                <Text fontWeight={400} fontSize={"sm"} padding={"2px 0 0 5px"}>
                  {selected.fabric}
                </Text>
              </div>
              <div style={{ display: "flex" }}>
                <Text fontWeight={500} fontSize={"md"}>
                  Pattern:
                </Text>
                <Text fontWeight={400} fontSize={"sm"} padding={"2px 0 0 5px"}>
                  {selected.pattern}
                </Text>
              </div>
            </Stack>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SingleProductPage;
