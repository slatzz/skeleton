import React, { useState } from "react";
import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  AppBar,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  MenuItem,
  Menu,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    flexGrow: 1,
    margin: theme.spacing(3),
  },
}));

const Navbar = ({ theme }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <AppBar position="sticky" color={theme.palette.primary.main}>
      <Toolbar className={classes.toolbar}>
        <IconButton className={classes.menuButton}>
          <MenuSharpIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Krissy's Portfolio
        </Typography>
        <Grid>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/aboutkrissy" className={classes.link}>
            About Me
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
