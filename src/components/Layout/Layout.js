import React from "react";

import Aux from "../../hoc/Aux";
import classes from "./Layout.css"
import Backdrop from "../UI/Backdrop/Backdrop";

const layout = (props) => (
  <Aux>
    <div> Toolbar, Sidedrawer, Backdrop </div>
    <Backdrop>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Backdrop>
  </Aux>
)

export default layout;