import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Container, Hidden } from "@mui/material";
import QR from "../Assets/QR.png";
import Profile1 from "../Assets/Profile1.png";
import Profile2 from "../Assets/Profile2.png";
import Profile3 from "../Assets/Profile3.png";
import ProfileBG from "../Assets/ProfileBG.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Profile() {
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
          type: "linear",
          duration: 1.5,
          delay: 0.5,
          stiffness: "100",
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: "0", scale: 0 });
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
              backgroundImage: `linear-gradient(#000 10%, rgba(0, 0, 0, 0) 50%, #000 90%), url(${ProfileBG})`,
            }}
          ></motion.div>
        </div>
      </div>
      <div className="content" style={{ width: "100%" }}>
        <Grid container m={"6% 0 12% 0"}>
          <Grid item xs={12} sm={6}>
            <Grid
              direction="column"
              spacing={2}
              sx={{ display: "flex", alignItems: "self-start" }}
            >
              <Box sx={{ textAlign: "start" }}>
                <Typography variant="h2">Profile</Typography>

                <Typography variant="h6" sx={{ marginTop: "8%" }}>
                  The world’s first all in one gaming profile.
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
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={Profile3}
              alt="Image 1"
              style={{
                position: "relative",
                top: "64%",
                left: "100%",
                width: "50%",
                //   height: "40%",
                //   transform: Translate("-50%, -50%"),
              }}
            />
            <img
              src={Profile2}
              alt="Image 2"
              style={{
                position: "relative",
                top: "34%",
                left: "44%",
                width: "50%",
                //   height: "40%",
                //   transform: Translate("-30%, 0%"),
              }}
            />
            <img
              src={Profile1}
              alt="Image 1"
              style={{
                position: "relative",
                top: "0%",
                left: "-14%",
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
