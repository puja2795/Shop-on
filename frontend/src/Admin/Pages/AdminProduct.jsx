import { Box, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getMensData } from '../../Redux/AminReducer/action';
import AdminCard from '../Components/AdminCard';
import { AdminNavbar } from '../Components/AdminNavbar';

const AdminProduct = () => {

    const Menstore = useSelector((store) => {
        return store.adminReducer.mensData
    });
    const dispach = useDispatch();


    useEffect(() => {
        dispach(getMensData())
    }, []);


    // console.log('Menstore:', Menstore)

    return (
        <Box mt="10px">
            <AdminNavbar />
            <SimpleGrid mt="20px" columns={{ base: 1, sm: 2, md: 2, lg: 4, xl: 4, "2xl": 4 }} spacing={8} >
                {Menstore && Menstore.map((el) => (
                    <Box key={el.image}>
                        <AdminCard {...el} />
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default AdminProduct