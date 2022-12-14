import React from "react";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import AddTaskIcon from "@mui/icons-material/AddTask";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import background from "../assets/background.svg";

const About = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#0081CF10",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "92vh",
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "#ffffff10",
          backdropFilter: "blur(5px)",
          border: "1px solid #00000020",
          borderRadius: 1,
          p: 2,
          minHeight: "80vh",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <AddTaskIcon fontSize="large" />
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            TaskHub
          </Typography>
          <Typography
            variant="h1"
            component="h6"
            sx={{
              textAlign: "center",
              marginTop: "0.5rem",
              fontSize: "0.8rem",
            }}
          >
            Version: 0.1.0
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            component="h6"
            sx={{ textAlign: "center", fontSize: "1rem" }}
          >
            Developer: Lakshan Rukantha
          </Typography>
          <Typography
            variant="h1"
            component="h6"
            sx={{
              textAlign: "center",
              marginTop: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
          >
            Undergraduate student in NSBM Green University - BSc (Hons) in
            Software Engineering
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Stack sx={{ marginTop: "0.5rem" }} direction="row" spacing={2}>
            <a href="https://lakshanrukantha.github.io/" target="blank">
              <LanguageIcon color="action" />
            </a>
            <a href="https://github.com/LakshanRukantha" target="blank">
              <GitHubIcon color="action" />
            </a>
            <a href="https://lk.linkedin.com/in/lakshanrukantha" target="blank">
              <LinkedInIcon color="action" />
            </a>
            <a href="https://facebook.com/LakshanRukantha.LaKi" target="blank">
              <FacebookIcon color="action" />
            </a>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
