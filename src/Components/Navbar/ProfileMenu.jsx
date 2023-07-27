import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [token,setToken] = React.useState(null);
  const [name, setName] = React.useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
  }
 

 React.useEffect(()=>{
  setToken( localStorage.getItem("token"));
  setName(localStorage.getItem("name"));
 },[])


  return (
    <Menu>
      <MenuButton variant="link" onMouseEnter={() => setIsOpen(true)}>
        <Text fontSize="17px" fontWeight={500}>
          {token && name ? `${name.split(" ")[0]}` : "Profile"}
        </Text>
      </MenuButton>
      <MenuList onMouseLeave={() => setIsOpen(false)}>
        {isOpen && (
          <>
            <MenuItem background = {name && token ? "rgb(244, 51, 151)" : null }>
              <Link to="/userLogin">
                <Text fontSize="17px" fontWeight={500} onClick={handleLogout}  >
                 {name && token ? "Logout" : "User Login"}
                </Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/userSignup">
                <Text fontSize="17px" fontWeight={500}>
                  User Signup
                </Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminSignup">
                <Text fontSize="17px" fontWeight={500}>
                  Admin Signup
                </Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminLogin">
                <Text fontSize="17px" fontWeight={500}>
                  Admin Login
                </Text>
              </Link>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
