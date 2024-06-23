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
    <Container maxWidth="xl" className="FooterSection" sx={{background: 'linear-gradient(to bottom, rgba(0, 155, 201, 0.9) 0%, #007496 100%)',paddingTop:'2'
    }} >
      
      <Grid
        container
        className="FooterLinks"
        sx={{ justifyContent: "space-around", paddingTop:5  }}
      >
        <Grid item xs={12} md={4} lg={4}>
          <Box>
            © 2024 Wheatley & Co Accountants Ltd. All rights reserved.
            <p>
              We use cookies on this website, you can find more information
              about cookies here.
            </p>
            <Box>
              <Link href="#">{/* <FacebookIcon/> */}</Link>
              <Link href="#">{/* <InstagramIcon /> */}</Link>
              <Link href="#">{/* <TwitterIcon /> */}</Link>
            </Box>
          </Box>
        </Grid>
       
        <Grid item xs={6} md={2} lg={2}>
          <Box>
            <List>
              <ListItem>
                <Link sx={myLink} href="#">
                  Please call: 020 8941 2753
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={myLink} href="#">
                  Or email us: mail@wheatleyaccountants.co.uk
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
                Home | Contact us | Site map | Accessibility | Disclaimer | Help |
                </Link>
              </ListItem>
                         </List>
          </Box>
        </Grid>
   

        <Grid item xs={12} md={12} lg={12}>
          <Box sx={{ margin: "5% 0" }}>
            <Link sx={myLink} href="#">
            
            </Link>
          </Box>
        </Grid>
      </Grid>
      {/* </Wrapper> */}
    </Container>
  );
}
