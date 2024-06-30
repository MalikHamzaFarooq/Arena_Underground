import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container, Typography } from "@mui/material";
import CustomCard from "../../Common/CustomCard";
import { Link } from "react-router-dom";

function TaxStrategies() {
  const servicesData = [
    {
      title: "Tax and financial strategies 2024/25",
      subtitle: "How tax planning can benefit you, and some recent changes.",
      link: "/services/tax-financial-strategies-2024-25"
    },
    {
      title: "A comfortable retirement",
      subtitle: "Planning for the end of your working life.",
      link: "/services/a-comfortable-retirement"
    },
    {
      title: "Exiting your business",
      subtitle: "Planning for a tax-efficient business exit.",
      link: "/services/exiting-your-business"
    },
    {
      title: "Making the most of savings and investments",
      subtitle: "Take advantage of tax saving opportunities.",
      link: "/services/savings-investments"
    },
    {
      title: "Planning for yourself and your family",
      subtitle: "Tax planning for private individuals.",
      link: "/services/planning-for-yourself-family"
    },
    {
      title: "Strategies for your business",
      subtitle: "Tax planning ideas for business owners.",
      link: "/services/strategies-for-your-business"
    },
    {
      title: "Tax and employment",
      subtitle: "Tax issues for employers and employees.",
      link: "/services/tax-and-employment"
    },
    {
      title: "Tax-efficient estate planning",
      subtitle: "Ensuring your estate is protected from the tax man.",
      link: "/services/tax-efficient-estate-planning"
    }
  ];

  const heading = "Tax Strategies ";
  const label = "Essential tax planning strategies.  ";

  return (
    <>
      <Slide2 heading={heading} label={label} />

      <Container>
        <Typography variant="body2" sx={{ mt: 4, mb: 2 }}>
          This section contains a comprehensive guide to tax planning strategies
          for individuals and businesses. Make sure you contact us for
          information and advice specific to your circumstances.
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

export default TaxStrategies;
