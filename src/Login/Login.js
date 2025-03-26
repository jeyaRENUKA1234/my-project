import React from "react";
import { Box, Button, Typography, Paper, Link } from "@mui/material";
import Logo from "../assets/Frame.png";
import bgImage from "../assets/background.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/rewardify");
  };
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        overflow: "hidden",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(20%)",
          zIndex: -1,
        },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          maxWidth: 300,
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 70,
            height: 70,
            margin: "0 auto",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        {/* Title */}
        <Typography variant="h5" fontWeight="bold" mt={2}>
          Grow your Business Exponentially!
        </Typography>
        <Typography variant="body1" color="gray" mt={1}>
          Pay less on each transaction you make with our App.
        </Typography>
        {/* Pagination Indicators */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "black",
              borderRadius: "50%",
              mx: 0.5,
            }}
          />
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "gray",
              borderRadius: "50%",
              mx: 0.5,
            }}
          />
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "gray",
              borderRadius: "50%",
              mx: 0.5,
            }}
          />
        </Box>

        {/* Buttons */}
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: " #668D12", color: "#fff", mt: 3 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{ color: " #668D12", borderColor: "#ACC43F", mt: 2 }}
        >
          Contact Us
        </Button>

        {/* Terms & Conditions */}
        <Typography variant="caption" color="gray" mt={3} display="block">
          By clicking, you agree to our{" "}
          <Link style={{ color: "black" }} href="#" underline="hover">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link style={{ color: "black" }} href="#" underline="hover">
            Privacy Policy
          </Link>
          .
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
