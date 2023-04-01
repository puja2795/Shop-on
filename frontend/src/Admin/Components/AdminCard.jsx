import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/Admin.module.css"
import { AiFillStar } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"




const AdminCard = ({ image, title, price, rating, fabric, pattern, category }) => {

    return (
        <Box cursor={"pointer"} marginTop={"10px"} className={styles.Box_shadow} borderRadius="5px">
            <Stack>

                <Image margin={"auto"} mt="10px" w="220px" h="220px" src={image}></Image>

                <Text fontSize={'20px'} fontWeight={500}>{title.substring(0, 18)}...</Text>

                <Box display={"flex"} justifyContent="space-around">
                    <Heading fontSize={"18px"} fontWeight={500}>₹{price}</Heading>
                    <Button variant={"link"} className={styles.divButton} colorScheme="green" rightIcon={<AiFillStar />}>
                        <Text fontWeight={500} fontSize={'18px'}>
                            {rating}
                        </Text>
                    </Button>
                </Box>

                <Text fontSize={'14px'} fontWeight={500}>Fabric : {fabric}</Text>
                <Text fontSize={'14px'} fontWeight={500}>Pattern : {pattern}</Text>
                <Text fontSize={'14px'} fontWeight={500}>Category : {category}</Text>

                <Box display={"flex"} justifyContent="space-around">
                    <Button leftIcon={<MdModeEditOutline />} colorScheme={"pink"} variant="outline">Edit</Button>
                    <Button mb="10px" leftIcon={<AiFillDelete />} colorScheme={"red"} variant="outline">Delete</Button>
                </Box>

            </Stack >

        </Box >
    )
}

export default AdminCard