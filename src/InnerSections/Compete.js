import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Hidden } from "@mui/material";
import QR from "../Assets/QR.png";
import compete1 from "../Assets/compete1.png";
import compete2 from "../Assets/compete2.png";
import CompeteBG from "../Assets/CompeteBG.png";
import CompeteBGLeft from "../Assets/CompeteBGLeft.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import "./Compete.css";

export default function Compete() {
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
          duration: 1.5,
          delay: 0.5,
          stiffness: "100",
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
          duration: 1.5,
          delay: 0.5,
          stiffness: 100,
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
            className="leftSide"
            style={{
              backgroundImage: `linear-gradient(#000 10%, rgba(0, 0, 0, 0) 50%, #000 90%), url(${CompeteBGLeft})`,
            }}
          ></motion.div>
          <motion.div
            animate={animationRight}
            className="rightSide"
            style={{
              backgroundImage: `linear-gradient(#000 10%, rgba(0, 0, 0, 0) 50%, #000 90%), url(${CompeteBG})`,
            }}
          ></motion.div>
        </div>
      </div>
      <div className="content" style={{ width: "100%" }}>
        <Grid container >
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <img
              src={compete1}
              alt="Image 1"
              style={{
                position: "relative",
                top: "0%",
                left: "0%",
                width: "45%",
              }}
            />
            <img
              src={compete2}
              alt="Image 2"
              style={{
                position: "relative",
                top: "5%",
                left: "-25%",
                width: "45%",
                //   height: "40%",
                //   transform: Translate("-30%, 0%"),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <Grid
              container
              direction="column"
              spacing={2}
              sx={{ display: "flex", alignItems: "end" }}
            >
              <Box>
                <Typography variant="h2">Compete</Typography>

                <Typography variant="h6" sx={{ marginTop: "8%" }}>
                  Skilled based Tournaments.
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
        </Grid>
      </div>
    </div>
  );
}
