"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const pages = [
  { name: "Home", url: "/dashboard" },
  { name: "Skill-Based", url: "/dashboard" },
  { name: "About us", url: "/about" },
];

const settings = [
  { name: "My Profile", url: "/Profile" },
  { name: "Event History", url: "/eventHistory" },
  { name: "Donation History", url: "/donationHistory" },
  { name: "Logout", url: "/Login" },
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className="bg-[#575c63]" sx={{ boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and App Name */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <Link href="/dashboard">
              <Avatar
                alt="Logo"
                src="/images/tabanghub3.png"
                sx={{ width: 40, height: 40, mr: 1 }}
              />
            </Link>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/dashboard"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "revert-layer",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#22f5b2",
                textDecoration: "none",
              }}
            >
              TABANG-HUB
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                href={page.url}
                key={page.name}
                onClick={handleCloseNavMenu}
                style={{ marginRight: "20px", color: "white", textDecoration: "none" }}
              >
                {page.name}
              </Link>
            ))}
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              mx: 2,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              backgroundColor: "#f1f3f4",
              borderRadius: 50,
              padding: "2px 10px",
              flexGrow: 1,
              maxWidth: "400px",
            }}
          >
            <SearchIcon sx={{ color: "#9e9e9e", mr: 1 }} />
            <InputBase
              placeholder="Search event"
              sx={{ flex: 1 }}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>

          {/* Message Icon */}
          <Tooltip title="Messages">
            <IconButton
              href="/messaging"
              sx={{ marginRight: 2 }}
              color="inherit"
            >
              <MailIcon />
            </IconButton>
          </Tooltip>

          {/* Notifications */}
          <IconButton color="inherit" sx={{ marginRight: 2 }}>
            <Badge badgeContent={60} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* User Avatar and Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Profile" src="/images/profile.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link
                  href={setting.url}
                  key={setting.name}
                  onClick={handleCloseUserMenu}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
