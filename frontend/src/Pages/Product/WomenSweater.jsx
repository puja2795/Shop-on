import { Checkbox, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../Components/Container/Layout'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { Subnav } from '../../Components/Navbar/Subnav'
import styles from "./WomenSweater.module.css"


export const WomenSweater = () => {

    const [data,setData] = useState([])



    useEffect(() => {
        // getSweaterData()
      },[])
  return (
    <>
        <Navbar />
        <Subnav />
        <Layout>
            <Text align={"left"} padding={"20px 0 0 20px"}>Women Western / Topwear / <span style={{fontSize:"20px", }}><u>Sweaters</u></span></Text>
            <Heading fontSize={"lg"} align={"left"} padding={"20px 0 0 50px"}><u>Filters</u></Heading>
            <div className={styles.mainDiv}>
                
                <div className={styles.filterDiv}>
                    <Stack>
                        <Text textAlign={"left"} fontSize='lg' fontWeight={"700"}>FABRIC</Text>
                        <Checkbox size='md' colorScheme='pink' >
                            Wool
                        </Checkbox>
                        <Checkbox size='md' colorScheme='pink' >
                            Cotton
                        </Checkbox>
                        <Checkbox size='md' colorScheme='pink' >
                            Fleence
                        </Checkbox>
                        <Checkbox size='md' colorScheme='pink' >
                            Acrylic
                        </Checkbox>
                        <Checkbox size='md' colorScheme='pink' >
                            Poly Cotton
                        </Checkbox>
                        <Checkbox size='md' colorScheme='pink' >
                            Cotton Blend
                        </Checkbox>
                    </Stack>
                    <Stack>
                        <Text textAlign={"left"} fontSize='lg' fontWeight={"700"} pt="20px">PATTERN</Text>
                        <Checkbox size='md' colorScheme='pink' >
                            Self Design / Knitted Design
                        </Checkbox>
                        <Checkbox size='md' colorScheme='pink' >
                            Solid
                        </Checkbox>
                        <Checkbox size='md' colorScheme='pink' >
                            Embroidered
                        </Checkbox>
                        <Checkbox size='md' colorScheme='pink' >
                            Printed
                        </Checkbox>
                    </Stack>
                    <Stack>
                        <Text textAlign={"left"} fontSize='lg' fontWeight={"700"} pt="20px">SLEEVE LENGTH</Text>
                        <Checkbox size='md' colorScheme='pink' >
                            Long Sleeve
                        </Checkbox>
                        <Checkbox size='md' colorScheme='pink' >
                            Short Sleeve
                        </Checkbox>
                        <Checkbox size='md' colorScheme='pink' >
                            Sleeveless
                        </Checkbox>
                        <Checkbox size='md' colorScheme='pink' >
                            Solid
                        </Checkbox>
                    </Stack>
                    

                </div>
                <div className={styles.itemDiv}>

                </div>
            </div>
        </Layout>
        <Footer />
    </>
  )
}
