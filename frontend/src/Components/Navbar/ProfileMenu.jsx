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
              <Link to="/login">
                <Text fontSize="17px" fontWeight={500}>
                  Login
                </Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/signup">
                <Text fontSize="17px" fontWeight={500}>
                  Signup
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
