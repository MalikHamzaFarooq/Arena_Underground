import React from "react";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CustomCard from "../Common/CustomCard";
import { Box, Grid } from "@mui/material";

export default function LatestNews() {
  const newsdata = [
    {
      title: " Inflation at lowest level in almost three years, data shows",
      subtitle:
        "  Data published by the Office for National Statistics (ONS) has revealed that the UK inflation rate has fallen to its lowest level in almost three years.",
    },
    {
      title: " Inflation at lowest level in almost three years, data shows",
      subtitle:
        "  Data published by the Office for National Statistics (ONS) has revealed that the UK inflation rate has fallen to its lowest level in almost three years.",
    },
    {
      title: " Inflation at lowest level in almost three years, data shows",
      subtitle:
        "  Data published by the Office for National Statistics (ONS) has revealed that the UK inflation rate has fallen to its lowest level in almost three years.",
    },

  ];

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
    <Box
      sx={{
        bgcolor: "rgba(0, 155, 201, 0.2)",
        height: "65vh",
        paddingTop: "5%",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "22px",
          fontSize: "41px",
        }}
      >
        Latest business news
      </Typography>
      <Grid container spacing={2} sx={{ mt: 5 }}>
          {newsdata.map((news, index) => (
            <Grid item xs={12} md={4} lg={4} key={index}>
              <CustomCard title={news.title} subtitle={news.subtitle} />
            </Grid>
          ))}
        </Grid>

    </Box>
  );
}
