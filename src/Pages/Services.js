import React from "react";
import ServicesCard from "../Common/ServicesCard";
import { Box, Grid } from "@mui/material";

export default function Services() {
  return (
    <Box
      sx={{
        backgroundColor: "#77cfe5",
        padding: '7% 0%', 
        width: "100%",
        minHeight: "65vh",
      }}
    >
      <Grid container justifyContent="center" spacing={3}>
    
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <ServicesCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <ServicesCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <ServicesCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <ServicesCard />
        </Grid>
      </Grid>
    </Box>
  );
}
