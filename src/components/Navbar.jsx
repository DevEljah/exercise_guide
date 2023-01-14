import * as React from "react";
import { Link } from "react-router-dom";

import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
/* import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton"; */
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/system";

export default function Navbar() {
  return (
    <>
      <Stack
        style={{ textDecoration: "none", color: "#fff", height: 100 }}
        direction="row"
        fontWeight="bold"
        fontSize="20px"
        fontStyle="italic"
        alignItems="center"
        spacing={8}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          Logo
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          Home
        </Link>
        <Link to="/exercises" style={{ textDecoration: "none", color: "#fff" }}>
          Exercises
        </Link>
      </Stack>
    </>
  );
}

{
  /* <Link to="/">Home</Link>
<Link to="/exercises">Exercises</Link> */
}
