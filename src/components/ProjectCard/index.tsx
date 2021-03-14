import React, { useState } from "react";
import clsx from "clsx";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Button,
  Box,
  Avatar,
  IconButton,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useHistory, BrowserRouter } from "react-router-dom";
import { useStyles } from "./style";
import GitHubIcon from "@material-ui/icons/GitHub";
import DevicesIcon from "@material-ui/icons/Devices";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import utils from "./uitls";

interface Props {
  checked: boolean;
  project: any;
}

export const ProjectCard: React.FC<Props> = ({ checked, project }) => {
  const history = useHistory();
  const [expanded, setExpanded] = useState<boolean>(false);

  const {
    root,
    media,
    projectFooter,
    programmingLang,
    gitIcon,
    expand,
    expandOpen,
    cardContent
  } = useStyles();
  const { id, title, description, link, git, icons, details } = project;
  const { iconHelper, appImgHelper } = utils;

  const handleUrl = () => {
    console.log(history, "history");
    // history.push(git);
  };

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={root}>
        {/* <CardActionArea> */}
        <CardMedia className={media} image={appImgHelper(id)} />
        <CardContent className={cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}

        <CardActions className={projectFooter}>
          <Box className={programmingLang}>
            {icons.map((icon: string) => (
              <Avatar
                key={icon}
                style={{ height: "35px", width: "35px" }}
                src={iconHelper(icon)}
              />
            ))}
          </Box>

          {(link || git || details) && (
            <Box>
              {link && (
                <IconButton>
                  <a href={link} target="_blank" className={gitIcon}>
                    <DevicesIcon />
                  </a>
                </IconButton>
              )}

              {git && (
                <IconButton>
                  <a href={git} target="_blank" className={gitIcon}>
                    <GitHubIcon />
                  </a>
                </IconButton>
              )}

              {details && (
                <IconButton
                  className={clsx(expand, {
                    [expandOpen]: expanded,
                  })}
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  {/* margin: to make a card same hight as others albeit it does not have github link */}
                  <ExpandMoreIcon style={{ margin: "1.7px" }} />
                </IconButton>
              )}
            </Box>
          )}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Details:</Typography>
            <Typography paragraph>{details}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Collapse>
  );
};
