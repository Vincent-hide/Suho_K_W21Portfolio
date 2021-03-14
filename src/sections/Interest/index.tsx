import React, { useState } from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

import { Title } from "../../components/Title";
import { useStyles } from "./styles";
import { interests } from "./interest.json";
import utils from "./utils";

import entiryFilter from "../../assets/projects/entityFilter.jpg";
import tms from "../../assets/projects/tms.jpg";
import studentRegistration from "../../assets/projects/studentRegistration.jpg";
import erd from "../../assets/projects/erd.jpg";
import business from "../../assets/projects/businessModal.jpg";
import wireframe from "../../assets/projects/wireframe.jpg";

export const Interest: React.FC = () => {
  const { container, paper, listContainer } = useStyles();
  const { iconSwitch } = utils;

  return (
    <Box>
      <Title title={"Capstones"} />
      <Container maxWidth="lg" className={container}>
        <Paper className={paper}>
          <Box display="flex" justifyContent="center">
            <Typography variant={"h4"}>Project Summary</Typography>
          </Box>
          <Box m={3}>
            <Grid container alignItems="center" justify="space-around">
              <Grid item xs={12} md={5} justify="center">
                <Typography>
                  This software system will be a Tutoring Management System for
                  a community centre called Working Women Community Centre,
                  located in Toronto. The system will be designed to maximize
                  the Program Coordinators’ productivity by providing tools to
                  assist in automating CRUD operations, creating tutoring groups
                  (student/tutor matching), scheduling tutoring sessions, and
                  generating reports.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5} justify="center">
                <Typography paragraph>
                  The CRUD operations will be necessary to allow the program
                  coordinators to manage information about the system users
                  (student, tutor, guardian, program coordinator) and other
                  program’s information as tutoring location. The system will
                  also allow the program coordinator to combine several filters
                  to find the best matches between students and tutors, which
                  will then make possible the creation of tutoring groups and
                  scheduling sessions with the groups created. Besides that, the
                  system will allow the program coordinators to generate custom
                  reports.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <div className={listContainer}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <img width={300} src={entiryFilter} alt="capstone1" />
              </Grid>
              <Grid item xs={12} md={4}>
                <img width={300} src={tms} alt="capstone2" />
              </Grid>
              <Grid item xs={12} md={4}>
                <img width={300} src={studentRegistration} alt="capstone3" />
              </Grid>
            </Grid>
          </div>

          <Box display="flex" justifyContent="center">
            <Typography variant={"h4"}>Project Context</Typography>
          </Box>
          <Box m={3}>
            <Grid container alignItems="center" justify="space-around">
              <Grid item xs={12} md={5} justify="center">
                <Typography>
                  The focus of The Tutoring Management System is to be the main
                  tool to be used to manage the tutoring program. Therefore, it
                  will handle the most strategic use cases as registering all of
                  the beneficiaries of the tutoring program, facilitating the
                  creation of best matches between students and tutors, and
                  scheduling the tutoring sessions. Other use cases that are not
                  needed so often by the organization, but not less important as
                  generating user-tailored reports will also be handled by the
                  system.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5} justify="center">
                <img width={300} src={erd} alt="capstone2" />
              </Grid>
            </Grid>
          </Box>

          <Box display="flex" justifyContent="center">
            <Typography variant={"h4"}>Business Modal & Wireframe</Typography>
          </Box>
          <Box m={3}>
            <Grid container alignItems="center" justify="space-around">
              <Grid item xs={12} md={5} justify="center">
                <img width={300} src={business} alt="capstone2" />
                <img width={300} src={wireframe} alt="capstone2" />
              </Grid>
              <Grid item xs={12} md={5} justify="center">
                <Typography>
                  There will be pre-formatted forms to create new users in the
                  system. The creation of tutoring groups will be done through
                  an interface where the program coordinator will be able to
                  filter students (e.g., by grade-level, subject) and the system
                  will display a list of tutors that have a match with the same
                  criteria. After creating the tutoring groups, the system
                  should allow the creation and scheduling of the tutoring
                  sessions, which will be seen in a calendar and list type of
                  view. The system will also generate user-definable reports
                  based on users’ properties, groups, and sessions. At the same
                  time that the system will maximize the work efficiency of the
                  Program Coordinators, attending the client’s requirements, the
                  system will also be easy to use and free of charge
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
