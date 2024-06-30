import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container,Typography } from "@mui/material";
import CustomCard from "../../Common/CustomCard";
import { Link } from "react-router-dom";

function MoneyResouces() {
  const servicesData = [
    {
      title: "Personal taxation",
      subtitle: "Key topics on personal tax, from self assessment to inheritance tax.      ",
      link: "/resources/your-money/personal-taxation"
    },
    {
      title: "Savings & investments",
      subtitle: "A guide to tax efficient saving and investment options.",
      link: "/resources/your-money/savings-and-investments"
    },
   
  ];

  const heading = "Your money  ";
  const label = "Tax and wealth planning information for individuals.  ";

  return (
    <>
      <Slide2 heading={heading} label={label} />

      <Container>
        <Typography  variant="body2" sx={{ mt: 4, mb: 2 }}>

        This resource contains a wealth of information on tax and financial issues affecting private individuals.


        </Typography>
        <Grid container spacing={5} sx={{ mt: 5 }}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} md={4} lg={4} key={index}>
              <CustomCard title={service.title} subtitle={service.subtitle} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default MoneyResouces;
