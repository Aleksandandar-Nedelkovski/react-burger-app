import React from "react";
import classes from "./DrawerToogle.css";

const drawerToogle = (props) => (
  <div
    className={classes.DrawerToggle}
    onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
);

export default drawerToogle;