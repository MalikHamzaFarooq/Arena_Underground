import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  Container,
  Divider,
  Box,
  Link,
  AppBar,
  Toolbar,
} from "@mui/material";

import { createStyles, makeStyles } from "@mui/styles";
import google from "../Assets/google-tile.svg";
import discord from "../Assets/Discord.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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

const useStyles = makeStyles((theme) =>
  createStyles({
    label: {
      // padding: 10,
      "& span": {
        color: "red",
      },
    },
    BoxInline: {
      flexDirection: "row",
      display: "flex",
    },
    BoxText: {
      display: "flex",
      // alignItems: 'center !important',
      marginTop: "8px",
      "& span": {
        color: "red",
        paddingLeft: 5,
      },
    },
  })
);

export default function SignIn() {
  const classes = useStyles();
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
            {/* <Box> */}
            <img
              src={logo}
              alt="Logo"
              className="webLogo"
              // style={{ width: "100px" }}
            />
            {/* </Box> */}

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
          }}
        >
          <div style={{ maxWidth: "440px" }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Sign in with Your Phone Number
            </Typography>
            <Grid item sx={{ marginBottom: "4px" }}>
              <Typography variant="subtitle1">
                Enter your phone number:
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
                // width:"100px"
              }}
            >
              <Box className={classes.BoxInline} pr={1} pl={1}>
                <Box className={classes.BoxText} pr={1}></Box>
                <Box>
                  <PhoneInput
                    specialLabel={""}
                    country={"th"}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "100% !important",
                    }}
                  />
                </Box>
              </Box>
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
                variant="contained"
                type="submit"
                sx={{
                  width: "300px",
                  height: "50px",
                  borderRadius: "32px",
                  backgroundColor: "rgba(52, 168, 222, 1)",
                }}
              >
                Submit
              </Button>
            </Grid>
            <Divider
              sx={{
                margin: "3% 0",
                "&::before, &::after": { bgcolor: "white" },
              }}
            >
              OR
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
                Need an account?
                <Link href="#" style={{ color: "rgba(52, 168, 222, 1)" }}>
                  Sign up
                </Link>
              </Typography>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
