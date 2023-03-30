import React from 'react'
import { Layout } from '../../Components/Container/Layout'
import { useEffect } from 'react'

export const AllProduct = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log("loaded");
    }, 3000)
  }, [])
  return (
    <Layout>
        <div>AllProduct</div>
    </Layout>
  )
}
