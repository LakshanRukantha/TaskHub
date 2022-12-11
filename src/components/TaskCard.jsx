import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

const TaskCard = (props) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 350,
          minHeight: 300,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ p: 1 }}>
            <Typography variant="body1" component="h4" sx={{ p: 1 }}>
              {props.taskInfo.title}
            </Typography>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: 1,
              }}
            >
              <Chip
                icon={<EventIcon />}
                color="primary"
                size="small"
                label={props.taskInfo.status}
              />
              <Chip
                icon={<EventIcon />}
                color="primary"
                size="small"
                label={props.taskInfo.dueDate}
              />
            </Box>

            <Typography variant="h6" component="h4">
              {props.taskInfo.description}
            </Typography>
          </Box>
          <Box>
            <Button variant="contained">Delete</Button>
            <Button>Complete</Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TaskCard;
