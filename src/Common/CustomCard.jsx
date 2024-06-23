import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material';

function CustomCard() {
  return (
    <Card sx={{  borderBottom: "5px solid #77cfe5",padding:'4%' }}>
    <CardContent sx={{textAlign:'center'}}>
      <Typography variant="h5" component="div">
        {/* {title} */}
        Inflation at lowest level in almost three years, data shows
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {/* {subtitle} */}
        Data published by the Office for National Statistics (ONS) has
        revealed that the UK inflation rate has fallen to its lowest level
        in almost three years.
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
        color:'red'
      }}
    >
       <Typography variant="body2" color="text.secondary">
        {/* {date} */}
        date
      </Typography>
    </Box>
  </Card>
  )
}

export default CustomCard