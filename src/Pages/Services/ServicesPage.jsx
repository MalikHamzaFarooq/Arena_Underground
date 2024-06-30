import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container } from "@mui/material";
import CustomCard from "../../Common/CustomCard";

function ServicesPage() {
  const servicesData = [
    {
      title: "Services for business",
      subtitle:
        "Stedman Chartered Accountants supplies businesses of a variety of sizes and types with tailored accounting, taxation and business advisory services. ",
      link: "/services/services-for-business",
    },
    {
      title: "Services for individuals",
      subtitle:
        "In addition to our effective accountancy services for businesses, Wheatley & Co also provides private clients with tailored tax and accounting advice and support. ",
        link: "/services/services-for-individuals",
    },
    {
      title: "Financial planning",
      subtitle:
        "Stedman Accountants can also supply you with comprehensive financial planning services, and can advise on making tax-efficient investments, saving for a prosperous retirement and much more.",
         link: "/services/financial-planning",
    },
    {
      title: "Specialist services",
      subtitle:
        "Stedman Chartered Accountants prides itself on the one-of-a-kind accountancy, tax and support services its team members offer to those within specialist sectors. ",
         link: "/services/specialist-services",
    },
  ];

  const heading = "Services";

  return (
    <>
      <Slide2 heading={heading} />

      <Container>
        <Grid container spacing={2} sx={{ mt: 5 }}>
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

export default ServicesPage;
