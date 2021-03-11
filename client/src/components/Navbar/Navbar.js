import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./style";
import memories from "../../images/memories.png";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <Typography variant="h2" align="center" className={classes.heading}>
        Memories
        <img src={memories} alt="memories" height="60" />
      </Typography>
    </AppBar>
  );
};

export default Navbar;
