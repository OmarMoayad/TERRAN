"use client";

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import InstagramIcon from '@mui/icons-material/Instagram';
import { INSTAGRAM_URL } from '@/config/constants';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        bgcolor: '#0A0A0A',
        pt: { xs: '110px', md: '120px' },
        pb: { xs: 8, md: 10 },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 75% 20%, rgba(201, 168, 76, 0.12) 0%, rgba(10, 10, 10, 1) 70%)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.1fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Right Column (RTL Start) */}
          <Box
            className="hero-fade-in"
            sx={{
              order: { xs: 2, md: 1 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'start' },
            }}
          >
            {/* Top Tagline */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1.5,
                mb: 3,
              }}
            >
              <Box sx={{ width: 30, height: '1px', backgroundColor: '#C9A84C' }} />
              <Typography
                sx={{
                  color: '#C9A84C',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  fontFamily: 'serif, sans-serif',
                }}
              >
                STYLE BEYOND THE ESSENTIAL
              </Typography>
              <Box sx={{ width: 30, height: '1px', backgroundColor: '#C9A84C' }} />
            </Box>

            {/* Main Title */}
            <Typography
              variant="h1"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                fontWeight: 700,
                lineHeight: 1.25,
                mb: 2.5,
                fontFamily: 'serif, sans-serif',
              }}
            >
              أناقتك تبدأ من
            </Typography>

            {/* Subtext */}
            <Typography
              sx={{
                color: '#A0A0A0',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.8,
                maxWidth: '540px',
                mb: 4,
              }}
            >
              إكسسوارات رجالية مختارة بعناية، صُممت لتكمل إطلالتك وتعبّر عن أسلوبك الأصيل بدقة وحرفية لا تضاهى.
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
              {/* Primary Gold Button */}
              <Button
                variant="contained"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<InstagramIcon sx={{ ml: 0.5, mr: -0.5 }} />}
                sx={{
                  backgroundColor: '#E5C05B',
                  color: '#0A0A0A',
                  px: { xs: 3, md: 4 },
                  py: 1.5,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: '4px',
                  textTransform: 'none',
                  flex: { xs: 1, sm: 'none' },
                  '&:hover': {
                    backgroundColor: '#F0CD68',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 25px rgba(229, 192, 91, 0.3)',
                  },
                }}
              >
                اطلب الآن
              </Button>

              {/* Secondary Dark Button */}
              <Button
                variant="contained"
                onClick={() => {
                  const el = document.querySelector('#packages');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  backgroundColor: '#222222',
                  color: '#E0E0E0',
                  border: '1px solid #333333',
                  px: { xs: 3, md: 4 },
                  py: 1.5,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  textTransform: 'none',
                  flex: { xs: 1, sm: 'none' },
                  '&:hover': {
                    backgroundColor: '#2A2A2A',
                    borderColor: '#444444',
                  },
                }}
              >
                استكشف البكجات
              </Button>
            </Box>

            {/* Feature Trust Bar */}
            <Box
              sx={{
                width: '100%',
                backgroundColor: 'rgba(20, 20, 20, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid #262626',
                borderRadius: '8px',
                px: { xs: 2, sm: 3 },
                py: 2,
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
                  gap: { xs: 2, sm: 1.5 },
                  alignItems: 'center',
                }}
              >
                {/* Feature 1 */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  <LocalShippingOutlinedIcon sx={{ color: '#C9A84C', fontSize: 24 }} />
                  <Box>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.85rem', lineHeight: 1.2 }}>
                      توصيل سريع
                    </Typography>
                    <Typography sx={{ color: '#888888', fontSize: '0.725rem', mt: 0.3 }}>
                      لكافة المناطق
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 2 */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  <RemoveRedEyeOutlinedIcon sx={{ color: '#C9A84C', fontSize: 24 }} />
                  <Box>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.85rem', lineHeight: 1.2 }}>
                      دفع عند الاستلام
                    </Typography>
                    <Typography sx={{ color: '#888888', fontSize: '0.725rem', mt: 0.3 }}>
                      معاينة قبل الدفع
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 3 */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  <VerifiedOutlinedIcon sx={{ color: '#C9A84C', fontSize: 24 }} />
                  <Box>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.85rem', lineHeight: 1.2 }}>
                      ضمان الجودة
                    </Typography>
                    <Typography sx={{ color: '#888888', fontSize: '0.725rem', mt: 0.3 }}>
                      معايير فائقة الدقة
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Left Column (Framed Product Image) */}
          <Box
            className="hero-fade-in hero-fade-in-delayed"
            sx={{
              order: { xs: 1, md: 2 },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: '460px',
                backgroundColor: '#141414',
                border: '1.5px solid #282828',
                borderRadius: '12px',
                overflow: 'hidden',
                p: 1.5,
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
                transition: 'transform 0.4s ease, border-color 0.4s ease',
                '&:hover': {
                  borderColor: '#C9A84C60',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              {/* Image Frame */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 320, sm: 400, md: 440 },
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#0D0D0D',
                }}
              >
                <Image
                  src="/images/hero.png"
                  alt="البكج الملكي الشامل"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>

              {/* Bottom Label Bar */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  pt: 2,
                  pb: 1,
                  px: 1.5,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <WorkspacePremiumIcon sx={{ color: '#C9A84C', fontSize: 26 }} />
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography
                    sx={{
                      color: '#C9A84C',
                      fontSize: '0.675rem',
                      fontWeight: 700,
                      letterSpacing: '1.5px',
                    }}
                  >
                    EDITION LIMITÉE
                  </Typography>
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      fontFamily: 'serif, sans-serif',
                    }}
                  >
                    البكج الملكي الشامل
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
