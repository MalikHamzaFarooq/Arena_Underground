import React from "react";
import ServicesCard from "../Common/ServicesCard";
import { Container, Grid } from "@mui/material";

export default function Services() {
  return (
    <Container
      sx={{ backgroundColor: "#77cfe5",padding:'7% 10%' ,width: "100%", height: "105vh" }}
      // ref={ref}
    >
      <Grid container sx={{ display: "flex"}} spacing={3}>
        <Grid item sm={12} md={4} lg={3}>
        <ServicesCard />
        </Grid>
        <Grid item sm={12} md={4} lg={3}>
        <ServicesCard />
        </Grid>
        <Grid item sm={12} md={4} lg={3}>
        <ServicesCard />
        </Grid>
        <Grid item sm={12} md={4} lg={3}>
        <ServicesCard />
        </Grid>
        
      </Grid>
      
     
    </Container>
  );
}
