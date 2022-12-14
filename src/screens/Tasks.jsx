import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Typography,
  Divider,
  CircularProgress,
  Backdrop,
  Stack,
  Alert,
} from "@mui/material";

import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskUpdated, setTaskUpdated] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_FIREBASE_DB_URL}/tasks.json`;
    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setTasks(Object.values(response.data));
      } else setTasks(null);
    });
  }, [taskUpdated]);

  const handleComplete = (taskid) => {
    setIsLoading(true);
    const apiUrl = `${
      import.meta.env.VITE_FIREBASE_DB_URL
    }/tasks/${taskid}.json`;
    axios.patch(apiUrl, { status: "Completed" }).then((response) => {
      if (response.status === 200) {
        setIsLoading(false);
        setTaskUpdated(!taskUpdated);
      }
    });
  };

  const handleDelete = (taskid) => {
    setIsLoading(true);
    const apiUrl = `${
      import.meta.env.VITE_FIREBASE_DB_URL
    }/tasks/${taskid}.json`;
    axios.delete(apiUrl).then((response) => {
      if (response.status === 200) {
        setIsLoading(false);
        setTaskUpdated(!taskUpdated);
      }
    });
  };

  const displayTasks = () => {
    if (tasks === null)
      return (
        <>
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Alert severity="info">
              No tasks to display! Click <Link to="/newtask">here</Link> to add
              new task.
            </Alert>
          </Stack>
        </>
      );
    if (tasks.length === 0)
      return (
        <>
          <CircularProgress
            sx={{ margin: "0 auto", animationDuration: "400ms" }}
            color="primary"
          />
        </>
      );
    else
      return tasks.map((task) => {
        return (
          <TaskCard
            key={task.task_id}
            taskInfo={task}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        );
      });
  };

  return (
    <Container
      sx={{
        background:
          "linear-gradient(to left, #56ccf270, #2f80ed70)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        minHeight: "90.8vh",
        pb: 2,
      }}
    >
      <Typography fontWeight="600" variant="h5" sx={{ py: 2 }}>
        Current Tasks
      </Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ display: { md: { px: 2, spacing: 2 } }, mt: 2 }}
      >
        {displayTasks()}
      </Grid>
    </Container>
  );
}

export default Tasks;
