import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Container, Hidden } from "@mui/material";
import QR from "../Assets/QR.png";
import LFG1 from "../Assets/LFG1.png";
import LFG2 from "../Assets/LFG2.png";
import LFG3 from "../Assets/LFG3.png";
import LFG_BG from "../Assets/LFG_BG.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function LFG() {
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
              backgroundImage: `linear-gradient(#000 10%, rgba(0, 0, 0, 0) 50%, #000 90%),  url(${LFG_BG})`,
            }}
          ></motion.div>
        </div>
      </div>
      <div className="content" style={{ width: "100%" }}>
        <Grid container>
          <Grid item xs={12} sm={6} order={{ xs: 1 }}>
            <Grid
              direction="column"
              spacing={2}
              sx={{ display: "flex", alignItems: "flex-start" }}
            >
              <Box sx={{ textAlign: "start" }}>
                <Typography variant="h2">LFG</Typography>

                <Typography variant="h6" sx={{ marginTop: "8%" }}>
                  Connect with friends and find teammates
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
            order={{ xs: 2 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={LFG1}
              alt="Image 1"
              style={{
                position: "relative",
                top: "2%",
                left: "20%",
                width: "40%",
                //   height: "40%",
                //   transform: Translate("-50%, -50%"),
              }}
            />
            <img
              src={LFG2}
              alt="Image 2"
              style={{
                position: "relative",
                top: "-7%",
                left: "2%",
                width: "27%",
                //   height: "40%",
                //   transform: Translate("-30%, 0%"),
              }}
            />
            <img
              src={LFG3}
              alt="Image 2"
              style={{
                position: "relative",
                top: "-8%",
                left: "-13%",
                width: "40%",
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
