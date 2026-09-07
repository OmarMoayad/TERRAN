"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function BrandStatement() {
  return (
    <Box
      component="section"
      id="brand-statement"
      sx={{
        backgroundColor: "#111111",
        py: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2, sm: 3 },
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #1A1A1A",
        borderBottom: "1px solid #1A1A1A",
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
            transform: "translateY(14px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        animation: "fadeIn 0.8s ease-out forwards",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mx: "auto",
          }}
        >
          {/* Section Heading */}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: { xs: "1.85rem", sm: "2.25rem", md: "2.6rem" },
              lineHeight: 1.3,
              mb: 2.5,
              letterSpacing: "-0.01em",
            }}
          >
            التفاصيل تصنع الفرق
          </Typography>

          {/* Decorative Gold Accent Line */}
          <Box
            sx={{
              width: 60,
              height: "2px",
              backgroundColor: "#C9A84C",
              borderRadius: "2px",
              mb: 3,
            }}
          />

          {/* Supporting Statement Text */}
          <Typography
            component="p"
            sx={{
              color: "#999999",
              fontSize: { xs: "1.025rem", sm: "1.1rem", md: "1.15rem" },
              lineHeight: { xs: 1.8, md: 2 },
              maxWidth: 600,
              mx: "auto",
              fontWeight: 400,
            }}
          >
            في TERRAN، نؤمن أن الأناقة لا تحتاج إلى مبالغة. اخترنا لك تفاصيل رجالية بسيطة، فخمة، وعملية لتكمل حضورك.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
