import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title={"Dashboard"}>
      <Grid gap={"6"} gridTemplateColumns={{
        base : "repeat(1, 1fr)",
        md : "repeat(2, 1fr)"
      }}>
        <GridItem colSpan={"2"}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={{
          base : "2",
          md : "1"
        }}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={{
          base : "2",
          md : "1"
        }}>
          <Transactions/>
        </GridItem>
        <GridItem colSpan={{
          base : "2",
          md : "1"
        }}>
          <InfoCard imgUrl={"/dot_bg.svg"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos"}
          tagText={"Loans"}
          />
        </GridItem>
        <GridItem colSpan={{
          base : "2",
          md : "1"
        }}>
          <InfoCard inverted={true} imgUrl={"/grid_bg.svg"}
           text={"Lorem adipisicing elit. Dolorum quos Contact Us Today"}
           tagText={"Contact"}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
