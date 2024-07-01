import React from "react";
import Slide2 from "../../Common/Slide2";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import mobile from "../../Assets/accsend-phone-app.png";
import apple from "../../Assets/apple-app-store.svg";
import google from "../../Assets/google-play-store.svg";
import ContactForm from "./ContactForm";
function ContactUS() {
  const heading = "Contact US  ";

  return (
    <>
      <Slide2 heading={heading} />
      <Container>
        <Typography variant="h4" sx={{ mb: 2,color:'#009bc9' }}>
          Please feel free to get in touch...
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <Box>
                <Typography variant="h4" sx={{ mb: 2,color:'#009bc9' }}>
                  Contact details
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Tel: 020 8941 2753
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Fax: 020 8941 8586
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, }}>
                  Email: <Link>mail@wheatleyaccountants.co.uk</Link>
                </Typography>

                {/* <Button variant="contained" sx={{bgcolor:'#222222',padding:"10px",fontSize:'12px'}} >
                Launch accSEND

              </Button> */}
                <Typography variant="h4" sx={{ mb: 2,color:'#009bc9' }}>
                  Address
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Stedman Accountants
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Bridge House
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  11 Creek Road
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  East Molesey
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Surrey
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  KT8 9BE
                </Typography>
              </Box>

              <Box>
              <Typography variant="h4" sx={{ mb: 2,color:'#009bc9' }}>
                Location Map

                </Typography>
                <Box>
                  <img src={apple} alt="apple-store" srcset="" width={"16%"} />
                  <img
                    src={google}
                    alt="google-store"
                    srcset=""
                    width={"18%"}
                    style={{ marginLeft: "5px" }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: 3 }}>
            <ContactForm/>
            {/* <img src={mobile} alt="" srcset="" width={"60%"} /> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ContactUS;
