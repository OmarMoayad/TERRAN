"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function BrandVisual() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0A0A0A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
            minHeight: { md: 450 },
          }}
        >
          {/* Image Side */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: "100%",
              height: { xs: 300, md: 450 },
              borderRadius: "16px",
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to left, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.1) 50%, transparent 100%)",
                zIndex: 1,
              },
            }}
          >
            <Image
              src="/images/hero.png"
              alt="إكسسوارات رجالية فاخرة"
              width={1200}
              height={1200}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Box>

          {/* Text Side */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "right" },
              px: { xs: 2, md: 0 },
            }}
          >
            {/* Gold accent line */}
            <Box
              sx={{
                width: 60,
                height: 2,
                backgroundColor: "#C9A84C",
                mb: 3,
                mx: { xs: "auto", md: 0 },
              }}
            />

            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#F5F5F0",
                mb: 3,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                lineHeight: 1.4,
              }}
            >
              لأن الأناقة الحقيقية لا تصرخ،
              <br />
              بل تلفت الانتباه بهدوء
            </Typography>

            <Typography
              sx={{
                color: "#999",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
                maxWidth: 500,
                mx: { xs: "auto", md: 0 },
              }}
            >
              التفاصيل الصغيرة هي التي تصنع الفرق بين إطلالة عادية وإطلالة
              استثنائية. في TERRAN، نختار لك كل قطعة بعناية لتكمل أسلوبك الخاص.
            </Typography>

            {/* Decorative gold corner */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "relative",
                mt: 4,
                width: 80,
                height: 80,
                borderRight: "2px solid #C9A84C",
                borderBottom: "2px solid #C9A84C",
                opacity: 0.3,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
