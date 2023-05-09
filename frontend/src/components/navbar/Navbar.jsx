import React, { useState } from "react";
import "./navbar.css";
import logo1 from "./logo1.jpeg";
import { MdLocationPin } from "react-icons/md";
import { TbHeartFilled } from "react-icons/tb";
import { GiShoppingBag } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

import { IoHomeOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoBagAddOutline } from "react-icons/io5";
import { AiOutlineGold } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Navbardropdown } from "../navbardropdown/Navbardropdown";
import { LoginModal } from "./LoginModal";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
  Avatar,
  Button,
  Center,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flag, setFlag] = useState(false);

  const handleLogout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    setFlag(!flag);
    Swal.fire("Logged out", "Visit us again..", "success");
  };

  return (
    <div id="nav__main">
      <div id="nav__top">Introducing CaratLane PoP! Plan your purchase</div>
      <div id="nav__medium">
        <div id="nav__logo">
          <Link to="/">
            {" "}
            <img src={logo1} alt="logo" width={"50%"} />
          </Link>
        </div>

        <div id="nav__menu">
          <div>
            <IoHomeOutline class="nav__icone__logo" />
            <Link to="">FREE TRY AT HOME</Link>
          </div>
          <div>
            <IoStorefrontOutline class="nav__icone__logo" />
            <Link to="">FIND STORE</Link>
          </div>
          <div>
            <IoBagAddOutline class="nav__icone__logo" />
            <Link to="">PLAN OF PURCHASE</Link>
          </div>
          <div>
            <AiOutlineGold class="nav__icone__logo" />
            <Link to="">BUY DIGITAL GOLD</Link>
          </div>
        </div>

        <div id="nav__search">
          <input type="search" placeholder="Search" />
          <button>
            <IoSearch class="nav__icone__search" />
          </button>
        </div>

        <div id="nav__auth__menu">
          <div>
            <MdLocationPin class="nav__auth__icone" />
            <p>PINCODE</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "30px", height: "30px" }}>
              <img
                class="flag"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                alt="flag"
              />
            </div>
            <div>
              <div>
                {localStorage.getItem("token") ? (
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <Avatar
                        boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
                        size={"sm"}
                        src={
                          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-green-icon-symbol-transparent-png-11639594320ayr6vyoidq.png"
                        }
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem bg="green.100">
                        {localStorage.getItem("user")}
                      </MenuItem>

                      <MenuDivider />
                      <MenuItem
                        onClick={() => handleLogout()}
                        bg="red"
                        color={"white"}
                      >
                        Log out
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  <LoginModal />
                )}
              </div>
            </div>
            <div>
              <Link to="*">
                <TbHeartFilled class="nav__icon" />
              </Link>
            </div>
            <div>
              <Link to="/cart">
                <GiShoppingBag class="nav__icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="nav__bottom">
        <Navbardropdown />
      </div>
    </div>
  );
};

export default Navbar;
