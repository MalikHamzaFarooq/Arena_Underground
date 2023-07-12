import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import logo from "../Assets/logo.png";
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
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "30px",
                marginRight: "15px",
              }}
              size="large"
              rounded={true}
              onClick={() => {}}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(52, 168, 222, 1)",
                color: "black",
                borderRadius: "30px",
              }}
              size="large"
              rounded={true}
              onClick={() => {}}
            >
              Sign IN
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
