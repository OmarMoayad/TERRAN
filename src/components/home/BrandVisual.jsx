"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function BrandVisual() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 9, md: 12 },
        backgroundColor: "#FAF9F7",
        borderTop: "1px solid #EAE7E1",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          {/* Right Column in RTL: Content */}
          <Box
            sx={{
              order: { xs: 2, md: 1 },
              textAlign: { xs: "center", md: "right" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {/* Tagline */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2.5,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box sx={{ width: 26, height: "1px", backgroundColor: "#C8C4BE" }} />
              <Typography
                sx={{
                  color: "#777777",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                TERRAN STANDARD
              </Typography>
              <Box sx={{ width: 26, height: "1px", backgroundColor: "#C8C4BE" }} />
            </Box>

            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#1A1A1A",
                mb: 3,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                lineHeight: 1.38,
                letterSpacing: "-0.01em",
              }}
            >
              لأن الأناقة الحقيقية لا تصرخ، بل تلفت الإنتباه بهدوء
            </Typography>

            {/* Body */}
            <Typography
              sx={{
                color: "#666666",
                fontSize: { xs: "0.95rem", md: "1.02rem" },
                lineHeight: 1.88,
                maxWidth: 490,
                mb: 5,
              }}
            >
              كل قطعة من بكجات تيران تم اختيارها لتمنحك الثقة الكاملة في كل لقاء، اجتماع، ومناسبة خاصة. إنها ليست مجرد إكسسوارات، بل تعكس هدوءك وأناقتك المتجددة.
            </Typography>

            {/* Bottom Signature / Stamp */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                pt: 2.5,
                borderTop: "1px solid #EAE7E1",
                width: "100%",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Image
                src="/images/logo.png"
                alt="تيران Terran"
                width={75}
                height={38}
                style={{ objectFit: "contain", width: "auto", height: "32px", opacity: 0.85 }}
              />
              <Box sx={{ textAlign: "right" }}>
                <Typography sx={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>
                  مجموعة 2024 الحصرية
                </Typography>
                <Typography sx={{ fontSize: "0.72rem", color: "#888888", mt: 0.3 }}>
                  الأناقة تبدأ من التفاصيل
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Left Column in RTL: Image */}
          <Box
            sx={{
              order: { xs: 1, md: 2 },
              position: "relative",
              width: "100%",
              height: { xs: 320, sm: 420, md: 470 },
              borderRadius: "2px",
              overflow: "hidden",
              border: "1px solid #EAE7E1",
              boxShadow: "0 6px 24px rgba(0,0,0,0.04)",
              backgroundColor: "#F5F3EF",
            }}
          >
            <Image
              src="/images/luxury-box.png"
              alt="صندوق تيران الفاخر للإكسسوارات الرجالية"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
