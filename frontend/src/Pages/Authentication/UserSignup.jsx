import React from "react";
import {
  Image,
  Input,
  Text,
  Button,
  Container,
  FormControl,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserSignup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleSubmit = async(event) => {
    event.preventDefault();
    let res =  await axios.post(`https://tired-seal-leotard.cyclic.app/user/signup`,{
        name, email,password, address
    })

    console.log(res.data);
  };

  return (
    <div style={{  backgroundColor: " rgb(253, 240, 232)" , padding: "50px"}}>
      <Container>
        <Image
          src="https://images.meesho.com/images/marketing/1661417516766.webp"
          width="100%"
          borderRadius="10px"
        />
        <Container backgroundColor="white" padding="50px" >
          <Text
            fontSize="lg"
            fontWeight="bold"
            paddingBottom="50"
            textAlign="left"
          >
            Sign Up to view your profile
          </Text>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <Input
                  type="text"
                  value={name}
                  placeholder="Name*"
                  onChange={(event) => setName(event.target.value)}
                  borderRadius="0"
                  border="0"
                  borderBottom="1px solid"
                  borderColor="gray.300"
                />
              </FormControl>
              <FormControl isRequired>
                <Input
                  type="email"
                  value={email}
                  placeholder="Email*"
                  onChange={(event) => setEmail(event.target.value)}
                  borderRadius="0"
                  border="0"
                  borderBottom="1px solid"
                  borderColor="gray.300"
                />
              </FormControl>
              <FormControl isRequired>
                <Input
                  type="password"
                  value={password}
                  placeholder="Password*"
                  onChange={(event) => setPassword(event.target.value)}
                  borderRadius="0"
                  border="0"
                  borderBottom="1px solid"
                  borderColor="gray.300"
                />
              </FormControl>
              <FormControl>
                <Input
                  type="text"
                  value={address}
                  placeholder="Address"
                  onChange={(event) => setAddress(event.target.value)}
                  borderRadius="0"
                  border="0"
                  borderBottom="1px solid"
                  borderColor="gray.300"
                />
              </FormControl>
              <Button type="submit" backgroundColor="rgb(244, 51, 151)" color="white" >Signup</Button>
            </Stack>
          </form>
          <Text>Already have an account? <Link to="/userLogin" >Login</Link></Text>
        </Container>
      </Container>
    </div>
  );
};

export default UserSignup;
