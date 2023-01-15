import React from "react";
import { Box, Grid } from "@mui/material";
import BodyPart from "./BodyPart";
//import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const Categories = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="14px"
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default Categories;
