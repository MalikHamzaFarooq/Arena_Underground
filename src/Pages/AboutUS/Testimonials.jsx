import React from "react";
import Slide2 from "../../Common/Slide2";
import { Box, Grid, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

function Testimonials() {
  const heading = "Testimonials ";
  const label = "See what our clients say about us. ";
  return (
    <>
      <Slide2 heading={heading} label={label} />
      <Container>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={12} >
            <Box sx={{ p: 2 }}>
              <Box  sx={{ paddingLeft: 2,borderLeft:'5px solid #A7A8AB' }}>

              <Typography variant="body1" sx={{ mb: 2,fontSize:'18px' }}>
                “Setting up your first business is a daunting experience that is
                full of challenges and pitfalls. There are quite literally a
                thousand things you need to think about right from the start,
                which are mostly things you’ve never done before, making it an
                extremely stressful time. When I set up my freelance copywriting
                business Wheatley and Co. oversaw the entire process and took
                the time to get to know my ambitions and offer a level of
                tailored support that best suited my needs. They have continued
                to provide an excellent service and offer step-by-step guidance
                all the way that has allowed me to keep my focus on my core
                activities. I would absolutely recommend them to any small
                business owner or start-up.”
              </Typography>
              <Typography variant="body2" sx={{ mb: 2,color:'#009bc9' }}>
              - James Falkner MA, Director, Words Guy Ltd.
              </Typography>
              </Box>
            
              <Box  sx={{ paddingLeft: 2,borderLeft:'5px solid #A7A8AB' }}>

              <Typography variant="body1" sx={{ mb: 2,fontSize:'18px' }}>

                “We have been clients of Wheatley and Co. the last ten years and
                very much appreciate their friendly, professional approach.
                Matters are always attended to promptly and thoroughly and their
                charging is fair and competitive.”
              </Typography>
              <Typography variant="body2" sx={{ mb: 2,color:'#009bc9' }}>
                 John and Jo, Ardingly
              </Typography>
              </Box>
             
            </Box>
            
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}

export default Testimonials;
