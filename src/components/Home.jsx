import React from "react";

import Navbar from "./Navbar";
import { Box, Typography } from "@mui/material";
import SearchExercises from "./SearchExercises";

function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#9e1717;",
          /*  backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          }, */
        }}
      >
        <Navbar />
      </Box>
      <Typography
        alignItems="center"
        fontSize="24px"
        fontWeight="bold"
        color="#fff"
        pt="80px"
      >
        Fitness Club <br /> <br />
        Sweat, Smile and Repeat <br />
        Cheack out the most effective exercises
      </Typography>
      <SearchExercises />
    </>
  );
}

export default Home;
