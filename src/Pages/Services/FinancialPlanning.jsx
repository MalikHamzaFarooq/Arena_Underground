import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container } from "@mui/material";
import CustomCard from "../../Common/CustomCard";

function FinancialPlanning() {
  const servicesData = [
    {
      title: "Investments",
      subtitle: "Here at Stedman Accountants, we can help individuals to make tax-efficient investments.",
      link: "/services/investments"
    },
    {
      title: "Pensions",
      subtitle: "Ensuring that you have the appropriate pension plans in place for your retirement is essential.",
      link: "/services/pensions"
    },
    {
      title: "Protection",
      subtitle: "The fee protection scheme is a service we have offered our clients for many years and it proves popular because it protects against spiralling expenses in the event of an HM Revenue & Customs (HMRC) investigation.",
      link: "/services/protection"
    },
    {
      title: "Mortgages",
      subtitle: "Stedman Accountants can help you in securing the best mortgage deal for your requirements.",
      link: "/services/mortgages"
    }
  ];

  const heading = "Financial planning ";
  const label =
    "Stedman Accountants can also supply you with comprehensive financial planning services, and can advise on making tax-efficient investments, saving for a prosperous retirement and much more.    ";

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

export default FinancialPlanning;
