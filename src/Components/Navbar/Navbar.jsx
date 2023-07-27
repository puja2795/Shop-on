import React from "react";
import styles from "./Navbar.module.css";
import { Image, Text } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { FaMobileAlt, FaRegUser } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import shop_on_logo from '../../Images/shop_on_logo.png'

const Navbar = () => {
  return (
    <div className={styles.container}   >
      <div className={styles.logoDiv} style={{ alignItems: "center"}}>
        <Link to="/">
          <Image
            // h="38px"
            // src="https://cdn.hevodata.com/customer/logo/8c76f62bd88177a78bb6e2810a244446.png"
            src={shop_on_logo}
            width={'300px'}
            mixBlendMode={"multiply"}
          />
        </Link>
        <SearchBar />
      </div>
      <div className={styles["profile-div"]}>
        <div
          className={styles["right-item"]}
          style={{ padding: "0 25px", borderRight: "2px solid #EDE8E8" }}
        >
          <FaMobileAlt size={"20px"} />
          <Text fontSize="17px" fontWeight={500}>
            Download App
          </Text>
        </div>
        <div
          className={styles["right-item"]}
          style={{ borderRight: "2px solid #EDE8E8" }}
        >
          <Text fontSize="17px" fontWeight={500}>
            Become a Supplier
          </Text>
        </div>
        <div className={styles["right-item"]}>
          <div className={styles["icon-div"]}>
            <FaRegUser size={"20px"} />
            <ProfileMenu />
          </div>
          <Link to="/cart">
            <div className={styles["icon-div"]}>
              <BiCart size={"25px"} />
              <Text fontSize="17px" fontWeight={500}>
                Cart
              </Text>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
