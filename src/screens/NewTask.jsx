import React from "react";
import { Divider, Typography, Box, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import DatePicker from "../components/DatePicker";

const NewTask = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#0081CF10",
        minHeight: "90.8vh",
      }}
    >
      <Typography fontWeight="600" variant="h5" sx={{ py: 2 }}>
        Add New Task
      </Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Box sx={{ margin: "auto", py: 2, maxWidth: 500 }}>
        <form>
          <Typography variant="h6">Subject</Typography>
          <TextField
            fullWidth
            margin="dense"
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Typography variant="h6">Description</Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            margin="dense"
            id="outlined-basic"
            label="Description"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Typography variant="h6" sx={{ mb: 1 }}>
            Due Date
          </Typography>
          <DatePicker />
          <Box
            sx={{
              display: "flex",
              alignItems: "right",
              justifyContent: "flex-end",
              pt: 4,
            }}
          >
            <Button fullWidth sx={{ minWidth: 150 }} variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default NewTask;
