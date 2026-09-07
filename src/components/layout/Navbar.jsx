'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NAV_LINKS, INSTAGRAM_URL } from '@/config/constants';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
    } else if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
      setMobileOpen(false);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease-in-out',
          height: '70px',
          justifyContent: 'center',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '70px' }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: '#C9A84C',
                letterSpacing: '6px',
                fontFamily: 'serif',
                fontSize: '24px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              TERRAN
            </Typography>

            {/* Desktop Nav Links */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 4,
              }}
            >
              {NAV_LINKS?.map((link) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                    fontFamily: 'Cairo, sans-serif',
                    '&:hover': {
                      color: '#C9A84C',
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>

            {/* Desktop CTA */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button
                variant="contained"
                onClick={() => window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer')}
                sx={{
                  backgroundColor: '#C9A84C',
                  color: '#111',
                  fontWeight: 'bold',
                  borderRadius: '0',
                  px: 3,
                  py: 1,
                  fontFamily: 'Cairo, sans-serif',
                  '&:hover': {
                    backgroundColor: '#e6c86a',
                  },
                }}
              >
                اطلب الآن
              </Button>
            </Box>

            {/* Mobile Hamburger Menu */}
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#C9A84C' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#111111',
              color: '#fff',
              width: 250,
              padding: 2,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_LINKS?.map((link) => (
            <ListItem 
              key={link.label} 
              onClick={(e) => handleNavClick(e, link.href)}
              sx={{ 
                textAlign: 'right', 
                cursor: 'pointer',
                '&:hover .MuiListItemText-primary': {
                  color: '#C9A84C',
                }
              }}
            >
              <ListItemText 
                primary={link.label} 
                slotProps={{
                  primary: {
                    sx: {
                      fontFamily: 'Cairo, sans-serif',
                      fontWeight: 500,
                      transition: 'color 0.3s',
                    },
                  },
                }}
              />
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer')}
              sx={{
                backgroundColor: '#C9A84C',
                color: '#111',
                fontWeight: 'bold',
                borderRadius: '0',
                py: 1.5,
                fontFamily: 'Cairo, sans-serif',
                '&:hover': {
                  backgroundColor: '#e6c86a',
                },
              }}
            >
              اطلب الآن
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
