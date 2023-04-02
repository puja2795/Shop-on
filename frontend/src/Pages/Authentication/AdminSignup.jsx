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
import Navbar from "../../Components/Navbar/Navbar";
import { Subnav } from "../../Components/Navbar/Subnav";
import { Layout } from "../../Components/Container/Layout";
import { useNavigate } from "react-router";

const AdminSignup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate ();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await axios.post(
      `https://wild-erin-seal-sari.cyclic.app/admin/signup`,
      {
        name,
        email,
        password,
      }
    );
  
    console.log(res.data);
    navigate("/adminLogin");
  };

  return (
    <>
      <Navbar />
      <Subnav />
      <Layout>
        <div
          style={{ backgroundColor: " rgb(253, 240, 232)", padding: "50px" }}
        >
          <Container>
            <Image
              src="https://images.meesho.com/images/marketing/1661417516766.webp"
              width="100%"
              borderRadius="10px"
            />
            <Container backgroundColor="white" padding="50px">
              <Text
                fontSize="lg"
                fontWeight="bold"
                paddingBottom="50"
                textAlign="left"
              >
                Admin Signup
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
                  <Button
                    type="submit"
                    backgroundColor="rgb(244, 51, 151)"
                    color="white"
                  >
                    Signup
                  </Button>
                </Stack>
              </form>
              <Text>
                Already have an account? <Link to="/adminLogin">Login</Link>
              </Text>
            </Container>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default AdminSignup;
