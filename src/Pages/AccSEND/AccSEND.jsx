import React from "react";
import Slide2 from "../../Common/Slide2";
import { Box, Grid, Typography, Container,Button ,Divider} from "@mui/material";
import { Link } from "react-router-dom";
import mobile from "../../Assets/accsend-phone-app.png";
import apple from "../../Assets/apple-app-store.svg";
import google from "../../Assets/google-play-store.svg";
function AccSEND() {
  const heading = "accSEND  ";
  const label = "Access your secure area which allows us to share and store documents with you.  ";
  return (
    <>
      <Slide2 heading={heading} label={label} />
      <Container>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={12} md={8}>
            <Box sx={{ p: 2 }}>
              <Box   >

              <Typography variant="body1" sx={{ mb: 2,fontSize:'18px' }}>
              accSEND is our secure messaging tool. Built specifically for accountants, it allows us to securely share information and documents with our clients.
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, }}>
              To login please click on the button below. When you click on the button a new page will open allowing you to login, this page is secure and your username and password are protected.


              </Typography>
              <Button variant="contained" sx={{bgcolor:'#222222',padding:"10px",fontSize:'12px'}} >
                Launch accSEND

              </Button>
              </Box>
            
            <Divider  sx={{mt:2,mb:2}} />
              <Box  >


            
              <Typography variant="body2" sx={{ mb: 2}}>
              accSEND is free for you to use and works on PC, laptop or mobile.
              </Typography>
              <Box>

            <img src={apple} alt="apple-store" srcset="" width={'16%'} />
            <img src={google} alt="google-store" srcset="" width={'18%'} style={{marginLeft:'5px'}} />

              </Box>

              </Box>
             
            </Box>
            
          </Grid>
          <Grid item xs={12} md={4} sx={{ mt: 3 }}>
            <img src={mobile} alt="" srcset="" width={'60%'} />

          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}

export default AccSEND;
