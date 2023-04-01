import { Box } from '@chakra-ui/react'
import React from 'react'
import { AdminNavbar } from '../Components/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'
import AdminProduct from './AdminProduct'

const Store = () => {
  return (
    <AdminSidebar>
      <Box>
          <AdminProduct />
      </Box>
    </AdminSidebar>
  )
}

export default Store