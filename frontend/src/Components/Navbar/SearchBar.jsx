import { Box, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <InputGroup bg={"white"} w="420px" size="lg" >
            <InputLeftElement
                pointerEvents='none'
                children={<FiSearch color='gray' />}
            />
            <Input type='text' placeholder='Try Saree, Kurti or Search by Product Code' borderRadius={"3px"} color={"grey"} border={"1px solid #EDE8E8"} />
        </InputGroup>
    );
};

export default SearchBar