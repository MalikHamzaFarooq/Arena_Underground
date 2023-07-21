import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const SignUpButton = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "30px",
  marginRight: "15px",
  "&:hover": {
    color: "white",
    backgroundColor: "rgba(52, 168, 222, 1)",
  },
};

const SignInButton = {
  backgroundColor: "rgba(52, 168, 222, 1)",
  color: "black",
  borderRadius: "30px",
  marginRight: "15px",

  "&:hover": {
    color: "white",
    backgroundColor: "rgba(52, 168, 222, 1)",
  },
};

export default function Header() {
  return (
    <Container>
      <AppBar
        position="fixed"
        className="Header"
        sx={{ backgroundColor: "rgba(0,0,0, 0.5)" }}
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
            <Link to="/signUp" style={{ textDecoration: "none" }}>
              <Button
                sx={SignUpButton}
                variant="contained"
                size="large"
                rounded={true}
                onClick={() => {}}
              >
                Sign Up
              </Button>
            </Link>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={SignInButton}
                size="large"
                rounded={true}
                onClick={() => {}}
              >
                Sign IN
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
