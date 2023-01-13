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
      <Stack>
        <Link to="/">Home</Link>
        <Link to="/exercises">Exercises</Link>
      </Stack>
    </>
  );
}

{
  /* <Link to="/">Home</Link>
<Link to="/exercises">Exercises</Link> */
}
