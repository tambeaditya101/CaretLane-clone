import React from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    const form = { name, gender, email, password };
    fetch(`${process.env.REACT_APP_BASE_URL}/user/register`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "Registerd Successfull.") {
          setName("");
          setGender("");
          setEmail("");
          setPass("");
          Swal.fire("Good job!", "New user has been registered", "success");
          //alert("New user added");
          navigate("/login");
        } else if (res.msg === "This email is already registered.") {
          setEmail("");
          Swal.fire("Nah !", "Email already in use", "error");
          //alert("Email already in use");
        } else if (res.msg === "Please fill all the details.") {
          Swal.fire("Wait", "Some fields are missing", "question");
          //alert("Some fields are missing");
        } else {
          Swal.fire("Error", "Wrong credentials", "error");
          //alert("Wrong credentials");
        }
      })
      .catch((err) =>
        Swal.fire(
          "Error",
          "Something went wrong. Please try after sometime",
          "error"
        )
      );
    //console.log(form);
  };
  return (
    <>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        //bg={useColorModeValue("gray.50", "gray.800")}
        bg={"#f6eff6"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            color={"white"}
            bg={"#65497b"}
            //bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      value={name}
                      placeholder="enter your name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="gender">
                    <FormLabel>Gender</FormLabel>

                    <Input
                      type="text"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    {/* <Select placeholder="Select">
                      <option value="Male">M</option>
                      <option value="Female">F</option>
                    </Select> */}
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="enter your password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      color={"black"}
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleClick}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"blue.400"} href="/login">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
