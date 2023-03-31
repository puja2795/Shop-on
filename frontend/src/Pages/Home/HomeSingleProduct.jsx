import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Flex,
  } from '@chakra-ui/react';
  import styles from "./HomeSingleProduct.module.css"
  import {AiFillStar} from "react-icons/ai"
  
export const HomeSingleProduct = ({el}) => {
  return (
    <div className={styles["main-div"]}>
        <Image src={el.image} className={styles.divImage}></Image>
        <Stack pt={10}>
            <Heading fontSize={'lg'} color={'gray.500'} pt={1}>{el.title.substring(0, 25)}...</Heading>
            <div className={styles.divRating}>
                <Heading fontSize={"2xl"}>₹{el.price}</Heading>
                <button className={styles.divButton}>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={500} fontSize={'md'}>
                            {el.rating}
                        </Text>
                        <AiFillStar />
                    </Stack>
                </button>
            </div>
            <Heading fontSize={'lg'} color={'gray.600'} pt={1}>Fabric: {el.fabric}</Heading>
            <Heading fontSize={'md'} color={'gray.400'} pt={1} pb={8}>{el.reviews}</Heading>
        </Stack>
    </div>
  )
}
