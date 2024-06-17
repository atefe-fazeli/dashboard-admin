import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import EmailIcon from "@mui/icons-material/Email";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ReportIcon from "@mui/icons-material/Report";
function Sidebar() {
  const menus = [
    {
      id: 0,
      title: "Dasboard",
      submMenus: [
        {
          id: 0,
          title: "Home",
          path: "",
          icon: <HomeIcon color="success" fontSize="small" />,
        },
        {
          id: 1,
          title: "Analytics",
          path: "",
          icon: <ShowChartIcon color="success" fontSize="small" />,
        },
        {
          id: 2,
          title: "Sales",
          path: "",
          icon: <TimelineIcon color="success" fontSize="small" />,
        },
      ],
    },
    {
      id: 1,
      title: "Quick Menus",
      submMenus: [
        {
          id: 0,
          title: "Users",
          path: "",
          icon: <PersonIcon color="success" fontSize="small" />,
        },
        {
          id: 1,
          title: "new User",
          path: "",
          icon: <PersonAddIcon color="success" fontSize="small" />,
        },
        {
          id: 2,
          title: "Products",
          path: "",
          icon: <Inventory2Icon color="success" fontSize="small" />,
        },
        {
          id: 3,
          title: "Transactions",
          path: "",
          icon: <AttachMoneyIcon color="success" fontSize="small" />,
        },
        {
          id: 4,
          title: "Reports",
          path: "",
          icon: <SignalCellularAltIcon color="success" fontSize="small" />,
        },
      ],
    },
    {
      id: 2,
      title: "Notifications",
      submMenus: [
        {
          id: 0,
          title: "Mail",
          path: "",
          icon: <EmailIcon color="success" fontSize="small" />,
        },
        {
          id: 1,
          title: "Feedback",
          path: "",
          icon: <DynamicFeedIcon color="success" fontSize="small" />,
        },
        {
          id: 2,
          title: "Massages",
          path: "",
          icon: <ChatBubbleIcon color="success" fontSize="small" />,
        },
      ],
    },
    {
      id: 0,
      title: "Staff",
      submMenus: [
        {
          id: 0,
          title: "Manage",
          path: "",
          icon: <ManageAccountsIcon color="success" fontSize="small" />,
        },
        {
          id: 1,
          title: "Analytics",
          path: "",
          icon: <TimelineIcon color="success" fontSize="small" />,
        },
        {
          id: 2,
          title: "Reports",
          path: "",
          icon: <ReportIcon color="success" fontSize="small" />,
        },
      ],
    },
  ];
  return (
    <div className="sidebarContainer">
      {menus.map((item) => (
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "20px",
          }}
          key={item.id}
        >
          <Typography variant="body1">
            {item.title}
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10px",
              }}
            >
              {item.submMenus.map((subMenu) => (
                <NavLink
                  key={subMenu.id}
                  path={subMenu.path}
                  style={{ marginTop: "10px", padding: "5px" }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    {subMenu.icon}
                    <Typography variant="body2">{subMenu.title}</Typography>
                  </Stack>
                </NavLink>
              ))}
            </Box>
          </Typography>
        </Container>
      ))}
      <div style={{ height: "20px", width: "100%" }}>version 1.0.0</div>
    </div>
  );
}

export default Sidebar;
