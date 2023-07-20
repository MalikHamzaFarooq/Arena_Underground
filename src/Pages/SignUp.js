import React, { useState } from "react";
import {
  Typography,
  TextField,
  TextareaAutosize,
  Grid,
  Button,
  Container,
  Divider,
  Box,
  Link,
  AppBar,
  Toolbar,
} from "@mui/material";
import google from "../Assets/google-tile.svg";
import discord from "../Assets/Discord.png";
import QR from "../Assets/QR.png";
import signUpBg from "../Assets/signUpBg.png";
import "./Signin.css";
import logo from "../Assets/logo.png";

const AppButton = {
  height: "60px",
  backgroundColor: "rgba(52, 168, 222, 1)",
  color: "black",
  borderRadius: "30px",
  "&:hover": {
    color: "white",
    backgroundColor: "rgba(52, 168, 222, 1)",
  },
  "@media (max-width: 425px)": {
    width: "90%",
    fontSize: "0.6rem",
    fontWeight: "500",
  },
};

export default function SignUp() {
  return (
    <div
      className="Sign_main"
      style={{
        backgroundImage: ` url(${signUpBg})`,
      }}
    >
      <div className="head">
        <AppBar
          position="fixed"
          className="Header"
          sx={{ backgroundColor: "rgba(0,0,0, 0)" }}
        >
          <Toolbar
            disableGutters
            className="mainNavbar"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0 6%",
            }}
          >
            <img src={logo} alt="Logo" className="webLogo" />

            <Box component="span" className="navBarcontact">
              <Button
                variant="contained"
                sx={AppButton}
                size="large"
                rounded={true}
                onClick={() => {}}
              >
                Download the app
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
      <div
        className="Sign_content"
        style={{
          background: "rgba(12, 12, 12, 0.8)",
          height: "80vh",
          width: "70vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // margin: "15vh 15vw",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20%",
            }}
          >
            Sign up on the app for 10x more features
          </Typography>
          <div style={{ maxWidth: "440px" }}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "310px",
                  height: "122px",
                  borderRadius: "24px",
                  backgroundColor: "rgba(52, 168, 222, 1)",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  // marginTop: "15%",
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
            </Grid>
            <Divider
              sx={{
                margin: "3% 0",
                "&::before, &::after": { bgcolor: "white" },
              }}
            >
              OR CONTINUE ON WEB
            </Divider>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                startIcon={<img src={google} width={"40px"} />}
                sx={{
                  width: "300px",
                  height: "50px",
                  borderRadius: "32px",
                  backgroundColor: "white",
                  color: "black",
                  marginBottom: "1%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                Sign In With Google
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                startIcon={<img src={discord} width={"40px"} />}
                sx={{
                  marginBottom: "1%",
                  width: "300px",
                  height: "50px",
                  border: "2px solid white",
                  borderRadius: "32px",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                SIGN IN WITH DiSCORD
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  marginBottom: "1%",
                  padding: "5px 15px",
                  width: "300px",
                  height: "50px",
                  border: "2px solid white",
                  borderRadius: "32px",
                  color: "white",
                }}
              >
                SIGN IN WITH EMAIL/USERNAME
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Have an account?
                <Link
                  href="#"
                  style={{
                    color: "rgba(52, 168, 222, 1)",
                    textDecoration: "none",
                  }}
                >
                  Sign in
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <p>
                By signing up you agree to our{" "}
                <Link
                  href="#"
                  style={{
                    color: "rgba(52, 168, 222, 1)",
                    textDecoration: "none",
                  }}
                >
                  terms{" "}
                </Link>
                and{" "}
                <Link
                  href="#"
                  style={{
                    color: "rgba(52, 168, 222, 1)",
                    textDecoration: "none",
                  }}
                >
                  privacy policy
                </Link>
              </p>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
