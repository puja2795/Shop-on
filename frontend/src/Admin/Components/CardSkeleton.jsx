import React from "react";
import { Heading, Text, Stack, Image, Skeleton } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ el }) => {
    const navigate = useNavigate();

    return (
        <Skeleton

        // onClick={() => {
        //     localStorage.setItem("selected_product", el._id);
        //     navigate(`/products/${el._id}`);
        // }}
        >
            <Image src="https://images.meesho.com/images/products/131698194/gwrok_512.jpg" />
            <Stack pt={4}>
                <Text
                    fontSize={"16"}
                    fontWeight={500}
                    color={"rgb(153, 153, 153)"}
                    pt={1}
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, alias. Saepe quidem cupiditate dolores illo natus cumque
                </Text>
                <div>
                    <Heading fontSize={"2xl"}>
                        {/* ₹{el.price}{" "} */}
                        <span style={{ fontSize: "12px", color: "rgb(153, 153, 153)" }}>
                            onwards
                        </span>
                    </Heading>
                </div>
                <p>Free Delivery</p>
                <div style={{ display: "flex", height: "30px", gap: "6px" }}>
                    <div >
                        <Text fontWeight={500} fontSize={"md"}>
                            {el?.rating?.toFixed(1)}
                        </Text>
                        <AiFillStar />
                    </div>
                    <Text fontSize={"xs"} color={"gray.400"} pt={1} pb={8}>
                        {/* {el?.reviews?.split(",")[1]} */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore alias dolorem harum fugit dolores iste recusandae excepturi blanditiis quaerat, laboriosam magni, libero error ratione accusantium doloribus reiciendis suscipit. Soluta, repellendus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minus ratione dolores consequatur voluptate pariatur distinctio animi at, unde culpa nam vel beatae maxime numquam similique, ad adipisci doloribus ex.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore labore deleniti excepturi fugit, iure dolor voluptates eos, similique quidem fuga sed iste doloribus ducimus at tempora quasi eveniet est veniam.lorem
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, excepturi? Facilis assumenda asperiores quisquam vero a. Dicta, est quas reprehenderit cum quasi dolore, accusantium a deleniti atque porro ipsum rerum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloribus nemo neque, sunt sint earum harum quo cum? Unde eaque voluptatibus perferendis obcaecati, totam fugit minus inventore alias quibusdam libero?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati doloremque natus voluptatem minus. Deleniti minima recusandae commodi est nisi! Laboriosam porro culpa itaque praesentium ad totam, maiores ut eius.
                    </Text>
                </div>
            </Stack>
        </Skeleton>
    );
};

export default SingleProduct;
