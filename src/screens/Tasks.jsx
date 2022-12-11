import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Typography, Box, Divider } from "@mui/material";

import TaskCard from "../components/TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskUpdated, setTaskUpdated] = useState(false);

  useEffect(() => {
    const apiUrl =
      "https://react-firebase-6ae07-default-rtdb.firebaseio.com/tasks.json";
    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setTasks(Object.values(response.data));
      } else setTasks(null);
    });
  }, [taskUpdated]);

  const handleComplete = (taskid) => {
    const apiUrl = `https://react-firebase-6ae07-default-rtdb.firebaseio.com/tasks/${taskid}.json`;
    axios.patch(apiUrl, { status: "Completed" }).then((response) => {
      if (response.status === 200) {
        setTaskUpdated(!taskUpdated);
      }
    });
  };

  const handleDelete = (taskid) => {
    const apiUrl = `https://react-firebase-6ae07-default-rtdb.firebaseio.com/tasks/${taskid}.json`;
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
            <p>No tasks to display!</p>
          </span>
        </>
      );
    if (tasks.length === 0)
      return (
        <>
          <span
            className="loading"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            Loading...
          </span>
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
        About
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
