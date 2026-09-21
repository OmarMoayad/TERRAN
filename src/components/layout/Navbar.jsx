'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NAV_LINKS, INSTAGRAM_URL } from '@/config/constants';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const handleNavClick = (e, href) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
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
          backgroundColor: isScrolled
            ? 'rgba(250, 249, 247, 0.98)'
            : '#FAF9F7',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #EAE7E1',
          transition: 'all 0.3s ease',
          height: '76px',
          justifyContent: 'center',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '76px' }}>

            {/* Right in RTL: Terran Calligraphy Logo */}
            <Box
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                order: { xs: 1, md: 1 },
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Image
                src="/images/logo.png"
                alt="تيران Terran"
                width={100}
                height={50}
                priority
                style={{ objectFit: 'contain', width: 'auto', height: '42px' }}
              />
            </Box>

            {/* Center in RTL: Desktop Nav Links */}
            <Box
              component="nav"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 4.5,
                order: { xs: 2, md: 2 },
              }}
            >
              {NAV_LINKS?.map((link) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  sx={{
                    color: '#333333',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    position: 'relative',
                    fontFamily: 'Cairo, sans-serif',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: '#000000',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      right: '20%',
                      width: 0,
                      height: '1.5px',
                      backgroundColor: '#1A1A1A',
                      transition: 'width 0.25s ease',
                    },
                    '&:hover::after': {
                      width: '60%',
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>

            {/* Left in RTL: CTA Button */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', order: { xs: 3, md: 3 } }}>
              <Button
                variant="outlined"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<InstagramIcon sx={{ fontSize: '18px !important', ml: 0.5, mr: -0.5 }} />}
                sx={{
                  borderColor: '#1A1A1A',
                  color: '#1A1A1A',
                  backgroundColor: 'transparent',
                  fontWeight: 600,
                  borderRadius: '2px',
                  px: 2.2,
                  py: 0.8,
                  fontSize: '0.82rem',
                  fontFamily: 'Cairo, sans-serif',
                  '&:hover': {
                    backgroundColor: '#1A1A1A',
                    color: '#FAF9F7',
                    borderColor: '#1A1A1A',
                  },
                }}
              >
                اطلب عبر إنستقرام
              </Button>
            </Box>

            {/* Mobile Hamburger */}
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#1A1A1A', order: { xs: 2 } }}
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
              backgroundColor: '#FAF9F7',
              color: '#1A1A1A',
              width: 270,
              padding: 2.5,
              borderLeft: '1px solid #E8E5E0',
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Image
            src="/images/logo.png"
            alt="تيران Terran"
            width={85}
            height={42}
            style={{ objectFit: 'contain', width: 'auto', height: '36px' }}
          />
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#1A1A1A' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ height: '1px', backgroundColor: '#E8E5E0', mb: 2 }} />

        <List>
          {NAV_LINKS?.map((link) => (
            <ListItem
              key={link.label}
              onClick={(e) => handleNavClick(e, link.href)}
              sx={{
                textAlign: 'right',
                cursor: 'pointer',
                borderRadius: '4px',
                py: 1,
                '&:hover': { backgroundColor: '#F0ECE4' },
              }}
            >
              <ListItemText
                primary={link.label}
                slotProps={{
                  primary: {
                    sx: {
                      fontFamily: 'Cairo, sans-serif',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      color: '#1A1A1A',
                    },
                  },
                }}
              />
            </ListItem>
          ))}
          <ListItem sx={{ mt: 3, px: 0 }}>
            <Button
              fullWidth
              variant="contained"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<InstagramIcon sx={{ ml: 0.5, mr: -0.5 }} />}
              sx={{
                backgroundColor: '#1A1A1A',
                color: '#FAF9F7',
                fontWeight: 600,
                borderRadius: '2px',
                py: 1.2,
                fontFamily: 'Cairo, sans-serif',
                '&:hover': { backgroundColor: '#333333' },
              }}
            >
              اطلب عبر إنستقرام
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
