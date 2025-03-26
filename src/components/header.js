import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#ffffff",
        color: "#2c3e50",
        padding: "10px 20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#76b041",
            fontSize: "1.5rem",
          }}
        >
          REWARDIFY
        </Typography>

        {/* User Info Section */}
        <Box display="flex" alignItems="center" gap={3}>
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", fontWeight: "500" }}
          >
            Welcome, Rajesh 👋
          </Typography>

          {/* XCoins Display */}
          <Box
            sx={{
              backgroundColor: "#f4f4d7", // Light yellow background
              padding: "5px 10px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              XCoins: 300
            </Typography>
            <span style={{ fontSize: "1.2rem" }}>🪙</span>
          </Box>

          {/* Icons Section */}
          <Box display="flex" alignItems="center" gap={1.5}>
            <IconButton sx={{ color: "#2c3e50" }}>
              <MenuBookIcon fontSize="medium" />
            </IconButton>
            <IconButton sx={{ color: "#2c3e50" }}>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon fontSize="medium" />
              </Badge>
            </IconButton>
            <IconButton sx={{ color: "#2c3e50" }}>
              <AccountCircleIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
