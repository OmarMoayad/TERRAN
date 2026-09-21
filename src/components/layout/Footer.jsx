"use client";

import React from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { INSTAGRAM_URL, NAV_LINKS } from '@/config/constants';

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #EAE7E1',
        pt: { xs: 6, md: 7 },
        pb: 4,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        {/* Top Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 3.5, md: 2 },
            pb: 5,
          }}
        >
          {/* Right in RTL: Brand & Subtitle */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Box
              sx={{ cursor: 'pointer', mb: 1 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Image
                src="/images/logo.png"
                alt="تيران Terran"
                width={100}
                height={50}
                style={{ objectFit: 'contain', width: 'auto', height: '40px' }}
              />
            </Box>
            <Typography
              sx={{
                color: '#777777',
                fontSize: '0.82rem',
              }}
            >
              إكسسوارات رجالية تعبّر عن التفاصيل.
            </Typography>
          </Box>

          {/* Center in RTL: Navigation Links */}
          <Box
            component="nav"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 3, md: 4.5 },
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {NAV_LINKS.map((link) => (
              <Typography
                key={link.label}
                component="a"
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                sx={{
                  color: '#444444',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#000000',
                  },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>

          {/* Left in RTL: Instagram Button */}
          <Box>
            <Button
              variant="outlined"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<InstagramIcon sx={{ ml: 0.5, mr: -0.5, fontSize: '18px !important' }} />}
              sx={{
                borderColor: '#1A1A1A',
                color: '#1A1A1A',
                backgroundColor: 'transparent',
                fontWeight: 600,
                borderRadius: '2px',
                px: 2.4,
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
        </Box>

        {/* Divider */}
        <Box sx={{ height: '1px', backgroundColor: '#EAE7E1', width: '100%', mb: 3 }} />

        {/* Bottom Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', sm: 'start' },
          }}
        >
          {/* Copyright Right in RTL */}
          <Typography
            sx={{
              color: '#888888',
              fontSize: '0.78rem',
            }}
          >
            TERRAN 2024 © جميع الحقوق محفوظة
          </Typography>

          {/* Legal Links Left in RTL */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography
              component="span"
              sx={{
                color: '#888888',
                fontSize: '0.78rem',
                cursor: 'pointer',
                '&:hover': { color: '#1A1A1A' },
              }}
            >
              شروط وأحكام
            </Typography>
            <Typography
              component="span"
              sx={{
                color: '#888888',
                fontSize: '0.78rem',
                cursor: 'pointer',
                '&:hover': { color: '#1A1A1A' },
              }}
            >
              سياسة الخصوصية
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
