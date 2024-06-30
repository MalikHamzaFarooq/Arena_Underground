import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container,Typography } from "@mui/material";
import CustomCard from "../../Common/CustomCard";
import { Link } from "react-router-dom";

function TaxInformation() {
  const servicesData = [
    {
      title: "Statement",
      subtitle: "Our summary of all the key announcements.",
      link: "/services/statement"
    },
    {
      title: "Budget",
      subtitle: "An overview of the Chancellor's announcements.",
      link: "/services/budget"
    },
    {
      title: "Tax calendar",
      subtitle: "The essential dates and deadlines.",
      link: "/services/tax-calendar"
    },
    {
      title: "Tax rates and allowances",
      subtitle: "All the latest tax rates and figures, including income tax, CGT and much more.",
      link: "/services/tax-rates-allowances"
    }
   
  ];

  const heading = "Tax information ";
  const label = "Key tax rates, deadlines and announcements.  ";

  return (
    <>
      <Slide2 heading={heading} label={label} />

      <Container>
        <Typography  variant="body2" sx={{ mt: 4, mb: 2 }}>

        Tax rates and deadlines, plus Budget summaries.



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

export default TaxInformation;
