import React from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import GradeIcon from "@mui/icons-material/Grade";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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
      <Card
        elevation={1}
        outline={props.taskInfo.status === "Completed" ? "success" : null}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          wordBreak: "break-word",
          maxWidth: 350,
          width: 350,
          mb: 1.5,
          p: 1,
          minHeight: 260,
        }}
      >
        <Grid
          item
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                minHeight: 60,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body1"
                component="h4"
                color="inherit"
                sx={{ pb: 1 }}
              >
                {props.taskInfo.title}
              </Typography>
            </Box>

            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: 1,
              }}
            >
              <Chip
                sx={{ fontSize: 12 }}
                icon={
                  props.taskInfo.status === "New" ? (
                    <GradeIcon />
                  ) : (
                    <CheckCircleOutlineIcon />
                  )
                }
                color={props.taskInfo.status === "New" ? "primary" : "success"}
                size="small"
                label={props.taskInfo.status}
              />
              <Chip
                sx={{ fontSize: 12 }}
                icon={<EventIcon />}
                color="primary"
                size="small"
                label={props.taskInfo.dueDate}
              />
            </Box>

            <Box sx={{ my: 1, minHeight: 100 }}>
              <Typography variant="body1" color="text.secondary">
                {props.taskInfo.description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              gap: 1,
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="outlined"
              color="error"
              onClick={() => props.onDelete(props.taskInfo.task_id)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              onClick={() => props.onComplete(props.taskInfo.task_id)}
            >
              Complete
            </Button>
          </Box>
        </Grid>
      </Card>
    </Grid>
  );
};

export default TaskCard;
