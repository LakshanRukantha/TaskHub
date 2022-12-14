import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { v4 as uuid4 } from "uuid";
import { Divider, Typography, Box, TextField, Button } from "@mui/material";
import { borderRadius, Container } from "@mui/system";
import AlertText from "../components/AlertText";
import background from "../assets/background.svg";

const NewTask = (props) => {
  const [message, setMessage] = useState("");

  const initialValues = {
    title: "",
    description: "",
    dueDate: "",
  };

  const onSubmit = (values, { resetForm }) => {
    const taskId = uuid4();
    const apiUrl = `${
      import.meta.env.VITE_FIREBASE_DB_URL
    }/tasks/${taskId}.json`;
    const task = { ...values, status: "New", task_id: taskId };

    axios
      .put(apiUrl, task)
      .then((response) => {
        if (response.status === 200) {
          setMessage("Task saved successfully.");
          resetForm({ values: "" });
        }
      })
      .catch((error) => {
        setMessage(`Something went wrong, error is ${error.message}`);
      });
  };

  const validate = (values) => {
    let errors = {};
    if (!values.title) {
      errors.title = "Title is required";
    }

    if (!values.description) {
      errors.description = "Description is required";
    }

    if (!values.dueDate) {
      errors.dueDate = "Due date is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Container
      sx={{
        background: "linear-gradient(to left, #56ccf270, #2f80ed70)",

        minHeight: "90.8vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography fontWeight="600" variant="h5" sx={{ py: 2 }}>
        Add New Task
      </Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Box
        sx={{
          margin: "auto",
          p: 1,
          backgroundColor: "#ffffff90",
          backdropFilter: "blur(10px)",
          border: "1px solid #00000020",
          borderRadius: 1,
          width: "100%",
          maxWidth: 500,
        }}
      >
        {message ? (
          <AlertText
            alertText={`${message}`}
            close={false}
            linkTo="/tasks"
            linkText=" - See all tasks."
          />
        ) : null}
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ pb: 1 }}>
            <Typography variant="h6">Subject</Typography>
            <TextField
              fullWidth
              error={formik.touched.title && formik.errors.title ? true : false}
              margin="dense"
              varient="outlined"
              id="outlined-basic"
              name="title"
              label="Subject"
              variant="outlined"
              inputProps={{ maxLength: 80 }}
              helperText={
                formik.touched.title && formik.errors.title
                  ? formik.errors.title
                  : null
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
          </Box>

          <Box sx={{ pb: 1 }}>
            <Typography variant="h6">Description</Typography>
            <TextField
              fullWidth
              error={
                formik.touched.description && formik.errors.description
                  ? true
                  : false
              }
              multiline
              rows={4}
              margin="dense"
              id="description"
              label="Description"
              variant="outlined"
              inputProps={{ maxLength: 160 }}
              helperText={
                formik.touched.description && formik.errors.description
                  ? formik.errors.description
                  : null
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
          </Box>
          <Box sx={{ pb: 1 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Due Date
            </Typography>
            <TextField
              fullWidth
              error={
                formik.touched.dueDate && formik.errors.dueDate ? true : false
              }
              type="date"
              className="form-control"
              id="dueDate"
              name="dueDate"
              helperText={
                formik.touched.dueDate && formik.errors.dueDate
                  ? formik.errors.dueDate
                  : null
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dueDate}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "right",
              justifyContent: "flex-end",
              pt: 4,
            }}
          >
            <Button fullWidth type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default NewTask;
