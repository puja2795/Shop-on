import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from 'react-router-dom';
import { getMensData } from '../../Redux/AminReducer/action';
import AdminCard from '../Components/AdminCard';
import CardSkeleton from '../Components/CardSkeleton';
import styles from "../Styles/Admin.module.css"

const AdminProduct = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const initialState = searchParams.get("productFor");
    const [val, setval] = useState(initialState || "men");


    let arr = new Array(100).fill(0);



    const store = useSelector((store) => {
        return store.adminReducer.mensData
    });
    const dispatch = useDispatch();

    let params = {
        productFor: val
    }


    useEffect(() => {
        setSearchParams(params);
        dispatch(getMensData(params));
    }, [val]);


    const loading = useSelector((store) => {
        return store.adminReducer.isLoading
    });

    console.log('store:', store);


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
                {loading && arr.map((el, i) => (
                    <CardSkeleton key={i} />
                ))}

                {store.map((el) => {
                    return <Box key={el._id}>
                        <AdminCard  {...el} />
                    </Box>
                })}

            </SimpleGrid>
        </Box >
    )
}

export default AdminProduct