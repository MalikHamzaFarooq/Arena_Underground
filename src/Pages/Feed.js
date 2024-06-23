import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import calculatorImg from "../Assets/calculatorImg.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function BusinessNews () {
  const { ref, inView } = useInView({
    threshold: "0.3", //0.3= 30%
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,

        transition: {
          ease: "linear",
          duration: 1,
          delay: 0.5,
          // stiffness: "100",
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, x: "-10vw", duration: 1 });
    }
  }, [inView]);

  return (
    <Container >
      {/* <div className="compete-section" ref={ref}> */}

      <Grid container sx={{ display: "flex",margin:'4%' }}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingRight:'2%'
     
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#009bc9",
              lineHeight: 1.4,
              fontWeight: 200,
              fontSize: "24px",
              marginBottom: 3,
            }}
          >
            Here at Wheatley & Co Chartered Accountants, we go above and beyond
            the services of a standard chartered accountant: we pride ourselves
            on our innovative, holistic approach to getting to know your
            business.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#333333",
              fontSize: "16px",
              fontWeight: 200,
              lineHeight: 1.42857143,
              margin: "0 0 11px",
            }}
          >
            What’s more, Wheatley & Co Chartered Accountants offer clients
            flexible price structures, reflecting the high quality and
            individualised services we supply. For more information on our
            prices, please get in touch.{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#333333",
              fontSize: "24px",
              fontWeight: 200,
              lineHeight: 1.4,
              margin: "0 0 11px",
              fontSize: "16px",
              fontWeight: 200,
              lineHeight: 1.42857143,
            }}
          >
            So no matter whether you own a large company or you are an
            entrepreneur looking to start up in business, we have the
            accountancy solutions for you. To discover how Wheatley & Co
            Chartered Accountants can help you to maximise your business
            profitability and minimise your personal tax liability, please
            contact us. We would be delighted to work alongside you.{" "}
          </Typography>
        </Grid>

        <Grid item xs={12} md={5}>
          <img
            src={calculatorImg}
            alt="Image 1"
            style={{
              width: "90%",
        
            }}
          />
        </Grid>
      </Grid>
      {/* </div> */}
    </Container>
  );
}
