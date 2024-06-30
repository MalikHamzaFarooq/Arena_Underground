import React from "react";
import Slide2 from "../../Common/Slide2";
import { Box, Grid, Typography, Container } from "@mui/material";

function AboutUs() {
  const heading = "About Us";
  const label =
    "Based near Hampton Court, Surrey, but serving businesses both locally and further afield, Wheatley & Co Chartered Accountants supplies individuals and businesses with premium accountancy and tax services at flexible prices.  ";
  return (
    <>
      <Slide2 heading={heading} label={label} />
      <Container>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Our approach to your business and personal finances is holistic
                and inContaineridualised: we always tailor our services to match
                your requirements, and ensure that we fulfil all of your
                financial objectives.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                The Wheatley & Co Chartered Accountants team prides itself on
                supplying clients with the best advice possible – we work to get
                to know you and your business inside and out, forming a
                long-lasting, stable working relationship.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                We have extensive experience in working with both large
                businesses and small and medium-sized enterprises: as a result,
                we have the knowledge and know how to help improve your
                financial affairs.
              </Typography>
            </Box>
            <Box
              sx={{
                p: 3,
                border: "1px solid #e0e0e0",
                bgcolor: "#009bc9",
                color: "white",
              }}
            >
              <Typography variant="body1">
                To learn how Stedman Accounts can assist you, please{" "}
                <b>get in touch </b>
                with us today.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            {" "}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AboutUs;
