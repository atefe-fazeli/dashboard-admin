import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";
import FitbitIcon from "@mui/icons-material/Fitbit";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./navbar.css";
function Navbar() {
  return (
    <Box
      sx={{
        height: "80px",
        position: "fixed",
        top: "0",
        zIndex: "999",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Typography color={"darkgreen"} variant="h5">
            Admin Dashboard
          </Typography>
          <FitbitIcon sx={{ color: "darkgreen" }} />
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <div className="badgeContainer">
            <span className="iconBadge">10</span>
            <NotificationsIcon fontSize="large" color="disabled" />
          </div>
          <div className="badgeContainer">
            <LanguageIcon fontSize="large" color="disabled" />
            <span className="iconBadge">10</span>
          </div>
          <div className="badgeContainer">
            <SettingsIcon fontSize="large" color="disabled" />
          </div>
          <Avatar alt="user" sx={{ cursor: "pointer" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
