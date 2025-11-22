import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';

const About = () => {
  return (
    <div className="mx-auto container">
      <Box
        sx={{
          bgcolor: "red",
          fontSize: "20px",
        }}
      >
        <Typography
          variant="h2"
          color="white"
          textAlign={"center"}
          marginTop={2}
          fontWeight={"bold"}
        >
          leaerning MUI
        </Typography>
      </Box>

<Box sx={{marginTop:"20px",display:"flex",justifyContent:"space-between",gap:"5px"}}>

  <TextField fullWidth id="outlined-basic" label="Enter your name" variant="outlined" />
<Button variant="outlined"> <SearchIcon/>Search </Button>
</Box>
<Alert severity="warning">This is a success Alert.</Alert>

    </div>
  );
};

export default About;
