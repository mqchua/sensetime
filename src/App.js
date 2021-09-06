
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Toolbar } from '@material-ui/core';

import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Contact from './components/Contact';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: "900px",
    width: "100%",
    padding: "3rem",
  },
  divCenter: {
    display:"flex",
    justifyContent: "center"
  },
  bgColor: {
    backgroundColor: "#FFFAF2",
    boxShadow: "none",
    color: "#000000",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">

    <Router position="static">

      <div className= {classes.bgColor}>
        <div className={classes.divCenter}>
          <Toolbar className={classes.container}>
              <Grid container justify="center" className={classes.outline}>
                <Button component={Link} to="/">Task 1</Button>
                <Button component={Link} to="/task2">Task 2</Button>
                <Button component={Link} to="/task3">Task 3</Button>
                <Button component={Link} to="/contact">Contact</Button>
              </Grid>
          </Toolbar>
        </div>
      </div>

      <Switch>
        <Route exact path='/' component={Task1} />
        <Route path='/task2' component={Task2} />
        <Route path='/task3' component={Task3} />
        <Route path='/contact' component={Contact} />
      </Switch>

    </Router>

    </div>
  );
}

export default App;
