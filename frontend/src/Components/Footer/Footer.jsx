import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    Image,
    Heading
  } from '@chakra-ui/react';
  import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
  
  
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        marginTop="50px"
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={8}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
            <Stack align={'flex-start'}>
              <ListHeader fontSize={"12px"} fontWeight={300}>ONLINE SHOPPING</ListHeader>
              <Link href={'#'} fontSize="15px">Men</Link>
              <Link href={'#'} fontSize="15px">Women</Link>
              <Link href={'#'} fontSize="15px">Kids</Link>
              <Link href={'#'} fontSize="15px">Home &Living</Link>
              <Link href={'#'} fontSize="15px">Beauty</Link>
              <Link href={'#'} fontSize="15px">Gift Cards</Link>
              <Link href={'#'} fontSize="15px">Myntra Insider</Link>
            </Stack>
  
            <Stack align={'flex-start'}>
              <ListHeader fontSize={"12px"} fontWeight={300}>CUSTOMER POLICIES</ListHeader>
              <Link href={'#'} fontSize="15px">Contact Us</Link>
              <Link href={'#'} fontSize="15px">FAQ</Link>
              <Link href={'#'} fontSize="15px">Terms Of Use</Link>
              <Link href={'#'} fontSize="15px">Track Orders</Link>
              <Link href={'#'} fontSize="15px">Shipping</Link>
              <Link href={'#'} fontSize="15px">Cancellation</Link>
              <Link href={'#'} fontSize="15px">Returns</Link>
              <Link href={'#'} fontSize="15px">Privacy Policy</Link>
              <Link href={'#'} fontSize="15px">Grievance Officer</Link>
            </Stack>
  
            <Stack align={'flex-start'}>
              <ListHeader fontSize={"12px"} fontWeight={300}>USEFULL LINK</ListHeader>
              <Link href={'#'} fontSize="15px">Blog</Link>
              <Link href={'#'} fontSize="15px">Carreirs</Link>
              <Link href={'#'} fontSize="15px">Site Map</Link>
              <Link href={'#'} fontSize="15px">Corporate Information</Link>
              <Link href={'#'} fontSize="15px">Whitehat</Link>
  
            </Stack>
  
            <Stack align={'flex-start'}>
              <Heading as='h3' size='lg' >Shop Non-Stop on Meesho</Heading>
              <Text>Trusted by more than 1 Crore Indians Cash on Delivery | Free Delivery</Text>
              <Box cursor={"pointer"} display={"flex"} gap="10px">
                <Image href={"https://play.google.com/store/apps/details?id=com.myntra.android"} w="150px" h="42px" src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" />
                <Image href={"https://apps.apple.com/in/app/myntra-indias-fashion-store/id907394059"} w="150px" h="42px" src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" />
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}>
            <Text>In case of any concern, Contact Us</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={''}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={''}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={''}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
        <hr />
      </Box>
    );
  }