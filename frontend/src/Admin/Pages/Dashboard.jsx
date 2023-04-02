import React, { useEffect } from "react";
import AdminSidebar from "../Components/AdminSidebar";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Td,
  Table,
  TableContainer,
  Tbody,

  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../Components/UserCard";
import { getMensData, getUsersData } from "../../Redux/AminReducer/action";

let arr = new Array(10).fill(0);

function Dashboard() {

  const userData = useSelector((store) => {
    return store.adminReducer.user
  });

  const isLoading = useSelector((store) => {
    return store.adminReducer.isLoading
  });

  const store = useSelector((store) => {
    return store.adminReducer.mensData
  });


  const dispatch = useDispatch();


  const handleDelete = () => {

  }

  useEffect(() => {
    dispatch(getUsersData());
    dispatch(getMensData({}))
  }, []);

  // console.log('userData:', userData)
  // console.log('store:', store)

  return (
    <AdminSidebar heading={"Dashboard"}>
      <Box>
        <Box>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Admin</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Box>

      <Box>
        <Box
          mt={"25px"}
          border={"1px solid re"}
          display={"grid"}
          gridTemplateColumns={"repeat(3,1fr)"}
          justifyContent={"space-between"}
          gap={"25px"}
        >
          <Box

            display={"flex"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
            }
            bg={"#fff"}
            border={"1px solid gre"}
            borderRadius={"15px"}
          >
            <Box
              border={"1px solid blu"}
              display={"flex"}
              justifyContent={"center"}
              w={"50%"}
            >
              <Image
                w={"80%"}
                src="https://www.canadianginsengfarm.com/wp-content/uploads/2018/03/Product-Icon.png"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>Total Products</Text>
              <Text fontSize={"2xl"}>
                {store.length}
              </Text>
            </Box>
          </Box>
          <Box

            display={"flex"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
            }
            bg={"#fff"}
            border={"1px solid gre"}
            borderRadius={"15px"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              marginTop="10px"
              marginRight={"50px"}
              ml="10px"
              h="120px"
            >
              <Image
                src="https://tradelandnh.com/wp-content/uploads/2018/10/A.png"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>Total Orders</Text>
              <Text fontSize={"2xl"}>2</Text>
            </Box>
          </Box>
          <Box

            display={"flex"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
            }
            bg={"#fff"}
            border={"1px solid gre"}
            borderRadius={"15px"}
          >
            <Box
              border={"1px solid blu"}
              display={"flex"}
              justifyContent={"center"}
              w={"50%"}
            >
              <Image
                w={"80%"}
                src="https://www.citypng.com/public/uploads/preview/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix.png"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>Total Users</Text>
              <Text fontSize={"2xl"}>{userData.length}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Text textAlign={"left"} my={"20px"} fontSize={"2xl"}>
          Users
        </Text>
      </Box>
      <Box border={"1px solid re"}>
        <TableContainer>
          <Table variant="striped" colorScheme="pink">
            <Thead>
              <Tr>
                <Th>Sr. No</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>City</Th>
                <Th>Mobile</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {isLoading &&
                arr.map((item) => {
                  return (
                    <Tr >
                      <Td>{""}</Td>
                      <Td>{""}</Td>
                      <Td>{""}</Td>
                      <Td>{""}</Td>
                      <Td>{""}</Td>
                    </Tr>
                  );
                })}
              {userData && userData.map((item, index) => {
                return (
                  <UserCard
                    key={item._id}
                    {...item}
                    handleDelete={handleDelete}
                    index={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </AdminSidebar>
  );
}

export default Dashboard;