import React from "react";
import { Container, Divider, Typography, Box } from "@mui/material";

const Tasks = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#0081CF10",
        minHeight: "90.8vh",
      }}
    >
      <Typography fontWeight="600" variant="h5" sx={{ py: 2 }}>
        Current Tasks
      </Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Box></Box>
    </Container>
  );
};

export default Tasks;
