import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

function CustomCard({ title, subtitle, link }) {
  return (
    <Card
      sx={{ borderBottom: "5px solid #77cfe5", padding: "4%", cursor: "pointer" }}
      onClick={() => window.location.href = link}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: "30px", marginTop: "8px", color: "black", marginBottom: '15%' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "14px" }}
        >
          {subtitle}
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
        }}
      >
        <Typography variant="body2" color="text.secondary">
          date
        </Typography>
      </Box>
    </Card>
  );
}

export default CustomCard;
