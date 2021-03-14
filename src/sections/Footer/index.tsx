import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import vince from "../../assets/vince.jpg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

export const Footer: React.FC = () => {
  const { root, box, personal } = useStyles();
  return (
    <Box className={root}>
      <Box className={box}>
        <Avatar src={vince} alt="me" />
        <Typography className={personal}>
          Suho Kang
        </Typography>
      </Box>

      <Box>
        <Box className={box}>
          <MailOutlineIcon />
          <Typography className={personal}>
            suho.vincent.kang@gmail.com
          </Typography>
        </Box>
        <Box className={box}>
          <PhoneIphoneIcon />
          <Typography className={personal}>
            +1 647 574 7559
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
