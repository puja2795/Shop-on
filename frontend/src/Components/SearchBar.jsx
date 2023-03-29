import { Box, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <Box padding={"15px 0px 15px 0px"}>
            <Stack spacing={2} align="center">
                <InputGroup marginRight={"20px"} bg={"#f5f5f6"} w="420px" borderRadius={"5px"}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<FiSearch color='white' />}
                    />
                    <Input type='text' placeholder='Search for products, brands and more' color={"gray"} />
                </InputGroup>
            </Stack>
        </Box>
    );
};

export default SearchBar