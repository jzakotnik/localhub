import React, { useState, useEffect } from "react";
import Child from "./Child";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ExploreIcon from "@material-ui/icons/Explore";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Slider from "@material-ui/core/Slider";
import Divider from "@material-ui/core/Divider";
import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { CallReceived } from "@material-ui/icons";
import FormGroup from "@material-ui/core/FormGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #aaeeaa 10%, #FFFFFF 90%)",
  },
  productParameters: {
    display: "flex",
    flexDirection: "row",
  },
  resultProbabilities: {
    display: "flex",
    flexDirection: "row",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    padding: "1px",
    spacing: "1px",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
  },
  labels: {
    padding: "5px",
  },
}));
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Made with ❤️ by Digital Office
    </Typography>
  );
}

const Confirmation = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <div className={classes.paper}>
          <Typography component="h2" variant="h5">
            Willkommen, Du bist eingecheckt!
          </Typography>
          <Avatar className={classes.avatar}>
            <ExploreIcon color="primary" />
          </Avatar>
        </div>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

function App() {
  const classes = useStyles();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCheckin = (event) => {
    console.log("checked in");
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return <div>{<Confirmation />}</div>;
  } else {
    return (
      <div>
        <Child handleCheckin={handleCheckin} />
      </div>
    );
  }
}

export default App;
