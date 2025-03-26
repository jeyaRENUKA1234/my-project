import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import Rectangle from "../assets/Rectangle.png";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 400,
        zIndex: 1,
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Store Logo Section */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <img
          src={Rectangle}
          alt="Store Logo"
          style={{
            width: "90%",
            height: "auto",
            borderRadius: "10px",
            paddingTop: "120px",
          }}
        />
      </div>

      {/* Sidebar Menu */}
      <List style={{ paddingTop: "30px" }}>
        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="My Products" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
