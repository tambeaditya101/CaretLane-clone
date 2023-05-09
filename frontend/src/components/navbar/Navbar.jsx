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
  Button
} from '@chakra-ui/react'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  const [flag,setFlag] = useState(false)

  const handleLogout = ()=>{
    localStorage.setItem('token','')
    localStorage.setItem('user','')
    setFlag(!flag)
  }

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
          <div>
            <div>
              <img
                class="flag"
                src="data:image/png;base64,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"
                alt="india flag"
              />
            </div>
            <div>
              <div>
                {
                  localStorage.getItem('token')?<Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={
                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      }
                    />
                  </MenuButton>
                  <MenuList >
                    
                    <MenuItem  >{localStorage.getItem("user")}</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={()=>handleLogout()} bg="red">Log out</MenuItem>
                  </MenuList>
                </Menu>:<LoginModal/>
                }
              </div>
            
            </div>
            <div>
              <Link to="">
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
