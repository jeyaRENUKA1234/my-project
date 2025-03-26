import React from "react";
import { Box } from "@mui/material";
import { backgroundStyle } from "./LoginStyles";
import bgImage from "../assets/background.png";

const BackgroundImgae = ({ children }) => {
  return (
    <Box
      sx={{
        ...backgroundStyle,
        "::before": {
          ...backgroundStyle["::before"],
          backgroundImage: `url(${bgImage})`,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundImgae;
