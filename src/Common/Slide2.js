import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import banner2 from "../Assets/banner2.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slide2 = ({ heading, label }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // Animation
  const { ref, inView } = useInView({
    threshold: "0.3", // 0.3 = 30%
  });
  const animation = useAnimation();
  const animationRight = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: "0",
        opacity: "1",
        transition: {
          type: "linear",
          duration: 2,
          delay: 2,
          stiffness: 100,
          repeat: Infinity,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: "0", x: "-50vw" });
    }
    if (inView) {
      animationRight.start({
        x: 0,
        opacity: "1",
        transition: {
          type: "linear",
          duration: 2,
          delay: 2,
          stiffness: 100,
          repeat: Infinity,
        },
      });
    }
    if (!inView) {
      animationRight.start({ opacity: "0", x: "50vw" });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            <Box
              position="relative"
              width="100%"
              height="100vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "70%",
                  objectFit: "cover",
                  borderBottom: "25px solid #77cfe5",
                }}
                src={banner2}
                alt={label}
              />
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                  zIndex: 2,
                }}
                // textAlign="center"
              >
                <motion.h1
                  style={{
                    fontSize: "75px",
                    margin: "0 12%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  transition={{
                    duration: 1,
                    delay: 1,
                    type: "spring",
                  }}
                >
                  {heading}
                </motion.h1>
                <motion.p
                  style={{
                    margin: "1% 13%",
                    textAlign: "center",
                    fontSize: "24px ",
                  }}
                  transition={{
                    ease: "linear",
                    duration: 2,
                    delay: 2,
                  }}
                >
                  {label}
                </motion.p>
              </Box>
            </Box>
          </AutoPlaySwipeableViews>
        </Grid>
      </Grid>
    </div>
  );
};

export default Slide2;
