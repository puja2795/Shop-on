import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Menu>
      <MenuButton variant="link" onMouseEnter={() => setIsOpen(true)}>
        <Text fontSize="17px" fontWeight={500}>
          Profile
        </Text>
      </MenuButton>
      <MenuList onMouseLeave={() => setIsOpen(false)}>
        {isOpen && (
          <>
            <MenuItem>
              <Link to="/userLogin">
                <Text fontSize="17px" fontWeight={500}>
                  User Login
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
