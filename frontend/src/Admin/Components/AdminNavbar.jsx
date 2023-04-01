import React from 'react'
import { Box, Text } from "@chakra-ui/react"
import styles from "../Styles/Admin.module.css"
import { useDispatch } from 'react-redux'



export const AdminNavbar = () => {

    // const dispatch = useDispatch()

    // const handleMenclick = () => {
    //     dispatch()
    // }

    return (
        <Box cursor={"pointer"} display="flex" justifyContent={"space-between"}>
            <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Men</Text>
            <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Women</Text>
            <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Kids</Text>
            <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Home & Kitchen</Text>
            <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Beauty & Health</Text>
            <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Jewellery & Accessories</Text>
            <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Bags & Footwear</Text>
            <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Electronics</Text>
        </Box>
    )
}
