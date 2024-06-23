import React from "react";
import { AppBar, Box, Container, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import logo from "../Assets/logo.png";

export default function Header() {
  return (
    <Container>
      <AppBar
        position="fixed"
        className="Header"
        sx={{
          bgcolor: "white",
          borderTop: "4px solid #0087b0",
        }}
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

          <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Typography
              component="a"
              href="#"
              sx={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationColor: '#0087b0',
                },
              }}
            >
              Home
            </Typography>
            
            <Select
              defaultValue=""
              displayEmpty
              sx={{
                color: "black",
                border:'none',
                cursor: "pointer",
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationColor: '#0087b0',
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: "transparent",
                }
              }}
              renderValue={() => 'About Us'}
            >
              <MenuItem value="" disabled>About Us</MenuItem>
              <MenuItem value="overview">Overview</MenuItem>
              <MenuItem value="testimonial">Testimonial</MenuItem>
            </Select>

            <Select
              defaultValue=""
              displayEmpty
              sx={{
                color: "black",
                cursor: "pointer",
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationColor: '#0087b0',
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: "transparent",
                }
              }}
              renderValue={() => 'Services'}
            >
              <MenuItem value="" disabled>Services</MenuItem>
              <MenuItem value="overview">Overview</MenuItem>
              <MenuItem value="services-for-business">Services for Business</MenuItem>
              <MenuItem value="services-for-individuals">Services for Individuals</MenuItem>
              <MenuItem value="financial-planning">Financial Planning</MenuItem>
              <MenuItem value="specialist-service">Specialist Service</MenuItem>
            </Select>

            <Select
              defaultValue=""
              displayEmpty
              sx={{
                color: "black",
                cursor: "pointer",
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationColor: '#0087b0',
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: "transparent",
                }
              }}
              renderValue={() => 'Resources'}
            >
              <MenuItem value="" disabled>Resources</MenuItem>
              <MenuItem value="overview">Overview</MenuItem>
              <MenuItem value="your-businesses">Your Businesses</MenuItem>
              <MenuItem value="your-money">Your Money</MenuItem>
              <MenuItem value="tax-information">Tax Information</MenuItem>
              <MenuItem value="tax-strategies">Tax Strategies</MenuItem>
              <MenuItem value="interactive-tools">Interactive Tools</MenuItem>
            </Select>

            <Select
              defaultValue=""
              displayEmpty
              sx={{
                color: "black",
                cursor: "pointer",
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationColor: '#0087b0',
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: "transparent",
                }
              }}
              renderValue={() => 'News'}
            >
              <MenuItem value="" disabled>News</MenuItem>
              <MenuItem value="overview">Overview</MenuItem>
              <MenuItem value="business-news">Business News</MenuItem>
              <MenuItem value="hot-topics">Hot Topics</MenuItem>
            </Select>

            <Typography
              component="a"
              href="#"
              sx={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationColor: '#0087b0',
                },
              }}
            >
              Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
