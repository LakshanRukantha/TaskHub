import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  CircularProgress,
} from "@mui/material";

import TaskCard from "../components/TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskUpdated, setTaskUpdated] = useState(false);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_FIREBASE_DB_URL}/tasks.json`;
    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setTasks(Object.values(response.data));
      } else setTasks(null);
    });
  }, [taskUpdated]);

  const handleComplete = (taskid) => {
    const apiUrl = `${
      import.meta.env.VITE_FIREBASE_DB_URL
    }/tasks/${taskid}.json`;
    axios.patch(apiUrl, { status: "Completed" }).then((response) => {
      if (response.status === 200) {
        setTaskUpdated(!taskUpdated);
      }
    });
  };

  const handleDelete = (taskid) => {
    const apiUrl = `${
      import.meta.env.VITE_FIREBASE_DB_URL
    }/tasks/${taskid}.json`;
    axios.delete(apiUrl).then((response) => {
      if (response.status === 200) {
        setTaskUpdated(!taskUpdated);
      }
    });
  };

  const displayTasks = () => {
    if (tasks === null)
      return (
        <>
          <span
            className="no-tasks"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              minHeight: "85vh",
              margin: "0 auto",
            }}
          >
            <Typography>No tasks to display!</Typography>
          </span>
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
        backgroundColor: "#0081CF10",
        minHeight: "90.8vh",
      }}
    >
      <Typography fontWeight="600" variant="h5" sx={{ py: 2 }}>
        Current Tasks
      </Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Box></Box>
      <Grid
        container
        spacing={2}
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ px: 2, mt: 2 }}
      >
        {displayTasks()}
      </Grid>
    </Container>
  );
}

export default Tasks;
