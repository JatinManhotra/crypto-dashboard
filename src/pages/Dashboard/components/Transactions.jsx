import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Button, Divider, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react'
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaBtc } from 'react-icons/fa6';

const Transactions = () => {

    const transactions = [
        {
          id: "1",
          icon: BsCurrencyRupee,
          text: "INR Deposit",
          amount: "+ ₹81,123.10",
          timestamp: "2022-06-09 7:06 PM",
        },
        {
          id: "2",
          icon: FaBtc,
          text: "BTC  Sell",
          amount: "- 12.48513391 BTC",
          timestamp: "2022-06-09 7:06 PM",
        },
        {
          id: "3",
          icon: BsCurrencyRupee,
          text: "INR Deposit",
          amount: "+ ₹81,123.10",
          timestamp: "2022-06-09 7:06 PM",
        },
      ];

  return (
    <CustomCard h={"full"}>
        <Text mb={"6"} color={"black.80"} fontSize={"sm"}>
            Recent Transactions
        </Text>
        <Stack spacing={"4"}>
            {
                transactions.map((item, i)=>(
                   <Fragment key={item.id} >
                    {i !== 0 && <Divider/> }
                         <Flex  gap={"4"}>
                        <Grid bg={"black.5"} boxSize={"10"} borderRadius={"full"} placeItems={"center"}>
                            <Icon p={"1"} fontSize={"1.5rem"} borderRadius={"full"} bg={"black"} color={"white"} as={item.icon}/>
                        </Grid>
                        <Flex w={"full"} justify={"space-between"}>
                            <Stack spacing={"0"}>
                                <Text textStyle={"h6"}>{item.text}</Text>
                                <Text fontSize={"sm"} color={"black.40"}>{item.timestamp}</Text>
                            </Stack>
                            <Stack >
                                <Text fontWeight={"bold"} color={"black.80"}>{item.amount}</Text>
                            </Stack>
                        </Flex>
                    </Flex>
                   </Fragment>
                ))
            }
        </Stack>
        <Button w={"full"} colorScheme='gray' mt={"6"}>View All</Button>
    </CustomCard>
  )
}

export default Transactions