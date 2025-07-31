import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();

  // console.log(location)

  function isActiveLink(link) {
    return location.pathname === link;
  }

  const navLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: LuArrowDownUp,
      text: "Transactions",
      link: "/transaction",
    },
  ];

  return (
    <Stack
      bg={"white"}
      justify={"space-between"}
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h={"100vh"}
    >
      <Box>
        <Heading color={"p.purple"} as={"h1"} textAlign={"center"} fontSize={"20px"} pt={"3.5rem"}>
          @CRYPTO
        </Heading>
        <Box mt={"6"} mx={"3"}>
          {navLinks.map((item) => (
            <NavLink key={item.text} to={item.link}>
              <HStack
                borderRadius={"10px"}
                bg={isActiveLink(item.link) ? "#F3F3F7" : null}
                py={"3"}
                px={"4"}
                color={isActiveLink(item.link) ? "#171717" : "#797E82"}
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
              >
                <Icon as={item.icon} />
                <Text fontWeight={"medium"} fontSize={"14px"}>
                  {item.text}
                </Text>
              </HStack>
            </NavLink>
          ))}
        </Box>
      </Box>
      <NavLink to={"/support"}>
        <Box mb={"6"} mt={"6"} mx={"3"}>
          <HStack
            borderRadius={"10px"}
            py={"3"}
            px={"4"}
            bg={isActiveLink("/support") ? "#F3F3F7" : null}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontWeight={"medium"} fontSize={"14px"}>
              Support
            </Text>
          </HStack>
        </Box>
      </NavLink>
    </Stack>
  );
};

export default Sidenav;
