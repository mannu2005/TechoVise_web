import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Drawer from '@mui/material/Drawer';
import './Header.css';
import img from '../../../assets/Header_img/TechoviseWhiteLogo.png';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: '#138f74', }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Section (Left Side) */}
          <Box
            component="img"
            src={img}
            alt="Techovise Logo"
            sx={{
              height: { lg: '100px', md: '100px', sm: '105px', xs: '100px' }, // Responsive height
              width: { md:"225px",sm:"auto" }, // Maintain aspect ratio
            }}
          />

          {/* Navigation Section (Right Side) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Drawer Menu Icon for Small Screens */}
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Buttons for Larger Screens */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px' }}>
              <Button
                variant="text"
                className="Button"
                sx={{ color: '#fff', padding: '5px 15px' }}
              >
                Events
              </Button>
              <Button
                variant="text"
                className="Button"
                sx={{ color: '#fff', padding: '5px 15px' }}
              >
                Blogs
              </Button>
              <Button
                variant="outlined"
                className="Button"
                sx={{
                  border: '1px solid #fff',
                  color: '#fff',
                  padding: '5px 15px',
                }}
              >
                Sign Up &nbsp; <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Responsive Drawer for Small Screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 200, padding: '10px' }} className="Header_Drawer" >
          <Button fullWidth className="Button"  onClick={() => setDrawerOpen(false)}>
            Events
          </Button>
          <Button fullWidth className="Button" onClick={() => setDrawerOpen(false)}>
            Blogs
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              border: '1px solid #138f74',
              fontSize:"18px",
              color: '#138f74',
            }}
            onClick={() => setDrawerOpen(false)}
          >
            Sign Up &nbsp; <ArrowForwardIcon />
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;
