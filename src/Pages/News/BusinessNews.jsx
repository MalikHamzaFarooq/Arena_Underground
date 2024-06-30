import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container } from "@mui/material";
import CustomCard from "../../Common/CustomCard";

function BusinessNews() {
  // const servicesData = [
  //   {
  //     title: "Business News      ",
  //     subtitle:
  //      "Stay up to date on all of the latest business and tax happenings.",
  //     link: "/news/business-news",
  //   },
  //   {
  //     title: "Hot Topics",
  //     subtitle:
  //       "What's new in the world of tax and business? This section contains articles on some hot topics.",
  //     link: "/news/hot-topics",
  //   },
  // ];

  const heading = " Business News  ";
  const label =
  'Stay up to date on all of the latest business and tax happenings.  '; 
  return (
    <>
      <Slide2 heading={heading} label={label} />

      <Container>
        {/* <Grid container spacing={5} sx={{ mt: 5 }}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} md={4} lg={4} key={index}>
              <CustomCard title={service.title} subtitle={service.subtitle} />
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </>
  );
}

export default BusinessNews;
