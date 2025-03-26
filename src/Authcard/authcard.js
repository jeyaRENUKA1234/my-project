import React from "react";
import { Paper } from "@mui/material";
import { cardStyle } from "../Login/LoginStyles";

const AuthCard = ({ children }) => {
  return (
    <Paper elevation={6} sx={cardStyle}>
      {children}
    </Paper>
  );
};

export default AuthCard;
