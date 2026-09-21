"use client";

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { INSTAGRAM_URL } from '@/config/constants';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '92vh',
        bgcolor: '#FAF9F7',
        pt: { xs: '110px', md: '125px' },
        pb: { xs: 8, md: 10 },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.08fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Right Column in RTL: Content */}
          <Box
            className="fade-up"
            sx={{
              order: { xs: 2, md: 1 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'start' },
            }}
          >
            {/* Tagline */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 2.5,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Box sx={{ width: 28, height: '1px', backgroundColor: '#C8C4BE' }} />
              <Typography
                sx={{
                  color: '#777777',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                }}
              >
                STYLE BEYOND THE ESSENTIAL
              </Typography>
              <Box sx={{ width: 28, height: '1px', backgroundColor: '#C8C4BE' }} />
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                color: '#1A1A1A',
                fontSize: { xs: '2.5rem', sm: '3.4rem', md: '3.85rem' },
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                mb: 0.5,
              }}
            >
              أناقتك تبدأ من
            </Typography>

            <Typography
              variant="h1"
              sx={{
                color: '#1A1A1A',
                fontSize: { xs: '2.6rem', sm: '3.5rem', md: '4rem' },
                fontWeight: 800,
                lineHeight: 1.25,
                fontStyle: 'italic',
                fontFamily: 'serif, "Cairo", sans-serif',
                mb: 2.5,
              }}
            >
              التفاصيل
            </Typography>

            {/* Subtext */}
            <Typography
              sx={{
                color: '#666666',
                fontSize: { xs: '0.94rem', md: '1.02rem' },
                lineHeight: 1.85,
                maxWidth: '510px',
                mb: 4.5,
              }}
            >
              إكسسوارات رجالية مختارة بعناية، صُممت لتكمل إطلالتك وتعبّر عن أسلوبك العصري الأصيل، بدقة وحرفية تمنحك ثقة واكتمال.
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                mb: 5,
                width: { xs: '100%', sm: 'auto' },
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Button
                variant="contained"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<InstagramIcon sx={{ ml: 0.5, mr: -0.5 }} />}
                sx={{
                  backgroundColor: '#1A1A1A',
                  color: '#FAF9F7',
                  px: { xs: 3, md: 4 },
                  py: 1.4,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  borderRadius: '2px',
                  boxShadow: 'none',
                  flex: { xs: 1, sm: 'none' },
                  '&:hover': {
                    backgroundColor: '#000000',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  },
                }}
              >
                اطلب عبر إنستقرام
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  document.querySelector('#packages')?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  borderColor: '#C8C4BE',
                  color: '#1A1A1A',
                  backgroundColor: '#FFFFFF',
                  px: { xs: 3, md: 4 },
                  py: 1.4,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  borderRadius: '2px',
                  flex: { xs: 1, sm: 'none' },
                  '&:hover': {
                    borderColor: '#1A1A1A',
                    backgroundColor: '#FFFFFF',
                  },
                }}
              >
                استكشف البكجات
              </Button>
            </Box>

            {/* Trust Bar */}
            <Box
              sx={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                border: '1px solid #EAE7E1',
                borderRadius: '4px',
                px: { xs: 2, sm: 3 },
                py: 2.2,
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
                  gap: { xs: 2.5, sm: 2 },
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  <LocalShippingOutlinedIcon sx={{ color: '#1A1A1A', fontSize: 24 }} />
                  <Box>
                    <Typography sx={{ color: '#1A1A1A', fontWeight: 700, fontSize: '0.84rem', lineHeight: 1.2 }}>
                      توصيل سريع
                    </Typography>
                    <Typography sx={{ color: '#888888', fontSize: '0.72rem', mt: 0.3 }}>
                      لكافة المحافظات والمناطق
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  <RemoveRedEyeOutlinedIcon sx={{ color: '#1A1A1A', fontSize: 24 }} />
                  <Box>
                    <Typography sx={{ color: '#1A1A1A', fontWeight: 700, fontSize: '0.84rem', lineHeight: 1.2 }}>
                      دفع عند الاستلام
                    </Typography>
                    <Typography sx={{ color: '#888888', fontSize: '0.72rem', mt: 0.3 }}>
                      معاينة قبل الدفع
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  <VerifiedOutlinedIcon sx={{ color: '#1A1A1A', fontSize: 24 }} />
                  <Box>
                    <Typography sx={{ color: '#1A1A1A', fontWeight: 700, fontSize: '0.84rem', lineHeight: 1.2 }}>
                      ضمان الجودة
                    </Typography>
                    <Typography sx={{ color: '#888888', fontSize: '0.72rem', mt: 0.3 }}>
                      معايير تليق بذوقك
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Left Column in RTL: Framed Product Image */}
          <Box
            className="fade-up-delay"
            sx={{
              order: { xs: 1, md: 2 },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: '470px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #EAE7E1',
                borderRadius: '4px',
                overflow: 'hidden',
                p: 2,
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 14px 40px rgba(0, 0, 0, 0.08)',
                },
              }}
            >
              {/* Product Frame */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 330, sm: 400, md: 450 },
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#F5F3EF',
                }}
              >
                <Image
                  src="/images/heroterran.png"
                  alt="البكج الملكي الشامل من تيران"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />

                {/* Serial / Edition badge inside photo */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 14,
                    right: 14,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid #E5E2DC',
                    borderRadius: '2px',
                    px: 1.5,
                    py: 0.6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                >
                  <Typography sx={{ fontSize: '0.62rem', color: '#888', fontWeight: 600, letterSpacing: '0.5px' }}>
                    EDITION 2024 / NO. 014
                  </Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: '#1A1A1A', fontWeight: 700 }}>
                    الإنتاج الفاخر المحدود
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 14,
                    left: 14,
                    backgroundColor: '#1A1A1A',
                    color: '#FAF9F7',
                    borderRadius: '2px',
                    px: 1.2,
                    py: 0.4,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                  }}
                >
                  805
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
