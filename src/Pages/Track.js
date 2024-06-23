import React from "react";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CustomCard from "../Common/CustomCard";
import { Box, Grid } from "@mui/material";

export default function Track() {
  const { ref, inView } = useInView({
    threshold: "0.3", //0.3= 30%
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,

        transition: {
          duration: 2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, scale: 0 });
    }
  }, [inView]);
  return (
    <Box sx={{ bgcolor: "rgba(0, 155, 201, 0.2)", height: "65vh", }}>
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "22px",
        }}
      >
        {" "}
        Latest business news
      </Typography>
      <Grid container sx={{ display: "flex",justifyContent:'center',alignItems:'center'}} spacing={3}>
        <Grid item sm={12} md={4} lg={3}>
        <CustomCard />
        </Grid>
        <Grid item sm={12} md={4} lg={3}>
        <CustomCard />
        </Grid>
        <Grid item sm={12} md={4} lg={3}>
        <CustomCard />
        </Grid>
      
        
      </Grid>
    </Box>
  );
}
