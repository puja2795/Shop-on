import { Box, Button, FormControl, FormLabel, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/Admin.module.css"
import { AiFillStar } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"




const AdminCard = ({ image, title, price, rating, fabric, pattern, category }) => {

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

                <Image margin={"auto"} mt="10px" w="220px" h="220px" src={image}></Image>

                <Text pl="15px" textAlign={"left"} fontSize={'20px'} fontWeight={500}>{title.substring(0, 20)}...</Text>

                <Box px="15px " display={"flex"} gap="40px" alignItems={"center"}>
                    <Heading fontSize={"18px"} fontWeight={500}>₹{price}</Heading>
                    <Button variant={"link"} className={styles.divButton} colorScheme="green" rightIcon={<AiFillStar />}>
                        <Text fontWeight={500} fontSize={'18px'}>
                            {rating}
                        </Text>
                    </Button>
                </Box>

                <Text pl="15px" textAlign={"left"} fontSize={'14px'} fontWeight={500}>Fabric : {fabric}</Text>
                <Text pl="15px" textAlign={"left"} fontSize={'14px'} fontWeight={500}>Pattern : {pattern}</Text>
                <Text pl="15px" textAlign={"left"} fontSize={'14px'} fontWeight={500}>Category : {category}</Text>

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

                                        <Input name='image' type="url" />
                                    </FormControl>

                                    <HStack>

                                        <Box>
                                            <FormControl id="title" isRequired>
                                                <FormLabel>Title</FormLabel>

                                                <Input name='title' type="text" />
                                            </FormControl>
                                        </Box>

                                        <Box>
                                            <FormControl id="price" isRequired>
                                                <FormLabel>Price</FormLabel>

                                                <Input name='price' type="number" />
                                            </FormControl>
                                        </Box>

                                    </HStack>


                                    <HStack>

                                        <Box>
                                            <FormControl id="rating" isRequired>
                                                <FormLabel>Rating</FormLabel>

                                                <Input name='rating' type="number" />
                                            </FormControl>
                                        </Box>

                                        <Box>
                                            <FormControl id="fabric" isRequired>
                                                <FormLabel>Fabric</FormLabel>

                                                <Input name="fabric" type="text" />
                                            </FormControl>
                                        </Box>

                                    </HStack>

                                    <HStack>

                                        <Box>
                                            <FormControl id="pattern" isRequired>
                                                <FormLabel>Pattern</FormLabel>

                                                <Input name='pattern' type="text" />
                                            </FormControl>
                                        </Box>

                                        <Box>
                                            <FormControl id="category" isRequired>
                                                <FormLabel>Category</FormLabel>
                                                <Input name='category' type="text" />
                                            </FormControl>
                                        </Box>

                                    </HStack>


                                    <Select name='productFor'>
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
                                        >
                                            Submit Changes
                                        </Button>
                                    </Stack>
                                </Stack>
                            </ModalBody>
                        </ModalContent>
                    </Modal>

                    <Button mb="10px" leftIcon={<AiFillDelete />} colorScheme={"red"} variant="outline">Delete</Button>
                </Box>

            </Stack >

        </Box >
    )
}

export default AdminCard