"use client";

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { INSTAGRAM_URL, NAV_LINKS } from '@/config/constants';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #2A2A2A',
        py: 6,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={3.5}
          sx={{ alignItems: 'center', textAlign: 'center' }}
        >
          {/* Brand & Tagline */}
          <Stack spacing={1} sx={{ alignItems: 'center' }}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 700,
                color: '#C9A84C',
                letterSpacing: '6px',
                fontFamily: 'serif',
                fontSize: { xs: '1.75rem', md: '2rem' },
                userSelect: 'none',
              }}
            >
              TERRAN
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#999999',
                fontSize: { xs: '0.875rem', md: '0.95rem' },
              }}
            >
              إكسسوارات رجالية | أناقة تتجاوز الأساسيات
            </Typography>
          </Stack>

          {/* Navigation Links */}
          <Box
            component="nav"
            aria-label="روابط تذييل الصفحة"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: { xs: 2.5, sm: 4 },
              rowGap: 1.5,
            }}
          >
            {NAV_LINKS.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                sx={{
                  color: '#999999',
                  textDecoration: 'none',
                  fontSize: { xs: '0.875rem', md: '0.95rem' },
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#C9A84C',
                  },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          {/* Social Links */}
          <Box>
            <IconButton
              component="a"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              sx={{
                color: '#999999',
                border: '1px solid #2A2A2A',
                p: 1.25,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#C9A84C',
                  borderColor: '#C9A84C',
                  backgroundColor: 'rgba(201, 168, 76, 0.08)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: '1.4rem' }} />
            </IconButton>
          </Box>

          {/* Divider */}
          <Divider
            sx={{
              width: '100%',
              maxWidth: 600,
              borderColor: '#2A2A2A',
            }}
          />

          {/* Copyright Notice */}
          <Typography
            variant="caption"
            sx={{
              color: '#999999',
              fontSize: '0.825rem',
            }}
          >
            © 2026 TERRAN. جميع الحقوق محفوظة.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
