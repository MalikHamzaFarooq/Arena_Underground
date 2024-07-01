import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Typography, Button } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ffc107",
    },
  },
});

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Implement your form submission logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h4" sx={{ mb: 2, color: "#009bc9" }}>
          Contact form
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Send us your questions and queries using the quick contact form
          below...
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <TextField
              //   label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              sx={{
                width: "80%",
                border: "4px solid rgba(0, 152, 199, 0.15)",
                borderLeft: "105px solid rgba(0, 152, 199, 0.15)",
                "& fieldset": {
                  border: "none",
                },
              }}
              margin="normal"
              //   fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              //   label="Telephone"
              sx={{
                width: "80%",
                border: "4px solid rgba(0, 152, 199, 0.15)",
                borderLeft: "105px solid rgba(0, 152, 199, 0.15)",
                "& fieldset": {
                  border: "none",
                },
              }}
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              //   label="Email"
              sx={{
                width: "80%",
                border: "4px solid rgba(0, 152, 199, 0.15)",
                borderLeft: "105px solid rgba(0, 152, 199, 0.15)",
                "& fieldset": {
                  border: "none",
                },
              }}
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              //   label="Address"
              sx={{
                width: "80%",
                border: "4px solid rgba(0, 152, 199, 0.15)",
                borderLeft: "105px solid rgba(0, 152, 199, 0.15)",
                "& fieldset": {
                  border: "none",
                },
              }}
              name="address"
              value={formData.address}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              //   label="Message"
              sx={{
                width: "80%",
                border: "4px solid rgba(0, 152, 199, 0.15)",
                borderLeft: "105px solid rgba(0, 152, 199, 0.15)",
                "& fieldset": {
                  border: "none",
                },
              }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={2}
            />
          </Grid>
        </Grid>

        <FormControlLabel
          control={<Checkbox value="agree" color="primary" />}
          label="Enter the number above"
        />
        <Button variant="contained" color="primary" type="submit">
          Send Comments
        </Button>
      </form>
    </ThemeProvider>
  );
}

export default ContactForm;
