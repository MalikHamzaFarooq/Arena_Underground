import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container,Typography } from "@mui/material";
import CustomCard from "../../Common/CustomCard";
import { Link } from "react-router-dom";

function BusinessResources() {
  const servicesData = [
    {
      title: "Developing your business",
      subtitle: "Advice and tips for improving your business.",
      link: "/resources/developing-your-business"
    },
    {
      title: "Essentials",
      subtitle: "Business basics, whatever the size of your enterprise.",
      link: "/resources/essentials"
    },
    {
      title: "Limited companies",
      subtitle: "Key topics for limited companies.",
      link: "/resources/limited-companies"
    },
    {
      title: "PAYE, NICs and benefits",
      subtitle: "Essential advice for employers.",
      link: "/resources/paye-nics-benefits"
    },
    {
      title: "Starting a business",
      subtitle: "What you need to know before starting your own enterprise.",
      link: "/resources/starting-a-business"
    },
    {
      title: "VAT",
      subtitle: "Essential VAT issues.",
      link: "/resources/vat"
    }
  ];

  const heading = "Your business  ";
  const label = "Useful information on key issues for businesses.  ";

  return (
    <>
      <Slide2 heading={heading} label={label} />

      <Container>
        <Typography  variant="body2" sx={{ mt: 4, mb: 2 }}>

          From writing a business plan to VAT issues, this section contains a
          constantly-updated resource of useful information for businesses.
          Browse the topics below or use the site search feature to find the
          articles you need, then <Link style={{color:'#009bc9'}}> contact us </Link>  for advice specific to your
          particular circumstances.
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

export default BusinessResources;
