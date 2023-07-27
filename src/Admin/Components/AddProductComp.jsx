import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Select,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProduct } from '../../Redux/AminReducer/action';

const initialState = {
    image: "",
    title: "",
    price: "",
    rating: "",
    fabric: "",
    pattern: "",
    category: "",
    productFor: ""
};

export default function AddProductComp() {


    const [product, setProduct] = useState(initialState);
    const dispacth = useDispatch();
    const toast = useToast();

    const { image, title, price, rating, fabric, pattern, category, productFor } = product

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((product) => {
            return {
                ...product, [name]: name === "price" ? +value : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (image === "" || title === "" || price == "" || rating == "" || fabric === "" || pattern === "" || category === "" || productFor === "") {
            toast({
                position: "top",
                title: `Please add all the details`,
                status: "warning",
                isClosable: true,
                duration: 2000,
            });
        }
        else {
            dispacth(postProduct(product));
            toast({
                title: "Product Added successfully",
                position: "top",
                isClosable: true,
                status:"success"
            });
            setProduct(initialState);
        }
        // console.log('product:', product
    }


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Add Product
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>

                        <FormControl id="image" isRequired>
                            <FormLabel>Image Url</FormLabel>

                            <Input name='image' type="url" value={product.image} onChange={(e) => handleChange(e)} />
                        </FormControl>

                        <HStack>

                            <Box>
                                <FormControl id="title" isRequired>
                                    <FormLabel>Title</FormLabel>

                                    <Input name='title' type="text" value={product.title} onChange={(e) => handleChange(e)} />
                                </FormControl>
                            </Box>

                            <Box>
                                <FormControl id="price" isRequired>
                                    <FormLabel>Price</FormLabel>

                                    <Input name='price' type="number" value={product.price} onChange={(e) => handleChange(e)} />
                                </FormControl>
                            </Box>

                        </HStack>


                        <HStack>

                            <Box>
                                <FormControl id="rating" isRequired>
                                    <FormLabel>Rating</FormLabel>

                                    <Input name='rating' type="number" value={product.rating} onChange={(e) => handleChange(e)} />
                                </FormControl>
                            </Box>

                            <Box>
                                <FormControl id="fabric" isRequired>
                                    <FormLabel>Fabric</FormLabel>

                                    <Input name="fabric" type="text" value={product.fabric} onChange={(e) => handleChange(e)} />
                                </FormControl>
                            </Box>

                        </HStack>

                        <HStack>

                            <Box>
                                <FormControl id="pattern" isRequired>
                                    <FormLabel>Pattern</FormLabel>

                                    <Input name='pattern' type="text" value={product.pattern} onChange={(e) => handleChange(e)} />
                                </FormControl>
                            </Box>

                            <Box>
                                <FormControl id="category" isRequired>

                                    <FormLabel>Category</FormLabel>
                                    <Input name='category' type="text" value={product.category} onChange={(e) => handleChange(e)} />
                                </FormControl>
                            </Box>

                        </HStack>


                        <Select name='productFor' onChange={(e) => handleChange(e)}>
                            <option value=''>Product For</option>
                            <option value='men'>Men</option>
                            <option value='women'>Women</option>
                            <option value='kids'>Kids</option>
                        </Select>


                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'pink.500'}
                                color={'white'}
                                _hover={{
                                    bg: 'pink.700',
                                }}
                                onClick={handleSubmit}
                            >
                                Add Product 
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}