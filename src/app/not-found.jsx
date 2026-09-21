"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Paper,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { INSTAGRAM_URL } from '@/config/constants';

export default function NotFound() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FAF9F7',
        color: '#1A1A1A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      {/* Top Header */}
      <Box
        component="header"
        sx={{
          py: 2.5,
          px: { xs: 3, md: 6 },
          borderBottom: '1px solid #EAE7E1',
          backgroundColor: '#FAF9F7',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/logo.png"
            alt="تيران Terran"
            width={100}
            height={50}
            style={{ objectFit: 'contain', width: 'auto', height: '42px' }}
            priority
          />
        </Link>
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 7, md: 9 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, sm: 6, md: 7 },
            backgroundColor: '#FFFFFF',
            border: '1px solid #EAE7E1',
            borderRadius: '2px',
            boxShadow: '0 6px 30px rgba(0, 0, 0, 0.03)',
            width: '100%',
            maxWidth: '620px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Eyebrow */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 2.5,
            }}
          >
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#C8C4BE' }} />
            <Typography
              sx={{
                color: '#777777',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
              }}
            >
              404 • PAGE NOT FOUND
            </Typography>
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#C8C4BE' }} />
          </Box>

          {/* 404 Number */}
          <Typography
            sx={{
              fontSize: { xs: '5.5rem', sm: '7rem', md: '8rem' },
              fontWeight: 800,
              lineHeight: 1,
              mb: 1.5,
              color: '#1A1A1A',
              fontFamily: 'serif, sans-serif',
              letterSpacing: '2px',
              userSelect: 'none',
            }}
          >
            404
          </Typography>

          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              color: '#1A1A1A',
              mb: 2,
              fontSize: { xs: '1.4rem', sm: '1.75rem', md: '1.95rem' },
              letterSpacing: '-0.01em',
            }}
          >
            عذرًا، الصفحة التي تبحث عنها غير موجودة
          </Typography>

          {/* Subtext */}
          <Typography
            sx={{
              color: '#666666',
              mb: 4.5,
              maxWidth: '460px',
              fontSize: { xs: '0.92rem', md: '0.98rem' },
              lineHeight: 1.8,
            }}
          >
            ربما تم نقل الصفحة أو إزالة الرابط. يمكنك العودة إلى الصفحة الرئيسية واكتشاف بكجات تيران الرجالية المختارة بعناية.
          </Typography>

          {/* Action Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ width: '100%', justifyContent: 'center' }}
          >
            <Button
              component={Link}
              href="/"
              variant="contained"
              startIcon={<HomeOutlinedIcon sx={{ ml: 0.5, mr: -0.5 }} />}
              sx={{
                backgroundColor: '#1A1A1A',
                color: '#FAF9F7',
                fontWeight: 600,
                fontSize: '0.9rem',
                py: 1.4,
                px: 3.5,
                borderRadius: '2px',
                boxShadow: 'none',
                fontFamily: 'Cairo, sans-serif',
                '&:hover': {
                  backgroundColor: '#000000',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                },
              }}
            >
              الرئيسية
            </Button>

            <Button
              component={Link}
              href="/#packages"
              variant="outlined"
              startIcon={<Inventory2OutlinedIcon sx={{ ml: 0.5, mr: -0.5 }} />}
              sx={{
                borderColor: '#C8C4BE',
                color: '#1A1A1A',
                backgroundColor: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.9rem',
                py: 1.4,
                px: 3,
                borderRadius: '2px',
                fontFamily: 'Cairo, sans-serif',
                '&:hover': {
                  borderColor: '#1A1A1A',
                  backgroundColor: '#FAF9F7',
                },
              }}
            >
              تصفح البكجات
            </Button>
          </Stack>

          {/* Instagram contact link */}
          <Box
            sx={{
              mt: 4.5,
              pt: 3,
              borderTop: '1px solid #EAE7E1',
              width: '100%',
            }}
          >
            <Typography sx={{ color: '#777777', fontSize: '0.84rem' }}>
              هل تحتاج لمساعدة أو استفسار؟{' '}
              <Box
                component="a"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#1A1A1A',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  fontWeight: 700,
                  transition: 'opacity 0.2s',
                  '&:hover': {
                    textDecoration: 'underline',
                    opacity: 0.8,
                  },
                }}
              >
                <InstagramIcon sx={{ fontSize: '1.05rem' }} />
                تواصل معنا عبر إنستقرام
              </Box>
            </Typography>
          </Box>
        </Paper>
      </Container>

      {/* Bottom Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          textAlign: 'center',
          borderTop: '1px solid #EAE7E1',
          backgroundColor: '#FAF9F7',
        }}
      >
        <Typography
          sx={{
            color: '#888888',
            fontSize: '0.78rem',
          }}
        >
          TERRAN 2024 © جميع الحقوق محفوظة
        </Typography>
      </Box>
    </Box>
  );
}
