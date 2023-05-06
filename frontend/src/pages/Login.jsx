import React, { useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    const form = { email, password };
    console.log(form);
    fetch("http://localhost:8080/user/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.msg === "login successfull" && res.token) {
          Swal.fire("Good job!", "Login Successfull", "success");
          navigate("/");
        } else if (res.msg === "login failed") {
          Swal.fire("Nah !", "Wrong credentials", "error");
        } else if (res.msg === "Please fill all the fields") {
          Swal.fire("Wait", "Some fields are missing", "question");
        } else {
          Swal.fire(
            "Error",
            "Something went wrong. Please try after sometime",
            "error"
          );
        }
      })
      .catch((err) =>
        Swal.fire(
          "Error",
          "Something went wrong. Please try after sometime",
          "error"
        )
      );
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      //bg={useColorModeValue("gray.50", "gray.800")}
      bg={"#f6eff6"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          //bg={useColorModeValue("white", "gray.700")}
          bg={"#65497b"}
          boxShadow={"lg"}
          p={8}
          color={"white"}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                placeholder="enter your password"
                onChange={(e) => setPass(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.200"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleClick}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
