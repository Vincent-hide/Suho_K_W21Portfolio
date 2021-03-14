import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { ProjectCard } from "../../components/ProjectCard";
import { useWindowPosition } from "../../hooks/useWindowPosition";
import { Title } from "../../components/Title";
import { LangBarChart } from "../../components/LangBarChart";
import { projects } from "./projects.json";
import { useStyles } from "./style";

export const Project: React.FC = () => {
  const { chartWrapper, root } = useStyles();
  const checked = useWindowPosition("header");

  return (
    <Box>
      <Title title={"Projects/Work Samples"} />
      <div className={chartWrapper}>
        <LangBarChart />
      </div>

      <Grid container style={{ maxWidth: 1410, margin: "auto" }}>
        {projects.map((project) => (
          <Grid key={project.id} justify="center" container item md={6} sm={6} lg={4}>
            <ProjectCard checked={checked} project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
