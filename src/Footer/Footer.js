import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import logo from "../Assets/logo.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Button } from "@mui/material";
import styled from "styled-components";

export default function Footer() {
  const Wrapper = styled.section`
    Button {
      color: white;
    }
    .myLink{
      color:white;
      text-decoration: none;
      cursor: pointer;

      a{
        color:black;
      }
    }
   
  `;

  return (
    <Container maxWidth="xl" className="FooterSection">
    <Wrapper>
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
                <Link className="myLink" href="#">Home</Link>
              </ListItem>
              <ListItem>
                <Link className="myLink" href="#">Tournaments</Link>
              </ListItem>
              <ListItem>
                <Link className="myLink" href="#">FAQ</Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} md={2} lg={2}>
          <Box>
            <List>
              <ListItem>
                <Link className="myLink" href="#">The Portal</Link>
              </ListItem>
              <ListItem>
                <Link className="myLink" href="#">Careers</Link>
              </ListItem>
              <ListItem>
                <Link className="myLink" href="#">Contact</Link>
              </ListItem>
              <ListItem>
                <Link className="myLink" href="#">Disclaimer</Link>
              </ListItem>
              <ListItem>
                <Link className="myLink" href="#">LFG</Link>
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
                className="blogBtnTxt"
                size="small"
                //   endIcon={<MoreVertIcon/>}
              >
                Term Of Services
              </Button>
              <Button className="blogBtnTxt" size="small">
                Privacy Policy
              </Button>
           
          </Box>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Box sx={{ margin: "5% 0" }}>
            <Link sx={{ color: "white" }} href="#">
              ARENAS UNDERGROUND ©2023. ALL RIGHT RESERVED
            </Link>
          </Box>
        </Grid>
      </Grid>
      </Wrapper>
    </Container>
  );
}
