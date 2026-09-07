"use client";

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Paper,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { INSTAGRAM_URL } from '@/config/constants';

export default function NotFound() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#0A0A0A',
        color: '#F5F5F0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `
          radial-gradient(circle at 50% 20%, rgba(201, 168, 76, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(201, 168, 76, 0.05) 0%, transparent 40%)
        `,
      }}
    >
      {/* Top Brand Header */}
      <Box
        component="header"
        sx={{
          py: 3,
          px: { xs: 3, md: 6 },
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Typography
            variant="h5"
            sx={{
              color: '#C9A84C',
              letterSpacing: '6px',
              fontFamily: 'serif',
              fontWeight: 'bold',
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 0.85,
              },
            }}
          >
            TERRAN
          </Typography>
        </Link>
      </Box>

      {/* Main Content Area */}
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 8, md: 10 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, sm: 6, md: 8 },
            backgroundColor: 'rgba(26, 26, 26, 0.65)',
            border: '1px solid rgba(201, 168, 76, 0.25)',
            borderRadius: '16px',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(201, 168, 76, 0.08)',
            width: '100%',
            maxWidth: '650px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            },
          }}
        >
          {/* Subtle luxury badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 2,
              py: 0.5,
              borderRadius: '20px',
              border: '1px solid rgba(201, 168, 76, 0.4)',
              backgroundColor: 'rgba(201, 168, 76, 0.08)',
              mb: 3,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: '#C9A84C',
                fontWeight: 600,
                letterSpacing: '1px',
                fontSize: '0.8rem',
              }}
            >
              خطأ 404 • الصفحة غير متوفرة
            </Typography>
          </Box>

          {/* 404 Large Display */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '5.5rem', sm: '7.5rem', md: '9rem' },
              fontWeight: 900,
              lineHeight: 1,
              mb: 1,
              background: 'linear-gradient(180deg, #F5F5F0 30%, #C9A84C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'serif',
              letterSpacing: '4px',
              userSelect: 'none',
            }}
          >
            404
          </Typography>

          {/* Heading */}
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 700,
              color: '#F5F5F0',
              mb: 2,
              fontSize: { xs: '1.5rem', sm: '1.85rem', md: '2.1rem' },
            }}
          >
            عذرًا، الصفحة التي تبحث عنها غير موجودة
          </Typography>

          {/* Subtext description */}
          <Typography
            variant="body1"
            sx={{
              color: '#999999',
              mb: 4,
              maxWidth: '480px',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              lineHeight: 1.8,
            }}
          >
            ربما تم نقل الصفحة أو تم تغيير الرابط. يمكنك العودة إلى الصفحة الرئيسية واكتشاف تشكيلاتنا الفاخرة من الإكسسوارات الرجالية.
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
              startIcon={<HomeRoundedIcon sx={{ ml: 0.5, mr: -0.5 }} />}
              sx={{
                backgroundColor: '#C9A84C',
                color: '#0A0A0A',
                fontWeight: 700,
                fontSize: '1rem',
                py: 1.5,
                px: 3.5,
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(201, 168, 76, 0.3)',
                '&:hover': {
                  backgroundColor: '#D4B85A',
                  boxShadow: '0 6px 25px rgba(201, 168, 76, 0.45)',
                  transform: 'translateY(-2px)',
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
                borderColor: 'rgba(201, 168, 76, 0.6)',
                color: '#C9A84C',
                fontWeight: 600,
                fontSize: '1rem',
                py: 1.5,
                px: 3,
                borderRadius: '8px',
                '&:hover': {
                  borderColor: '#C9A84C',
                  backgroundColor: 'rgba(201, 168, 76, 0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              تصفح البكجات
            </Button>
          </Stack>

          {/* Instagram contact link */}
          <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.08)', width: '100%' }}>
            <Typography variant="body2" sx={{ color: '#777', fontSize: '0.875rem' }}>
              هل تحتاج لمساعدة أو استفسار؟{' '}
              <Box
                component="a"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#C9A84C',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  fontWeight: 600,
                  transition: 'opacity 0.2s',
                  '&:hover': {
                    textDecoration: 'underline',
                    opacity: 0.9,
                  },
                }}
              >
                <InstagramIcon sx={{ fontSize: '1.1rem' }} />
                تواصل معنا عبر إنستغرام
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
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: '#666666',
            fontSize: '0.8rem',
          }}
        >
          © 2026 TERRAN. جميع الحقوق محفوظة.
        </Typography>
      </Box>
    </Box>
  );
}
