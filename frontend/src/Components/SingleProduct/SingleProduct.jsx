import React from "react";
import { Heading, Text, Stack, Image } from "@chakra-ui/react";
import styles from "./SingleProduct.module.css";
import { AiFillStar } from "react-icons/ai";

const SingleProduct = ({ el }) => {
  return (
    <div className={styles["main-div"]}>
      <Image src={el.image} className={styles.divImage}></Image>
      <Stack pt={4}>
        <Text
          fontSize={"16"}
          fontWeight={500}
          color={"rgb(153, 153, 153)"}
          pt={1}
        >
          {el.title.charAt(0).toUpperCase() + el.title.substring(1, 16)}
          {/* {el.title > 25 ? "..." : ""} */}
        </Text>
        <div className={styles.divRating}>
          <Heading fontSize={"2xl"}>
            ₹{el.price}{" "}
            <span style={{ fontSize: "12px", color: "rgb(153, 153, 153)" }}>
              onwards
            </span>
          </Heading>
        </div>
        <p className={styles.freeD}>Free Delivery</p>
        <div style={{ display: "flex", height: "30px", gap: "6px" }}>
          <div className={styles.divButton}>
            <Text fontWeight={500} fontSize={"md"}>
              {el.rating.toFixed(1)}
            </Text>
            <AiFillStar />
          </div>
          <Text fontSize={"xs"} color={"gray.400"} pt={1} pb={8}>
            {el.reviews.split(",")[1]}
          </Text>
        </div>
      </Stack>
    </div>
  );
};

export default SingleProduct;
