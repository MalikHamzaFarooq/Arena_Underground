import React from "react";
import search from "../Assets/search.jpg";
import { TextField, Box, Container, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
});

const SearchField = styled(TextField)({
  maxWidth: "100%",
  width: "100%",
});

export default function SearchComponent() {
  return (
    <Box sx={{ bgcolor: "white", m: "4%" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img src={search} alt="searchImg" width="20%" />
      </Box>
      <SearchBox>
        <SearchField
          variant="outlined"
          placeholder="Search..."
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </SearchBox>
    </Box>
  );
}
