
import React from 'react'
import { Layout } from '../../Components/Container/Layout'
import styles from "./Home.module.css"
import { Heading, Image } from '@chakra-ui/react'

export const Home = () => {
  return (
    <Layout>
      <div className={styles["main-div"]}>
        <Image className={styles.imageClass} src='https://meesho-clone-ashokprjapati.vercel.app/header1.png'></Image>
        <Heading as='h2' size='2xl'>
          Top Categories To Choose From 
        </Heading>
        <Image className={styles.imageClass} src='https://meesho-clone-ashokprjapati.vercel.app/header3.png'></Image>
        <Image className={styles.imageClass} src='https://meesho-clone-ashokprjapati.vercel.app/header4.png'></Image>
        <Image className={styles.imageClass} src='https://meesho-clone-ashokprjapati.vercel.app/lastheader.png'></Image>
      </div>
    </Layout>
  )
}
