import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Container, Hidden } from "@mui/material";
import QR from "../Assets/QR.png";
import Slider1 from "../Assets/Slider1.png";

export default function Slide1() {
  return (
    <Container>
      <Grid container spacing={2} m={"0 0 12% 0 "}>
        <Grid item xs={12} sm={4}>
          <Grid
            direction="column"
            spacing={2}
            sx={{ display: "flex", alignItems: "flex-start" }}
          >
            <Box sx={{ textAlign: "start",paddingTop:"50%" }}>
              <Typography variant="h2">LFG</Typography>

              <Typography variant="h6" sx={{ marginTop: "8%" }}>
                Make gaming friends
              </Typography>
              <Typography
                variant="inherit"
                sx={{ marginTop: "30%", width: "300px" }}
              >
                Find friends, play games and win prizes alongside a community of
                gamers like you.
              </Typography>
            </Box>
            <Hidden mdDown>
              <Box
                sx={{
                  width: "80%",
                  height: "120px",
                  borderRadius: "18px",
                  backgroundColor: "rgba(52, 168, 222, 1)",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "5%",
                }}
              >
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Download The App{" "}
                </Typography>
                <img
                  src={QR}
                  alt="QR Code"
                  style={{ width: "100px", height: "100px" }}
                />
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
          <img
            src={Slider1}
            alt="Image 1"
            style={{
              position: "relative",
              top: "0%",
              // left: "-18%",
              width: "100%",
              //   height: "40%",
              //   transform: Translate("-50%, -50%"),
            }}
          />
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
    </Container>
  );
}
