import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container } from "@mui/material";
import CustomCard from "../../Common/CustomCard";

function BusinessServicess() {
  const servicesData = [
    {
      title: "Personal tax planning",
      subtitle:
        "We have a large core of personal tax clients. Whether you need assistance with your self assessment tax returns or advice on inheritance tax planning, we can help you.",
      link: "/services/personal-tax-planning",
    },
    {
      title: "Self-assessment",
      subtitle:
        "Self-assessment tax returns can be complex, with many taxpayers struggling to complete these correctly.",
      link: "/services/self-assessment",
    },
  ];

  const heading = "Services for individuals";
  const label =
    "In addition to our effective accountancy services for businesses, Wheatley & Co also provides private clients with tailored tax and accounting advice and support.    ";
  return (
    <>
      <Slide2 heading={heading} label={label} />

      <Container>
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

export default BusinessServicess;
