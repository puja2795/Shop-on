import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Layout } from '../Components/Container/Layout'

export const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log("loaded");
    }, 3000)
  }, [])
  return (
    <Layout>

    <div>
    Home

    </div>
    </Layout>
  )
}
