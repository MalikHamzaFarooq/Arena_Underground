import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container } from "@mui/material";
import CustomCard from "../../Common/CustomCard";

function ResourcesPage() {
  const servicesData = [
    {
      title: "Your business",
      subtitle: "Useful information on key issues for businesses.",
      link: "/resources/your-business",
    },
    {
      title: "Your money",
      subtitle: "Tax and wealth planning information for individuals.",
      link: "/resources/your-money",
    },
    {
      title: "Tax information",
      subtitle: "Key tax rates, deadlines and announcements.",
      link: "/resources/tax-information",
    },
    {
      title: "Tax strategies",
      subtitle: "Essential tax planning strategies.",
      link: "/resources/tax-strategies",
    },
    {
      title: "Interactive tools",
      subtitle: "Useful calculators, HMRC forms and more.",
      link: "/resources/interactive-tools",
    },
  ];

  const heading = "Resources";
  const label = "Resources available ";

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

export default ResourcesPage;
