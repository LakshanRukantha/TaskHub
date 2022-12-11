import React from "react";
import { Container, Divider, Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#0081CF10",
        minHeight: "90.8vh",
      }}
    >
      <Typography fontWeight="600" variant="h5" sx={{ py: 2 }}>
        Home
      </Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Box></Box>
    </Container>
  );
};

export default Home;
