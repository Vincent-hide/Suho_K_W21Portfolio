import React, { useState } from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

import { Title } from "../../components/Title";
import { useStyles } from "./styles";
import { interests } from "./interest.json";
import utils from "./utils";

export const Interest: React.FC = () => {
  const { container, paper, listContainer } = useStyles();
  const { iconSwitch } = utils;
  
  return (
    <Box>
      <Title title={"Interests"} />
      <Container maxWidth="lg" className={container}>
        <Paper className={paper}>
          <div className={listContainer}>
            <List>
              {interests.map(({id, title}: any) => (
                <ListItem key={id}>
                <ListItemIcon>{iconSwitch(id)}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
              ))}
            </List>
          </div>
        </Paper>
      </Container>
    </Box>
  );
};
