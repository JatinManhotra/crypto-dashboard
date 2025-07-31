import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { MdInfoOutline } from "react-icons/md";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";
const PortfolioSection = () => {
  return (
    <HStack
      spacing={{
        base: 4,
        xl: 0,
      }}
      justify={"space-between"}
      bg={"white"}
      borderRadius={"xl"}
      p={"6"}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"}>Total Portfolio Value</Text>
            <Icon as={MdInfoOutline} />
          </HStack>
          <Text textStyle={"h2"}>₹ 100</Text>
        </Stack>
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"}>Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={"4"}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle={"h2"}>22</Text> <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h2"}>₹ 100</Text>{" "}
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <Stack direction="row" spacing={4}>
        <Button
          leftIcon={<LuArrowDownToLine />}
          colorScheme="purple"
          variant="solid"
        >
          Deposit
        </Button>
        <Button
          leftIcon={<LuArrowUpToLine />}
          colorScheme="purple"
          variant="solid"
        >
          Withdrawal
        </Button>
      </Stack>
    </HStack>
  );
};

export default PortfolioSection;
