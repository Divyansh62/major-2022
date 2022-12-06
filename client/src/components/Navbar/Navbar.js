import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
import moments from "../../images/moments.png";
import moments2 from "../../images/book.jpg";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import "./Navbar.css";

const Navbar = () => {
  const classes = useStyles();

  // anurag
  const navigateEvents = () => {
    navigate("/events");
  };
  // anurag

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <img
          className={classes.image}
          src={moments2}
          alt="moments"
          height="40px"
        />
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          style={{ color: "#000000" }}
          variant="h3"
          align="center"
        >
          : LEARNING MANAGEMET SYSTEM :
        </Typography>
        <img
          className={classes.image}
          src={moments}
          alt="moments"
          height="40px"
        />
      </div>

      {/* anurag */}
      <button className="button-25" onClick={navigateEvents}>
        HAPPENINGS
      </button>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="outlined"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
