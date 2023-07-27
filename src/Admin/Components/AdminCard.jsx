import { Box, Button, FormControl, FormLabel, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from "../Styles/Admin.module.css"
import { AiFillStar } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, editProduct, getMensData } from '../../Redux/AminReducer/action'

const initialState = {
    _id: "",
    image: "",
    title: "",
    price: "",
    rating: "",
    fabric: "",
    pattern: "",
    category: "",
    productFor: ""
};


const AdminCard = ({ image1, title1, price1, rating1, fabric1, pattern1, category1, id, productFor1 }) => {

    // console.log('productFor:', productFor);

    const loading = useSelector((store) => {
        return store.adminReducer.isLoading
    });

    const [product, setProduct] = useState(initialState);
    const dispacth = useDispatch();
    const toast = useToast();

    useEffect(() => {
        setProduct({
            ...product,
            _id: id,
            image: image1,
            title: title1,
            price: price1,
            rating: rating1,
            fabric: fabric1,
            pattern: pattern1,
            category: category1,
            productFor: productFor1
        })
    }, [])

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

        if (product.image === "" || product.title === "" || product.price == "" || product.rating == "" || product.fabric === "" || product.pattern === "" || product.category === "" || product.productFor === "") {
            toast({
                position: "top",
                title: `Please add all the details`,
                status: "warning",
                isClosable: true,
                duration: 2000,
            });
        }
        else {

            dispacth(editProduct(product, id))
                .then((res) => {
                    if (productFor1 === "men") {
                        dispacth(getMensData({ productFor: "men" }));
                        toast({
                            title: "Product Edited successfully",
                            position: "top",
                            isClosable: true,
                            status: "success"
                        })
                        onClose();
                    }
                    else if (productFor1 === "women") {
                        dispacth(getMensData({ productFor: "women" }));
                        toast({
                            title: "Product Edited successfully",
                            position: "top",
                            isClosable: true,
                            status: "success"
                        })
                        onClose();
                    }
                    else if (productFor1 === "kids") {
                        dispacth(getMensData({ productFor: "kids" }));
                        toast({
                            title: "Product Edited successfully",
                            position: "top",
                            isClosable: true,
                            status: "success"
                        })
                        onClose();
                    }
                })
        }
    }




    const handleDelete = () => {
        dispacth(deleteProduct(id))
            .then((res) => {
                if (productFor1 === "men") {
                    dispacth(getMensData({ productFor: "men" }));
                    toast({
                        title: "Product Deleted successfully",
                        position: "top",
                        isClosable: true,
                        status: "success"
                    })
                }
                else if (productFor1 === "women") {
                    dispacth(getMensData({ productFor: "women" }));
                    toast({
                        title: "Product Deleted successfully",
                        position: "top",
                        isClosable: true,
                        status: "success"
                    })
                }
                else if (productFor1 === "kids") {
                    dispacth(getMensData({ productFor: "kids" }));
                    toast({
                        title: "Product Deleted successfully",
                        position: "top",
                        isClosable: true,
                        status: "success"
                    })
                }
            })
    }


    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)


    return (
        <Box cursor={"pointer"} marginTop={"10px"} className={styles.Box_shadow} borderRadius="5px">
            <Stack>

                <Image margin={"auto"} mt="10px" w="220px" h="220px" src={image1}></Image>

                <Text pl="15px" textAlign={"left"} fontSize={'20px'} fontWeight={500}>{title1.substring(0, 20)}...</Text>

                <Box px="15px " display={"flex"} gap="40px" alignItems={"center"}>
                    <Heading fontSize={"18px"} fontWeight={500}>₹{price1}</Heading>
                    <Button variant={"link"} className={styles.divButton} colorScheme="green" rightIcon={<AiFillStar />}>
                        <Text fontWeight={500} fontSize={'18px'}>
                            {rating1}
                        </Text>
                    </Button>
                </Box>

                <Text pl="15px" textAlign={"left"} fontSize={'14px'} fontWeight={500}>Fabric : {fabric1}</Text>
                <Text pl="15px" textAlign={"left"} fontSize={'14px'} fontWeight={500}>Pattern : {pattern1}</Text>
                <Text pl="15px" textAlign={"left"} fontSize={'14px'} fontWeight={500}>Category : {category1}</Text>

                <Box display={"flex"} justifyContent="space-around">

                    <Button leftIcon={<MdModeEditOutline />} colorScheme={"pink"} variant="outline"
                        onClick={() => {
                            setOverlay(<OverlayOne />)
                            onOpen()
                        }}
                    >Edit</Button>

                    {/* Edit Modal */}
                    <Modal isCentered isOpen={isOpen} onClose={onClose}>
                        {overlay}
                        <ModalContent>
                            <ModalHeader>Edit Product</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
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


                                    <Select name='productFor' value={product.productFor} onChange={(e) => handleChange(e)}>
                                        <option value=''>Product For</option>
                                        <option value='men'>Men</option>
                                        <option value='women'>Women</option>
                                        <option value='kids'>Kids</option>
                                    </Select>


                                    <Stack spacing={10} pt={2}>
                                        <Button
                                            size="lg"
                                            bg={'pink.500'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'pink.700',
                                            }}
                                            onClick={handleSubmit}
                                        >
                                            {loading ? ("Submitting...") : ("Submit Changes")}
                                        </Button>
                                    </Stack>
                                </Stack>
                            </ModalBody>
                        </ModalContent>
                    </Modal>

                    <Button onClick={handleDelete} mb="10px" leftIcon={<AiFillDelete />} colorScheme={"red"} variant="outline">Delete</Button>
                </Box>

            </Stack >

        </Box >
    )
}

export default AdminCard