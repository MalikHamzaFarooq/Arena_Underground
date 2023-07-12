import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Container, Hidden } from "@mui/material";
import QR from "../Assets/QR.png";
import Feed2 from "../Assets/Feed2.png";
import Feed1 from "../Assets/Feed1.png";
import Feed3 from "../Assets/Feed3.png";
import FeedBG from "../Assets/FeedBG.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Feed() {
  const { ref, inView } = useInView({
    threshold: "0.3", //0.3= 30%
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,

        transition: {
          ease: "linear",
          duration: 1,
          delay: 0.5,
          // stiffness: "100",
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, x: "-10vw", duration: 1 });
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
              backgroundImage: `linear-gradient(#000 10%, rgba(0, 0, 0, 0) 50%, #000 90%), url(${FeedBG})`,
            }}
          ></motion.div>
        </div>
      </div>
      <div className="content" style={{ width: "100%" }}>
        <Grid container m={"6% 0"}>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <img
              src={Feed1}
              alt="Image 1"
              style={{
                position: "relative",
                top: "-5%",
                left: "0%",
                width: "30%",
                //   height: "40%",
                //   transform: Translate("-50%, -50%"),
              }}
            />

            <img
              src={Feed3}
              alt="Image 3"
              style={{
                position: "relative",
                top: "-5%",
                left: "25%",
                width: "30%",
                //   height: "40%",
                //   transform: Translate("-30%, 0%"),
              }}
            />
            <img
              src={Feed2}
              alt="Image 2"
              style={{
                position: "relative",
                top: "0%",
                left: "-37%",
                width: "36%",
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
              <Box sx={{ textAlign: "end", width: "350px" }}>
                <Typography variant="h2">Feed</Typography>

                <Typography variant="h6" sx={{ marginTop: "8%" }}>
                  Check out awesome gaming clips, memes and more
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
