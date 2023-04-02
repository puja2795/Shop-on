import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from 'react-router-dom';
import { getMensData } from '../../Redux/AminReducer/action';
import AdminCard from '../Components/AdminCard';
import styles from "../Styles/Admin.module.css"

const AdminProduct = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const initialState = searchParams.get("productFor");
    const [val, setval] = useState(initialState || "men");


    const store = useSelector((store) => {
        return store.adminReducer.mensData
    });
    const dispatch = useDispatch();

    let params = {
        productFor: val
    }


    useEffect(() => {
        setSearchParams(params);
        dispatch(getMensData(params))
    }, [val]);


    // console.log('store:', store);


    return (
        <Box mt="10px">
            {/* Admin Navbar */}

            <Box cursor={"pointer"} display="flex" justifyContent={"space-between"}>
                <Text onClick={() => { setval("men"); dispatch(getMensData(val)) }} className={styles.nav_text} fontSize={"16px"} fontWeight="600">Men</Text>
                <Text onClick={() => { setval("women"); dispatch(getMensData(val)) }} className={styles.nav_text} fontSize={"16px"} fontWeight="600">Women</Text>
                <Text onClick={() => { setval("kids"); dispatch(getMensData(val)) }} className={styles.nav_text} fontSize={"16px"} fontWeight="600">Kids</Text>
                <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Home & Kitchen</Text>
                <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Beauty & Health</Text>
                <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Jewellery & Accessories</Text>
                <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Bags & Footwear</Text>
                <Text className={styles.nav_text} fontSize={"16px"} fontWeight="600">Electronics</Text>
            </Box>

            {/* Select Box */}

            <Box>

            </Box>


            {/* Show Data */}
            <SimpleGrid mt="20px" columns={{ base: 1, sm: 2, md: 2, lg: 4, xl: 4, "2xl": 4 }} spacing={8} >
                {store && store.map((el) => (
                    <Box key={el.image}>
                        <AdminCard {...el} />
                    </Box>
                ))}
            </SimpleGrid>
        </Box >
    )
}

export default AdminProduct