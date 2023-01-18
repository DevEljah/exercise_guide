import React from "react";
import { Box, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

//LineHeight LineHeight="35px" 28
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      {/*  <p>{process.env.REACT_APP_CONTENT}</p> */}
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
        color="#fff"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" color="#fff" mb={4}>
        Cheack out the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        variant="contained"
        color="error"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Expore exerises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
