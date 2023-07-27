import { Td, Tr } from "@chakra-ui/react";
import React from "react";


function UserCard({ index, name, email, _id, address, handleDelete }) {


    return (
        <Tr>
            <Td>{index + 1}</Td>
            <Td>{name}</Td>
            <Td>{email}</Td>
            <Td>{address ? address[0]?.city : null}</Td>
            <Td>{address ? address[1]?.contact : null}</Td>
            <Td cursor={"pointer"} onClick={() => handleDelete(_id)} >Delete</Td>
        </Tr>
    );
}

export default UserCard;