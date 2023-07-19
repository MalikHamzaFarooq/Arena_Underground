import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Hidden } from "@mui/material";
import QR from "../Assets/QR.png";
import GamingMatters1 from "../Assets/GamingMatters1.png";
import GamingMatters2 from "../Assets/GamingMatters2.png";
import GamingMatters3 from "../Assets/GamingMatters3.png";
import GamingMattersBG from "../Assets/GamingMattersBG.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function GamingMatters() {
  const { ref, inView } = useInView({
    threshold: "0.3", //0.3= 30%
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: [1, 0, 1, 0, 1],

        transition: {
          type: "linear",
          duration: 2,
          delay: 0.5,
          stiffness: "100",
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: "0" });
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
              backgroundImage: `linear-gradient(#000 13%, rgba(0, 0, 0, 0) 55%, #000 84%), url(${GamingMattersBG})`,
            }}
          ></motion.div>
        </div>
      </div>
      <div className="content" style={{ width: "100%" }}>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Grid
              direction="column"
              spacing={2}
              sx={{ display: "flex", alignItems: "self-start" }}
            >
              <Box sx={{ textAlign: "start" }}>
                <Typography variant="h2">All your gaming matters</Typography>

                <Typography
                  variant="h6"
                  sx={{ marginTop: "8%", width: "300px" }}
                >
                  Climb the ranks and earn awesome rewards.
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
            sm={7}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={GamingMatters1}
              alt="Image 1"
              style={{
                position: "relative",
                top: "0%",
                left: "77%",
                width: "40%",
                //   height: "40%",
                //   transform: Translate("-50%, -50%"),
              }}
            />
            <img
              src={GamingMatters2}
              alt="Image 2"
              style={{
                position: "relative",
                top: "12%",
                left: "10%",
                width: "40%",
                //   height: "40%",
                //   transform: Translate("-30%, 0%"),
              }}
            />
            <img
              src={GamingMatters3}
              alt="Image 3"
              style={{
                position: "relative",
                top: "17%",
                left: "-63%",
                width: "50%",
                //   height: "40%",
                //   transform: Translate("-30%, 0%"),
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
