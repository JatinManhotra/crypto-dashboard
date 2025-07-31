import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { IoSearchSharp } from "react-icons/io5";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title={"Transaction"}>
      <Flex mt={"6"} mb={"3"} justify={"end"}>
        <Button leftIcon={<MdOutlineFileDownload />}>Export CSV</Button>
      </Flex>
      <Card borderRadius={"16px"}>
        <Tabs>
          <TabList w={"full"} display={"flex"} justifyContent={"space-between"} pt={"4"}>
            <HStack>
            {tabs.map((item) => (
              <Tab fontWeight={"medium"} display={"flex"} gap={"2"} pb={"4"} key={item.name}>
                {item.name}
                <Tag colorScheme="gray" borderRadius={"full"}>
                  {item.count}
                </Tag>
              </Tab>
            ))}
            </HStack>
            <InputGroup maxW={"200px"} pr={"6"}>
              <InputLeftElement pointerEvents="none">
                <Icon as={IoSearchSharp} />
              </InputLeftElement>
              <Input  type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
