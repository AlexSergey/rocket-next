import React from "react";
import Router from './router';
import styles from './assets/reset.css';
import withStyles from './isomorphic/withStyles';

function App() {
    return <Router />
}

export default withStyles(styles)(App);
