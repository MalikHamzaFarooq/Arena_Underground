import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container } from "@mui/material";
import CustomCard from "../../Common/CustomCard";

function BusinessServicess() {
  const servicesData = [
    {
      title: "Accounting",
      subtitle:
        "We can prepare accounts for all types of business, from sole traders to partnerships and limited companies.",
      link: "/services/services-for-business",
    },
    {
      title: "Bookkeeping",
      subtitle:
        "It's our job to get your books straight and keep them that way.",
      link: "/services/services-for-individuals",
    },
    {
      title: "Business start-up",
      subtitle:
        "      Starting up in business can be a daunting prospect, with budding entrepreneurs all too often left to fend for themselves.",
      link: "/services/financial-planning",
    },
    {
        title: "Business support",
        subtitle: "Our support for you stretches far beyond the essential compliance services.",
        link: "/services/business-support"
      },
      {
        title: "Business tax",
        subtitle: "Our services will help to minimise your corporate tax exposure and relieve you of the administrative burden.",
        link: "/services/business-tax"
      },
      {
        title: "Company secretarial",
        subtitle: "The Companies Act places strict obligations on companies to submit the required documents according to deadlines.",
        link: "/services/company-secretarial"
      },
      {
        title: "Computer accountancy services",
        subtitle: "Cloud accounting services are the simple way of enabling software to be stored and accessed online.",
        link: "/services/computer-accountancy"
      },
      {
        title: "Commercial finance",
        subtitle: "Are you a new start-up in need of finance? Or perhaps you’re looking for funding to expand an existing business.",
        link: "/services/commercial-finance"
      },
      {
        title: "Payroll",
        subtitle: "Administering the payroll can be an arduous and time-consuming task for today’s busy business owner.",
        link: "/services/payroll"
      },
      {
        title: "Property development finance",
        subtitle: "We act on behalf of a number of property development and property management companies.",
        link: "/services/property-development-finance"
      },
      {
        title: "Succession planning",
        subtitle: "Having in place an effective succession plan will help to ensure that the transfer of your business goes as smoothly as possible, and that you minimise the tax liabilities and maximise your financial gains.",
        link: "/services/succession-planning"
      },
  ];

  const heading = "Services for business";
  const label =
    "Stedman Chartered Accountants supplies businesses of a variety of sizes and types with tailored accounting, taxation and business advisory services.  ";

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
