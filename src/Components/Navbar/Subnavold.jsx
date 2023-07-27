import React, { useState } from 'react'
import "./Subnav.module.css"
import { Dropdown, Dropdown1, Dropdown2, Dropdown3, Dropdown4, Dropdown5, Dropdown6, Dropdown7, Dropdown8 } from './Dropdown'
import { Text, Flex } from '@chakra-ui/react'

export const Subnav = ({ display = "flex" }) => {
  const [dropdown, setdropdown] = useState(false);
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const [dropdown3, setdropdown3] = useState(false);
  const [dropdown4, setdropdown4] = useState(false);
  const [dropdown5, setdropdown5] = useState(false);
  const [dropdown6, setdropdown6] = useState(false);
  const [dropdown7, setdropdown7] = useState(false);
  const [dropdown8, setdropdown8] = useState(false);
  
  return (
    <div className="subnav" >
        {/* <div className={styles.subItem}>Women Ethnic</div>
        <div className={styles.subItem} >Women Western</div>
        <div className={styles.subItem} >Men</div>
        <div className={styles.subItem} >Kids</div>
        <div className={styles.subItem} >Home & Kitchen</div>
        <div className={styles.subItem} >Beauty & Health</div>
        <div className={styles.subItem} >Jewellery & Accessories</div>
        <div className={styles.subItem} >Bags & Footwear</div>
        <div className={styles.subItem} >Electronics</div> */}

        <nav className={"nav_2"}>
          <Flex
            maxWidth="100%"
            alignItems="center"
            gap="10"
            justify={"center"}
            fontWeight={"semibold"}
            display={display}
          >
            <Text
              onMouseEnter={() => setdropdown(true)}
              onMouseLeave={() => setdropdown(false)}
            >
              Women Ethnic
            </Text>

            <Text
              onMouseEnter={() => setdropdown1(true)}
              onMouseLeave={() => setdropdown1(false)}
            >
              Women Western
            </Text>
            <Text
              onMouseEnter={() => setdropdown2(true)}
              onMouseLeave={() => setdropdown2(false)}
            >
              Men
            </Text>
            <Text
              onMouseEnter={() => setdropdown3(true)}
              onMouseLeave={() => setdropdown3(false)}
            >
              Kids
            </Text>
            <Text
              onMouseEnter={() => setdropdown4(true)}
              onMouseLeave={() => setdropdown4(false)}
            >
              Home & Kitchen
            </Text>
            <Text
              onMouseEnter={() => setdropdown5(true)}
              onMouseLeave={() => setdropdown5(false)}
            >
              Beauty & Health
            </Text>
            <Text
              onMouseEnter={() => setdropdown6(true)}
              onMouseLeave={() => setdropdown6(false)}
            >
              {" "}
              Jewellery & Accessories
            </Text>
            <Text
              onMouseEnter={() => setdropdown7(true)}
              onMouseLeave={() => setdropdown7(false)}
            >
              Bags & Footwear
            </Text>

            <Text
              onMouseEnter={() => setdropdown8(true)}
              onMouseLeave={() => setdropdown8(false)}
            >
              Electronics
            </Text>
          </Flex>
        </nav>
        {dropdown ? <Dropdown setdropdown={setdropdown} /> : null}
        {dropdown1 ? <Dropdown1 setdropdown1={setdropdown1} /> : null}
        {dropdown2 ? <Dropdown2 setdropdown2={setdropdown2} /> : null}
        {dropdown3 ? <Dropdown3 setdropdown3={setdropdown3} /> : null}
        {dropdown4 ? <Dropdown4 setdropdown4={setdropdown4} /> : null}
        {dropdown5 ? <Dropdown5 setdropdown5={setdropdown5} /> : null}
        {dropdown6 ? <Dropdown6 setdropdown6={setdropdown6} /> : null}
        {dropdown7 ? <Dropdown7 setdropdown7={setdropdown7} /> : null}
        {dropdown8 ? <Dropdown8 setdropdown8={setdropdown8} /> : null}
    </div>
  )
}
