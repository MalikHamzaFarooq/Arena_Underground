import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import banner1 from "../Assets/banner1.jpg";
import banner2 from "../Assets/banner2.jpg";
import banner3 from "../Assets/banner3.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    heading: " Providing comprehensive accountancy and taxation services to businesses and individuals",
    label: "Wheatley & Co provides clients with expert advice and support",
    imgPath: banner1, 
  },
  {
    heading: " Minimising your tax liability and maximising your profitability",
    label: "We’ve got your business and personal finances covered",
    imgPath: banner2,
  },
  {
    heading: " Taking an innovative and holistic approach to getting to know you and your business",
    label: "You can expect to receive a service that is tailored to meet your exact requirements",
    imgPath: banner3,
  },
];

export default function Slide1() {
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
    <div className="compete-section" ref={ref} style={{borderBottom:'25px solid #77cfe5'}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <Box
                key={step.label}
                position="relative"
                width="100%"
                height="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
                    <Box
                      component="img"
                      sx={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                    <Box
                    sx={{}}
                      position="absolute"
                      // top="50%"
                      // left="50%"
                      // transform="translate(-50%, -50%)"
                      textAlign="center"
                      color="white"
                      zIndex={2}
                      
                    >
                      <motion.h1
                      style={{fontSize:'40px',margin:'0 12%'}}
                        // initial={{ scale: 0, X: "10vw" }}
                        // animate={{ scale: 1, X: 0 }}
                        transition={{
                          duration: 1,
                          delay: 1,
                          type: "spring",
                        }}
                      >
                        {step.heading}
                      </motion.h1>
                      <motion.p
                        sx={{ marginTop: "8%" }}
                        // initial={{ scale: 0, Y: "-5vh" }}
                        // animate={{ scale: 1, Y: 0 }}
                        transition={{
                          ease: "linear",
                          duration: 2,
                          delay: 2,
                        }}
                      >
                        {step.label}
                      </motion.p>
                    
                    </Box>
                  </>
                ) : null}
              </Box>
            ))}
          </AutoPlaySwipeableViews>
          
        </Grid>
      </Grid>
    </div>
  );
}
