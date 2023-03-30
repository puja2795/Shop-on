import { Flex, Box } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css";
export const Dropdown = ({ setdropdown }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
    //   zIndex={1}
      width={"80%"}
      m="52px auto 0 auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown(true)}
      onMouseLeave={() => setdropdown(false)}
      color="black"
      p="20px"
      rounded="md"
      left={"10%"}
      bg="#fff"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <Link href={""}>All Women Ethnic</Link>
          </li>
          <li>
            <Link href={"/products"}>View All</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={""}>Sarees</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>All Sarees</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Silk Sarees</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Cotton Silk Sarees</Link>
          </li>
          <li>
            <Link href={""}>Cotton Sarees</Link>
          </li>

          <li>
            <Link href={""}>Georgette Sarees</Link>
          </li>
          <li>
            <Link href={""}>Chiffon Sarees</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Kurtis</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>All Kurtis</Link>
          </li>
          <li>
            <Link href={""}>Anarkali Kurtis</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Rayon Kurtis</Link>
          </li>
          <li>
            <Link href={""}>Cotton Kurtis</Link>
          </li>

          <li>
            <Link href={""}>Embroidered Kurtis</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Kurta Set</Link>
          </li>
          <li>
            <Link href={""}>All Kurta Sets</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={""}>Suits & Dress Material</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>All Suits & Dress Material</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Cotton Suits</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Embroidered Suits</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Chanderi Suits</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Other Ethnic</Link>
          </li>
          <li>
            <Link href={""}>Blouses</Link>
          </li>
          <li>
            <Link href={""}>Dupattas</Link>
          </li>
          <li>
            <Link href={""}>Lehanga</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Gown</Link>
          </li>
          <li>
            <Link href={""}> Bottomwear</Link>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown1 = ({ setdropdown1 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1}
      width={"80%"}
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown1(true)}
      onMouseLeave={() => setdropdown1(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
      left={"10%"}
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <Link href={""}>Topwear</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Tops</Link>
          </li>
          <li>
            <Link href={""}>Dresses</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Sweaters</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>JumpSuits</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Bottomwear</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Jeans</Link>
          </li>
          <li>
            <Link href={""}>Jeggings</Link>
          </li>

          <li>
            <Link href={""}>Palazzos</Link>
          </li>
          <li>
            <Link href={""}>Shorts</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Skirts</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Innerwear</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Bra</Link>
          </li>
          <li>
            <Link href={""}>Briefs</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Sleepwear</Link>
          </li>
          <li>
            <Link href={""}>Nightsuits</Link>
          </li>
          <li>
            <Link href={""}>Babydolld</Link>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown2 = ({ setdropdown2 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown2(true)}
      onMouseLeave={() => setdropdown2(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <Link href={""}>Topwear</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>All Top Wear</Link>
          </li>
          <li>
            <Link href={""}>Tshirts</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Shirts</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={""}>Bottomwear</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Track Pants</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Jeans</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Trousers</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Men Accessories</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>All Men Accessories</Link>
          </li>
          <li>
            <Link href={""}>Anarkali Kurtis</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Watches</Link>
          </li>
          <li>
            <Link href={""}>Belts</Link>
          </li>
          <li>
            <Link href={""}>Wallets</Link>
          </li>
          <li>
            <Link href={""}>Jewellery</Link>
          </li>
          <li>
            <Link href={""}>Sunglasses</Link>
          </li>
          <li>
            <Link href={""}>Bags</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={""}>Men Footwear</Link>
          </li>
          <li>
            <Link href={""}>Casual Shoes</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Sports Shoes</Link>
          </li>
          <li>
            <Link href={""}>Sandals</Link>
          </li>
          <li>
            <Link href={""}>Formal Shoes</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={""}>Ethnic Wear</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Men Kurtas</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Ethnic Jackets</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Inner & Sleep Wear</Link>
          </li>
          <li>
            <Link href={""}>All Inner & Sleep Wear</Link>
          </li>
          <li>
            <Link href={""}>Vests</Link>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown3 = ({ setdropdown3 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown3(true)}
      onMouseLeave={() => setdropdown3(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <Link href={""}>Boys & Girls 2+ Years</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Dresses</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={""}>Infant 0-2 Years</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Rompers</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Toys and Accessories</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Soft Toys</Link>
          </li>
          <li>
            <Link href={""}>Footwear</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Stationery</Link>
          </li>
          <li>
            <Link href={""}>Watches</Link>
          </li>

          <li>
            <Link href={""}>Bags & Backpacks</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Baby Care</Link>
          </li>
          <li>
            <Link href={""}>All Baby Care</Link>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown4 = ({ setdropdown4 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown4(true)}
      onMouseLeave={() => setdropdown4(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <Link href={""}>Home Furnishing</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Bedsheets</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Dormats</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Curtains & Cushion Covers</Link>
          </li>
          <li>
            <Link href={""}>Mattress Protectors</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Home Decor</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>All Home Decor</Link>
          </li>
          <li>
            <Link href={""}>Stickers</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Clocks</Link>
          </li>
          <li>
            <Link href={""}>Showpieces</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href={""}>Kitchen & Dining</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Kitchen Storage</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Cookware & Bakeware</Link>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown5 = ({ setdropdown5 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown5(true)}
      onMouseLeave={() => setdropdown5(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <Link href={""}>Make up</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Face</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Eyes</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Lips</Link>
          </li>
          <li>
            <Link href={""}>Nails</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Wellness</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Sanitizers</Link>
          </li>
          <li>
            <Link href={""}>Oral Care</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Feminine Hygiene</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Skincare</Link>
          </li>
          <li>
            <Link href={""}>Deodorants</Link>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown6 = ({ setdropdown6 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown6(true)}
      onMouseLeave={() => setdropdown6(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <Link href={""}>Jewellery</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Jewellery Set</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Earrings</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Mangalsutras</Link>
          </li>
          <li>
            <Link href={""}>Studs</Link>
          </li>

          <li>
            <Link href={""}>Bangles</Link>
          </li>
          <li>
            <Link href={""}>Necklaces</Link>
          </li>
          <li>
            <Link href={""}>Rings</Link>
          </li>
          <li>
            <Link href={""}>Anklets</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Women Accessories</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Bags</Link>
          </li>
          <li>
            <Link href={""}>Watches</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Hair Accessories</Link>
          </li>
          <li>
            <Link href={""}>Sunglasses</Link>
          </li>

          <li>
            <Link href={""}>Socks</Link>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown7 = ({ setdropdown7 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown7(true)}
      onMouseLeave={() => setdropdown7(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <Link href={""}>Women Bags</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>All Women Bags</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Handbags</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Clutches</Link>
          </li>
          <li>
            <Link href={""}>Slingbags</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Men Bags</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>All Men Bags</Link>
          </li>
          <li>
            <Link href={""}>Men Wallets</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href={""}>Men Footwear</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Sport Shoes</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Casual Shoes</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Formal Shoes</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Sandals</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Women Footwear</Link>
          </li>
          <li>
            <Link href={""}>Flats</Link>
          </li>
          <li>
            <Link href={""}>Bellies</Link>
          </li>
          <li>
            <Link href={""}>Juttis</Link>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown8 = ({ setdropdown8 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown8(true)}
      onMouseLeave={() => setdropdown8(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <Link href={""}>Mobile & Accessories</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>All Mobile & Accessories</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Smartwatches</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>Mobile Holders</Link>
          </li>
          <li>
            <Link href={""}>Mobile cases and covers</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link href={""}>Appliances</Link>
          </li>
          <li>
            {" "}
            <Link href={""}>All Appliances</Link>
          </li>
          <li>
            <Link href={""}>Grooming</Link>
          </li>

          <li>
            <Link href={""}>Home Appliances</Link>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
