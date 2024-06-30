import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container, Typography } from "@mui/material";
import CustomCard from "../../Common/CustomCard";
import { Link } from "react-router-dom";

function InteractiveTools() {
  const servicesData = [
    {
      title: "Calculators",
      subtitle: "Business tax, personal tax and other handy calculators.",
      link: "/services/calculators"
    },
    {
      title: "Companies House forms",
      subtitle: "Access useful forms from Companies House.",
      link: "/services/companies-house-forms"
    },
    {
      title: "HMRC forms",
      subtitle: "Access useful forms from HM Revenue & Customs.",
      link: "/services/hmrc-forms"
    },
    {
      title: "Links",
      subtitle: "Useful websites for business owners.",
      link: "/services/links"
    }
  ];

  const heading = "Interactive tools";
  const label = "Useful calculators, HMRC forms and more.  ";

  return (
    <>
      <Slide2 heading={heading} label={label} />

      <Container>
        <Typography variant="body2" sx={{ mt: 4, mb: 2 }}>
        Useful features for you and your business, including calculators and forms.
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

export default InteractiveTools;
