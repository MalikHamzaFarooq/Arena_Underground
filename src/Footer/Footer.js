import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Footer() {
  const myLink = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      // color: "rgba(52, 168, 222, 1)",
    },
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom, rgba(0, 155, 201, 0.9) 0%, #007496 100%)",
        height: "215px",
      }}
    >
      <Grid container justifyContent="center" spacing={3} sx={{marginTop:'4'}}>
        <Grid item xs={12} sm={6} md={3} sx={{ marginLeft: 1 }}>
          <Box sx={myLink}>
            <Typography>
              © 2024 Wheatley & Co Accountants Ltd. All rights reserved.
            </Typography>
            <Typography>
              We use cookies on this website, you can find more information
              about cookies here.
            </Typography>

            <Box>
              <Link href="#">{/* <FacebookIcon/> */}</Link>
              <Link href="#">{/* <InstagramIcon /> */}</Link>
              <Link href="#">{/* <TwitterIcon /> */}</Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={myLink}>
          <Typography>Please call: </Typography>
          <Typography>020 8941 2753 </Typography>

          <Typography sx={{marginTop:'2'}}>Or email us:</Typography>
            
          <Typography>
             mail@wheatleyaccountants.co.uk</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <List>
              <ListItem>
                <Link sx={myLink} href="#">
                  Home | Contact us | Site map | Accessibility | Disclaimer |
                  Help |
                </Link>
              </ListItem>
              <Typography sx={myLink}>
                Bridge House, 11 Creek Road, Hampton Court, East Molesey, KT8
                9BE. Registration number 08130849.
              </Typography>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}></Grid>
      </Grid>
    </Box>
  );
}
