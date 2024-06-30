import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import laptopimg from "../Assets/laptopimg.jpg";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import "./Compete.css";

export default function WelcomeComponent() {
  // const { ref, inView } = useInView({
  //   threshold: "0.3", //0.3= 30%
  // });
  // const animation = useAnimation();
  // const animationRight = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: "0",
  //       opacity: "1",

  //       transition: {
  //         type: "linear",
  //         duration: 1.5,
  //         delay: 0.5,
  //         stiffness: "100",
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({ opacity: "0", x: "-50vw" });
  //   }
  //   if (inView) {
  //     animationRight.start({
  //       x: 0,
  //       opacity: "1",

  //       transition: {
  //         type: "linear",
  //         duration: 1.5,
  //         delay: 0.5,
  //         stiffness: 100,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animationRight.start({ opacity: "0", x: "50vw" });
  //   }
  // }, [inView]);

  return (
    <Container>
      <div className="compete-section"
      //  ref={ref}
       >
    

        <Grid container sx={{ display: "flex", flexDirection: "row" }}>
         
            <Grid
              container
              direction="column"
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ marginTop: "8%", color: "#999999", lineHeight: 1, textAlign:'center',fontSize:'30px' }}
              >
                Welcome to
              </Typography>
              <Typography
                variant="h3"
                sx={{ color: "#009bc9", lineHeight: 1.1, fontWeight: 600, textAlign:'center', }}
              >
                Stedman Accounts
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#333333",
                  fontSize: "24px",
                  fontWeight: 200,
                  lineHeight: 1.4,
                  margin: "0 0 11px",
                  display: "flex",
                  alignItems: "center",
                  textAlign:'center',
                  justifyContent: "center",
                  p:2,
                }}
              >
                Serving clients in the Hampton Court, Molesey and Kingston
                region of Surrey and the surrounding areas, Wheatley & Co
                Chartered Accountants supplies tailored accountancy and taxation
                services to private individuals and businesses.
              </Typography>
           
          </Grid>

          <Grid item xs={12}>
            <img
              src={laptopimg}
              alt="Image 1"
              style={{
                position: "relative",

                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

//order={{ xs: 2, sm: 1 }}
