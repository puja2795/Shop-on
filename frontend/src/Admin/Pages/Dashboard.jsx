import { Box } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'

const Dashboard = () => {
  return (
    <AdminSidebar>
      <Box w="100%" h="2000px" border={"1px solid red"}>
        <h1>Dasboard</h1>
      </Box>
    </AdminSidebar>
  )
}

export default Dashboard