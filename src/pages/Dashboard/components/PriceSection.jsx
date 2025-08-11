import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  HStack,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import { FaArrowTrendUp, FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

const PriceSection = () => {
  const timestamps = ["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM", "12:00 AM"];

  return (
    <CustomCard>
      <HStack align={"start"} justify={"space-between"}>
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
              <Text textStyle={"h2"}>22</Text>
            </HStack>
            <HStack fontWeight={"medium"} color={"green.500"}>
              <Icon as={FaArrowTrendUp} />
              <Text fontSize={"sm"}>22%</Text>
            </HStack>
          </HStack>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Button
            leftIcon={<FaCirclePlus />}
            colorScheme="purple"
            variant="solid"
          >
            Buy
          </Button>
          <Button
            leftIcon={<FaCircleMinus />}
            colorScheme="purple"
            variant="solid"
          >
            Sell
          </Button>
        </Stack>
      </HStack>
      <Tabs variant="soft-rounded">
       <Flex justify={"end"} >
       <TabList  bg={"black.5"} p={"3px"}>
        {
            ["1H","1D","1W","1M"].map((item)=>(
                <Tab _selected={{bg : "white"}} key={item} fontSize={"sm"} p={"4px"} borderRadius={"4"}>{item}</Tab>
            ))
        }
          
        </TabList>
       </Flex>
        <TabPanels>
          <TabPanel>
          <Image mt={"48px"} w={"full"} src={`${import.meta.env.BASE_URL}graph.svg`} />
      <HStack justify={"space-between"}>
        {timestamps.map((item) => (
          <Text key={item} fontSize={"sm"} color={"black.80"}>
            {item}
          </Text>
        ))}
      </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
     
    </CustomCard>
  );
};

export default PriceSection;

