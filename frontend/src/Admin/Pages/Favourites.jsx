import { Box } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'

const Favourites = () => {
  return (
    <AdminSidebar>
      <Box w="100%" h="2000px" border={"1px solid red"}>
        <h1>Favourites</h1>
      </Box>
    </AdminSidebar>
  )
}

export default Favourites