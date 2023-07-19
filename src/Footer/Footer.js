import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import logo from "../Assets/logo.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Button } from "@mui/material";

export default function Footer() {
 
  const FooterBtn = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "rgba(52, 168, 222, 1)",
    },
    
  };

  const myLink = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "rgba(52, 168, 222, 1)",
    },
  };

  return (
    <Container maxWidth="xl" className="FooterSection">
      {/* <Wrapper> */}
      <Grid
        container
        className="FooterLinks"
        sx={{ justifyContent: "space-around", padding: "0 10%" }}
      >
        <Grid item xs={12} md={4} lg={4}>
          <Box>
            <img src={logo} alt="Algoreublic Logo" />
            <Box>
              <Link href="#">{/* <FacebookIcon/> */}</Link>
              <Link href="#">{/* <InstagramIcon /> */}</Link>
              <Link href="#">{/* <TwitterIcon /> */}</Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={2} lg={1}></Grid>
        <Grid item xs={6} md={2} lg={2}>
          <Box>
            <List>
              <ListItem>
                <Link sx={myLink} href="#">
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={myLink} href="#">
                  Tournaments
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={myLink} href="#">
                  FAQ
                </Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} md={2} lg={2}>
          <Box>
            <List>
              <ListItem>
                <Link sx={myLink} href="#">
                  The Portal
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={myLink} href="#">
                  Careers
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={myLink} href="#">
                  Contact
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={myLink} href="#">
                  Disclaimer
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={myLink} href="#">
                  LFG
                </Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 10%",
            }}
          >
            <p>
              Z League is not endorsed by, directly affiliated with, maintained
              or sponsored by Apple Inc, Activision Blizzard, Microsoft, Xbox,
              Sony, Playstation or Epic Games.All content, games titles, trade
              names and/or trade dress, trademarks, artwork and associated
              imagery are trademarks and/or copyright material of their
              respective owners.
            </p>
          </Box>
          <Box>
            <Button
              sx={FooterBtn}
              size="small"
              //   endIcon={<MoreVertIcon/>}
            >
              Term Of Services
            </Button>
            <Button sx={FooterBtn} size="small">
              Privacy Policy
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Box sx={{ margin: "5% 0" }}>
            <Link sx={myLink} href="#">
              ARENAS UNDERGROUND ©2023. ALL RIGHT RESERVED
            </Link>
          </Box>
        </Grid>
      </Grid>
      {/* </Wrapper> */}
    </Container>
  );
}
