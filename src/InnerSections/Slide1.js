import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Hidden } from "@mui/material";
import QR from "../Assets/QR.png";
import Slider1 from "../Assets/Slider1.png";
import Slider2 from "../Assets/Slider2.png";
import Slider3 from "../Assets/Slider3.png";
import Slider4 from "../Assets/Slider4.png";
import sliderRight from "../Assets/sliderRight.png";
import sliderLeft from "../Assets/sliderLeft.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    heading: "LFG",
    label: "Make gaming friends",
    imgPath: Slider1,
  },
  {
    heading: "Feed",
    label: "We are friends",
    imgPath: Slider2,
  },
  {
    heading: "Compete",
    label: "Make gaming",
    imgPath: Slider3,
  },
  {
    heading: "Profile",
    label: "Friendly environment",
    imgPath: Slider4,
  },
];

export default function Slide1() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // Animation//
  const { ref, inView } = useInView({
    threshold: "0.3", //0.3= 30%
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
    <div className="compete-section" ref={ref}>
      <div className="animation-block-01">
        <div className="animation-block-inner">
          <motion.div
            animate={animation}
            className="leftSlider"
            style={{
              backgroundImage: `linear-gradient(#000 10%, rgba(0, 0, 0, 0) 50%, #000 90%), url(${sliderLeft})`,
            }}
          ></motion.div>
          <motion.div
            animate={animationRight}
            className="rightSlider"
            style={{
              backgroundImage: `linear-gradient(#000 10%, rgba(0, 0, 0, 0) 50%, #000 90%), url(${sliderRight})`,
            }}
          ></motion.div>
        </div>
      </div>
      <div className="content" style={{ width: "100%" }}>
        {/* <Box sx={{ maxWidth: 800, height: "800", flexGrow: 1 }}>
         
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
          />
        </Box> */}

        <Grid container spacing={2} m={"0 0 12% 0 "}>
          <Grid item xs={12} sm={4}>
            <Grid
              direction="column"
              spacing={2}
              sx={{ display: "flex", alignItems: "flex-start" }}
            >
              <Box sx={{ textAlign: "start", paddingTop: "50%" }}>
                <motion.h1
                  initial={{ scale: 0, X: "10vw" }}
                  animate={{ scale: 1, X: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1,
                    type: "spring",
                    // opacity: 0,
                  }}
                >
                  {images[activeStep].heading}
                </motion.h1>

                <motion.p
                  sx={{ marginTop: "8%" }}
                  initial={{ scale: 0, Y: "-5vh" }}
                  animate={{ scale: 1, Y: 0 }}
                  transition={{
                    ease: "linear",
                    duration: 2,
                    delay: 2,
                  }}
                >
                  {images[activeStep].label}
                </motion.p>
                <Typography
                  variant="inherit"
                  sx={{ marginTop: "30%", width: "300px" }}
                >
                  Find friends, play games and win prizes alongside a community
                  of gamers like you.
                </Typography>
              </Box>
              <Hidden mdDown>
                <Box
                  sx={{
                    width: "310px",
                    height: "122px",
                    borderRadius: "24px",
                    backgroundColor: "rgba(52, 168, 222, 1)",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: "15%",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ color: "black" }}>
                    Download The App{" "}
                  </Typography>
                  <div style={{ width: "30%", height: "70%" }}>
                    <img
                      src={QR}
                      alt="QR Code"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </Box>
              </Hidden>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "end",
              // marginTop:"10%"
            }}
          >
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 555,
                        display: "block",
                        maxWidth: 800,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            {/* <img
              src={Slider1}
              alt="Image 1"
              style={{
                position: "relative",
                top: "0%",
                // left: "-18%",
                width: "100%",
              }} */}
            {/* /> */}
            {/* <img
            src={LFG2}
            alt="Image 2"
            style={{
              position: "relative",
              top: "5%",
              left: "-15%",
              width: "25%",
              //   height: "40%",
              //   transform: Translate("-30%, 0%"),
            }}
          />
          <img
            src={LFG3}
            alt="Image 2"
            style={{
              position: "relative",
              top: "9%",
              left: "-30%",
              width: "33%",
              //   height: "40%",
              //   transform: Translate("-30%, 0%"),
            }}
          /> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
