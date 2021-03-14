import js from "../../assets/icons/js.png";
import java from "../../assets/icons/java.png";
import c from "../../assets/icons/c.png";
import cs from "../../assets/icons/cs.png";
import ts from "../../assets/icons/ts.png";
import py from "../../assets/icons/py.png";
import react from "../../assets/icons/react.png";
import django from "../../assets/icons/django.png";
import graphql from "../../assets/icons/graphql.png";
import nest from "../../assets/icons/nest.png";
import express from "../../assets/icons/express.png";
import mongo from "../../assets/icons/mongo.png";
import psql from "../../assets/icons/psql.png";

import ds from "../../assets/projects/ds.jpg";
import pathFinding from "../../assets/projects/pathfinding.jpg";
import merng from "../../assets/projects/mern.png";
import taskManagement from "../../assets/projects/taskManagement.jpg";
import tictactoe from "../../assets/projects/tictactoe.jpg";
import tms from "../../assets/projects/tms.jpg";
import { Icons, Projects } from "../../enums";

export default {
  iconHelper: (icon: string) => {
    switch (icon) {
      case Icons.JS:
        return js;

      case Icons.JAVA:
        return java;

      case Icons.TS:
        return ts;

      case Icons.C:
        return c;

      case Icons.CPP:
        return cs;

      case Icons.PY:
        return py;

      case Icons.REACT:
        return react;

      case Icons.DJANGO:
        return django;

      case Icons.GRAPHQL:
        return graphql;

      case Icons.NEST:
        return nest;

      case Icons.MONGO:
        return mongo;

      case Icons.PSQL:
        return psql;

      case Icons.EXPRESS:
        return express;

      default:
        return;
    }
  },

  appImgHelper: (project: number) => {
    switch (project) {
      case Projects.DS:
        return ds;

      case Projects.PF:
        return pathFinding;

      case Projects.MERNG:
        return merng;

      case Projects.TTT:
        return tictactoe;

      case Projects.TM:
        return taskManagement;

      case Projects.TMS:
        return tms;

      default:
        return;
    }
  },
};
