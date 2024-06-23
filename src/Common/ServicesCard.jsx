import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { IoUmbrellaOutline } from "react-icons/io5";

function ServicesCard() {
  return (
    <Card sx={{  padding: "44px",maxWidth:'50' }}>
      <CardContent sx={{ textAlign: "center" }}>
      <IoUmbrellaOutline  style={{ fontSize: '50px', marginBottom: '10px' }} />

        <Typography variant="h5" component="div"  sx={{color:"#77cfe5",marginBottom: '10px',
    fontSize: '32px'}} >
          {/* {title} */}
          Services for Individuals
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {subtitle} */}
          We provide bespoke accountancy and tax services to private
          individuals. We can also provide Financial Planning support.
        </Typography>
      </CardContent>
      <Box
        sx={{
          borderRadius: "10px 0 0",
          lineHeight: "normal",
          float: "none",
          width: "auto",
          height: "auto",
          margin: 0,
          background: "#77cfe5",
          padding: "5px",
          position: "absolute",
          right: 0,
          bottom: "-5px",
          color: "red",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {/* {date} */}
          date
        </Typography>
      </Box>
    </Card>
  );
}

export default ServicesCard;
