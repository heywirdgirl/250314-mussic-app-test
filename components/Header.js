import { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
        {/* Mobile Menu */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { lg: "none" } }} onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        
        {/* Dropdown Menu for Mobile */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <FacebookIcon sx={{ mr: 1 }} /> Facebook
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://shopee.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <StorefrontIcon sx={{ mr: 1 }} /> Shopee
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose} style={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ mr: 1 }} /> 123 Shop St.
          </MenuItem>
          <MenuItem onClick={handleMenuClose} style={{ display: 'flex', alignItems: 'center' }}>
            <PhoneIcon sx={{ mr: 1 }} /> 012-345-6789
          </MenuItem>
        </Menu>

        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            My Shop
          </Link>
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 3, alignItems: 'center' }}>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: 'flex', alignItems: 'center' }}>
            <FacebookIcon sx={{mr:0.5}}/> Facebook
          </Link>
          <Link href="https://shopee.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: 'flex', alignItems: 'center' }}>
            <StorefrontIcon sx={{mr:0.5}}/> Shopee
          </Link>
          <Typography style={{display:'flex', alignItems:'center'}}><LocationOnIcon sx={{mr:0.5}}/> 123 Shop St.</Typography>
          <Typography style={{display:'flex', alignItems:'center'}}><PhoneIcon sx={{mr:0.5}}/> 012-345-6789</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
