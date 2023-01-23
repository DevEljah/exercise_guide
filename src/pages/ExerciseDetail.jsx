import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

import Detail from "../components/Detail";

const ExerciseDetail = () => {
  return (
    <Box>
      <Detail />
    </Box>
  );
};

export default ExerciseDetail;
