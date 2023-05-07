import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const naviagte = useNavigate();

  function redirectLogin() {
    naviagte("/login");
  }

  function redirectRegister() {
    naviagte("/register");
  }

  return (
    <>
      <FaUser onClick={onOpen} />

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="3xl">Your Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="0rem">Access account & manage your orders.</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={redirectRegister}>
              Sign Up
            </Button>
            <Button variant="ghost" onClick={redirectLogin}>
              Log In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

// export const LoginModal=()=>{
//   <Menu>
//   <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//     Actions
//   </MenuButton>
//   <MenuList>
//     <MenuItem>Download</MenuItem>
//     <MenuItem>Create a Copy</MenuItem>
//     <MenuItem>Mark as Draft</MenuItem>
//     <MenuItem>Delete</MenuItem>
//     <MenuItem>Attend a Workshop</MenuItem>
//   </MenuList>
// </Menu>
// }
