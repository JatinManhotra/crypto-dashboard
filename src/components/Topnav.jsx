import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Container,
  Heading,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Topnav = ({title,onOpen}) => {
  return (
   <Box bg={"white"} px={"4"}>
     <HStack mx={"auto"} maxW={"70rem"} justify={"space-between"} h={"16"} >
     <Icon display={{
        base : "block",
        lg : "none"
     }} as={IoMenu} onClick={onOpen}/>
     <Heading fontWeight={"medium"} fontSize={"28px"}>{title}</Heading>
     <Menu>
       <MenuButton >
        <Icon fontSize={"24px"} as={FaRegUserCircle}/>
       </MenuButton>
       <MenuList>
         <MenuItem>Logout</MenuItem>
         <MenuItem>Support</MenuItem>
       </MenuList>
     </Menu>

 </HStack>
   </Box>
  );
};

export default Topnav;
