import { Box } from '@chakra-ui/react'
import React from 'react'
import AddProductComp from '../Components/AddProductComp'
import AdminSidebar from '../Components/AdminSidebar'

const AddProduct = () => {
  return (
    <AdminSidebar>
      <Box>
        <AddProductComp />
      </Box>
    </AdminSidebar>
  )
}

export default AddProduct