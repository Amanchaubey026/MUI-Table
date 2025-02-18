import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Menu,
  MenuItem,
  Fade,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Navbar = ({ scrolled }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 300);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => {
    setMobileOpen(open);
  };

  const navItems = ["Product", "Pricing", "Finops", "About"];

  return (
    <AppBar
      position={scrolled ? "fixed" : "static"}
      sx={{
        backgroundColor: "white",
        boxShadow: scrolled ? "0px 2px 4px rgba(0,0,0,0.1)" : "none",
        borderBottom: "1px solid #E5E7EB",
        top: 0,
        zIndex: 1000,
        transition: "box-shadow 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          padding: { xs: "0.5rem 1rem", sm: "0.5rem 2rem" },
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#111827",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              component="img"
              src="https://cdn.prod.website-files.com/654cc1953659fbce12c35b03/6569aeea89e524678da19e76_Logo%20nav%20bar.svg"
              alt="Astuto Logo"
              sx={{ height: 32 }}
            />
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                color: "black",
                fontWeight: 500,
                fontSize: "1rem",
                "&:hover": { color: "green" },
              }}
            >
              {item}
            </Button>
          ))}
          {/* Resources Dropdown */}
          <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{ position: "relative", display: "inline-block" }}
          >
            <Button
              sx={{
                color: "black",
                fontWeight: 500,
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                "&:hover": { color: "green" },
              }}
              endIcon={<ArrowDropDownIcon />}
            >
              Resources
            </Button>
            <Menu
              id="resources-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 300 }}
              MenuListProps={{ "aria-labelledby": "resources-button" }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiMenuItem-root": {
                    transition: "background-color 0.3s ease",
                  },
                  "& .MuiMenuItem-root:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                },
              }}
            >
              <MenuItem onClick={handleClose} sx={{ "&:hover": { color: "green" } }}>
                Blog
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ "&:hover": { color: "green" } }}>
                Customer Success Stories
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Desktop Buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button
            sx={{
              color: "#374151",
              fontWeight: 500,
              fontSize: "1rem",
              "&:hover": { color: "green" },
            }}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#10B981",
              color: "white",
              borderRadius: "0.375rem",
              fontWeight: 600,
              fontSize: "1rem",
              "&:hover": { backgroundColor: "#059669" },
            }}
          >
            Book a Demo
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          onClick={() => toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" }, color: "black" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Blog" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Customer Success Stories" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Log in" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor: "#10B981",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "0.375rem",
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "#059669" },
                }}
              >
                <ListItemText primary="Book a Demo" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};
