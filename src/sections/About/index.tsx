import React from "react";
import {
  Grid,
  Paper,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { Title } from "../../components/Title";
import vince from "./../../assets/vince.jpg";
import { useStyles } from "./styles";
import { about } from "./about.json";
import { Box } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";

type Props = {
  checked: boolean;
};

export const About: React.FC<Props> = ({ checked }) => {
  const classes = useStyles();

  return (
    <Box id="about">
      <div style={{ height: "50px" }} />
      <Title title={"About Me"} />

      {/* <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}> */}
      <Collapse in={true} {...(checked ? { timeout: 1000 } : {})}>
        <Grid container className={classes.root}>
          <Grid
            item
            xs={12}
            md={4}
            justify="center"
            container
            className={classes.me}
          >
            <img src={vince} alt="Vincent" />
          </Grid>

          <Grid item xs={12} md={8} justify="center" container>
            <Paper className={classes.description}>
              <Typography>{about.description}</Typography>
              <h2 className={classes.listTitle}>
                My experience includes,
              </h2>
              <List>
                {about.achievements.map((achievement: any) => (
                  <ListItem key={achievement.id} className={classes.listItem}>
                    <ListItemIcon>
                      <StarBorderIcon className={classes.achievementIcon} />
                    </ListItemIcon>
                    <ListItemText primary={achievement.detail} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
};
