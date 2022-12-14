import React from "react";
import { Container, Divider, Typography, Box, Alert } from "@mui/material";
import background from "../assets/background.svg";

const Home = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#0081CF10",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        minHeight: "91vh",
      }}
    >
      <Typography fontWeight="600" variant="h5" sx={{ py: 2 }}>
        Home
      </Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Box>
        <Alert
          severity="info"
          sx={{ display: "flex", maxWidth: 500, mx: "auto", mt: 2 }}
        >
          Page is under development. Please check back later.
        </Alert>
      </Box>
    </Container>
  );
};

export default Home;
