import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Switch from "@material-ui/core/Switch";
import { useParams } from "react-router-dom";

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
import OfflinePinIcon from "@material-ui/icons/OfflinePin";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Made with ❤️ by Digital Office
    </Typography>
  );
}

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
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  labels: {
    padding: "5px",
  },
}));

const Child = () => {
  function valuetext(value) {
    return `${value}`;
  }

  const marks = [
    {
      value: 10,
      label: "10 km",
    },
    {
      value: 30,
      label: "30 km",
    },
    {
      value: 50,
      label: "50 km",
    },
    {
      value: 70,
      label: "70 km",
    },
    {
      value: 90,
      label: "90 km",
    },
  ];
  const [savedDistance, setSavedDistance] = useState(0);
  const [savedCO2, setSavedCO2] = useState(0);
  const [travel, setTravel] = useState({
    car: false,
    bike: true,
    public: false,
  });

  const classes = useStyles();
  let { id, location } = useParams();

  useEffect(() => {
    console.log("Starting web app and loading..");
  }, []);

  useEffect(() => {
    //console.log("Refreshing calculation");
    calcCO2();

    return () => {};
  }, [savedDistance]);

  const calcCO2 = () => {
    setSavedCO2(savedDistance * 0.15);
  };

  const handleTravelChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.checked);
    setTravel({ ...travel, [event.target.name]: event.target.checked });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <div className={classes.paper}>
          <Typography component="h2" variant="h5">
            Local-Hub Check-in
          </Typography>
          <Avatar className={classes.avatar}>
            <ExploreIcon color="primary" />
          </Avatar>
          <Typography component="h4" variant="h7">
            Willkommen, <b>{id}</b>
          </Typography>
          <div className={classes.typography}>
            <div className={classes.productParameters}>
              <TextField
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                name="location"
                label="Gespartes CO2 in 2021"
                id="location"
                value="1,2 Tonnen"
              />
              <TextField
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                name="voucher"
                label="Verbleibende Voucher"
                id="voucher"
                value={"10"}
              />
            </div>
            <Typography component="h4" variant="h7">
              Meine Verkehrsmittel heute waren
            </Typography>
            <FormGroup column>
              <FormControlLabel
                control={
                  <Switch
                    checked={travel.car}
                    onChange={handleTravelChange}
                    name="car"
                  />
                }
                label="Auto"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={travel.bike}
                    onChange={handleTravelChange}
                    name="bike"
                  />
                }
                label="Fahrrad"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={travel.public}
                    onChange={handleTravelChange}
                    name="public"
                  />
                }
                label="ÖPNV"
              />
            </FormGroup>
            <Typography component="h4" variant="h7">
              Wieviele Kilometer hast Du heute gespart?
            </Typography>
            <Slider
              defaultValue={20}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={5}
              marks={marks}
              min={0}
              max={100}
              onChange={(event, newValue) => {
                setSavedDistance(newValue);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              name="savedCO2"
              label="Gesparte CO2 mit diesem Besuch"
              id="savedCO2"
              value={savedCO2}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<OfflinePinIcon />}
              href="/checked"
            >
              Check-In
            </Button>
          </div>
        </div>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default Child;
