import React, { useState, useEffect } from "react";
import {
  makeStyles,
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  MenuItem,
  Typography,
  Button,
  Link,
  Box,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "./routes.json";
import { useStyles } from "./styles";

import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

export const Navbar: React.FC<{ checked: boolean }> = ({ checked }) => {
  const {
    appbar,
    appbarPrimary,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Typography variant="h6" component="h1" className={logo}>
          Suho Kang
        </Typography>
        <div style={{ display: "flex" }}>
          <MenuItem style={{ color: "#000" }}>
            <MailOutlineIcon />
            <span style={{ marginLeft: ".3rem" }}>
              suho.vincent.kang@gmail.com
            </span>
          </MenuItem>
          <MenuItem style={{ color: "#000" }}>
            <AssignmentIndIcon />
            <a
              href="https://drive.google.com/file/d/1JzPmxLZ5EEuQ-bLpJp4PDxvyIdD0vj6E/view?usp=sharing"
              target="_blank"
              style={{
                marginLeft: ".3rem",
                textDecoration: "none",
                color: "#000",
              }}
            >
              Resume
            </a>
          </MenuItem>
          <MenuItem style={{ color: "#000" }}>
            <AssignmentIndIcon />
            <a
              href="https://drive.google.com/file/d/1wvQ-d385glT_BnRqoa9YoTuiolHsn_Us/view?usp=sharing"
              target="_blank"
              style={{
                marginLeft: ".3rem",
                textDecoration: "none",
                color: "#000",
              }}
            >
              Award IEEE
            </a>
          </MenuItem>
          <MenuItem style={{ color: "#000" }}>
            <AssignmentIndIcon />
            <a
              href="https://drive.google.com/file/d/1pshwlhBbLlSCY5xhpb5aaXL30PjI6k7T/view?usp=sharing"
              target="_blank"
              style={{
                marginLeft: ".3rem",
                textDecoration: "none",
                color: "#000",
              }}
            >
              Cover Letter
            </a>
          </MenuItem>
          {routes.map(({ label, href, external }, i) => {
            if (external) {
              return (
                <a
                  href={href}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  className={menuButton}
                  key={i}
                >
                  <MenuItem style={{ color: "#000" }}>
                    {label === "GitHub" && <GitHubIcon />}
                    {label === "Linked In" && <LinkedInIcon />}
                  </MenuItem>
                </a>
              );
            } else {
              return (
                <Button
                  {...{
                    key: i,
                    color: "inherit",
                    to: href,
                    component: RouterLink,
                    className: menuButton,
                  }}
                >
                  {label}
                </Button>
              );
            }
          })}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar style={{ color: "#000" }}>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <MenuItem style={{ color: "#000" }}>
              <MailOutlineIcon />
              <span style={{ marginLeft: ".3rem" }}>
                suho.vincent.kang@gmail.com
              </span>
            </MenuItem>
            <MenuItem style={{ color: "#000" }}>
              <AssignmentIndIcon />
              <a
                href="https://drive.google.com/file/d/1JzPmxLZ5EEuQ-bLpJp4PDxvyIdD0vj6E/view?usp=sharing"
                target="_blank"
                style={{
                  marginLeft: ".3rem",
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                Resume
              </a>
            </MenuItem>
            <MenuItem style={{ color: "#000" }}>
            <AssignmentIndIcon />
            <a
              href="https://drive.google.com/file/d/1wvQ-d385glT_BnRqoa9YoTuiolHsn_Us/view?usp=sharing"
              target="_blank"
              style={{
                marginLeft: ".3rem",
                textDecoration: "none",
                color: "#000",
              }}
            >
              Award IEEE
            </a>
          </MenuItem>
          <MenuItem style={{ color: "#000" }}>
            <AssignmentIndIcon />
            <a
              href="https://drive.google.com/file/d/1pshwlhBbLlSCY5xhpb5aaXL30PjI6k7T/view?usp=sharing"
              target="_blank"
              style={{
                marginLeft: ".3rem",
                textDecoration: "none",
                color: "#000",
              }}
            >
              Cover Letter
            </a>
          </MenuItem>
            {routes.map(({ label, href, external }, i) => {
              if (external) {
                return (
                  <a
                    href={href}
                    style={{ textDecoration: "none" }}
                    key={i}
                    target="_blank"
                  >
                    <MenuItem style={{ color: "#000" }}>
                      {label === "GitHub" && (
                        <GitHubIcon style={{ marginRight: "10px" }} />
                      )}
                      {label === "Linked In" && (
                        <LinkedInIcon style={{ marginRight: "10px" }} />
                      )}
                      {label}
                    </MenuItem>
                  </a>
                );
              } else {
                return (
                  <Link
                    {...{
                      component: RouterLink,
                      to: href,
                      color: "inherit",
                      style: { textDecoration: "none" },
                      key: i,
                    }}
                  >
                    <MenuItem>{label}</MenuItem>
                  </Link>
                );
              }
            })}
          </div>
        </Drawer>

        <div>
          <Typography variant="h6" component="h1" className={logo}>
            Suho Kang
          </Typography>
        </div>
      </Toolbar>
    );
  };

  return (
    <AppBar className={!checked ? appbar : appbarPrimary} elevation={0}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};
