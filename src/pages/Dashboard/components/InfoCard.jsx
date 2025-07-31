import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard backgroundColor={inverted ? "p.purple" : "white"} bgImage={imgUrl} bgRepeat={"no-repeat"} bgSize={"cover"}>
      <Tag 
      color={
        inverted ? "p.purple" : "white"
      }
       bg={ inverted ? "white" : "p.purple"} 
       borderRadius={"full"}>
        {tagText}
      </Tag>
      <Text color={inverted ? "white" : "black"} mt={"4"} fontWeight={"bold"} textStyle={"h5"}>
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
