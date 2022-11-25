import React from "react";
import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff !important",
    color: "#111 !important",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "20px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#111",
              fontWeight: 500,
              fontSize: "23px",
            }}
          >
            Blogooze
          </Link>
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ccc",
              border: "1px solid #ccc",
              color: "#111",
              fontSize: "14px",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#efefef",
              },
            }}
          >
            <Link
              to="/createPost"
              style={{
                textDecoration: "none",
                color: "#111",
              }}
            >
              Create Post
            </Link>
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ccc",
              border: "1px solid #ccc",
              color: "#111",
              fontSize: "14px",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#efefef",
              },
            }}
          >
            About Us
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
