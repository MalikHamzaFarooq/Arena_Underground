import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Container, Hidden } from "@mui/material";
import QR from "../Assets/QR.png";
import Track1 from "../Assets/Track1.png";
import Track2 from "../Assets/Track2.png";
import Track3 from "../Assets/Track3.png";
import TrackBG from "../Assets/TrackBG.svg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

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
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, scale: 0.5 });
    }
  }, [inView]);
  return (
    <div className="compete-section" ref={ref}>
      <div className="animation-block-01">
        <div className="animation-block-inner">
          <motion.div
            animate={animation}
            className="LFG_BG"
            style={{
              backgroundImage: `linear-gradient(#000 10%, rgba(0, 0, 0, 0) 50%, #000 90%), url(${TrackBG})`,
            }}
          ></motion.div>
        </div>
      </div>
      <div className="content" style={{ width: "100%" }}>
        <Grid container m={"6% 0"}>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <img
              src={Track1}
              alt="Image 1"
              style={{
                position: "relative",
                top: "34%",
                left: "11%",
                width: "50%",
                //   height: "40%",
                //   transform: Translate("-50%, -50%"),
              }}
            />

            <img
              src={Track2}
              alt="Image 2"
              style={{
                position: "relative",
                top: "27%",
                left: "-31%",
                width: "50%",
                //   height: "40%",
                //   transform: Translate("-30%, 0%"),
              }}
            />
            <img
              src={Track3}
              alt="Image 3"
              style={{
                position: "relative",
                top: "-29%",
                left: "12%",
                width: "41%",
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
              <Box sx={{ textAlign: "end", width: "300px" }}>
                <Typography variant="h2">
                  Track your stats and improve
                </Typography>

                <Typography variant="h6" sx={{ marginTop: "8%" }}>
                  All your gaming stats in one place.
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
