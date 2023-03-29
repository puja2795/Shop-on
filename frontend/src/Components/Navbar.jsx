import { Box, Flex, Image, Text } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { useState } from "react";
// import styles from "../styles/Navbar.module.css";
import logo from "../Images/meeshoLogo.png"
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
// import DrawerComponent from "./Drawer";
// import PopupMen from "./PopupMen";
// import Popupwomen from "./Popupwomen";
// import Profile from "./Profile";
// import ResponsiveProfile from "./ResponsiveProfile";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupWomen, setPopupWomen] = useState(false);

  return (
    <Box width="100%" border={"1px solid blue"} 
    cursor={"pointer"}
    position={"sticky"}
    top="0px"
    zIndex={1000}
    margin={"auto"}
    display={"flex"}
    bg="#ffffff"
    // className={styles.desktop_navbar}
    >
      <Box
        border={"1px solid red"}
        margin={"auto"}
        display={"flex"}
        bg="#ffffff"
        // className={styles.desktop_navbar}
        width="85%"
        justifyContent={"space-between"}>
            <Box border={"1px solid black"} display={"flex"} justifyContent={"space-between"}> 
                <Link to="/">
                    <Box> 
                        <Image h="45px" src={logo} padding="15px 0px"/>
                    </Box>
                </Link>
                <Box>
                    <SearchBar />
                </Box>
            </Box>
        </Box>
    </Box>
  );
}
