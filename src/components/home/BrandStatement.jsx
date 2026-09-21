"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function BrandStatement() {
  return (
    <Box
      component="section"
      id="brand-statement"
      sx={{
        backgroundColor: "#FAF9F7",
        py: { xs: 8, sm: 10, md: 11 },
        px: { xs: 2, sm: 3 },
        borderTop: "1px solid #EAE7E1",
        borderBottom: "1px solid #EAE7E1",
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
          {/* Terran Calligraphy Logo */}
          <Box sx={{ mb: 2.5, display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/logo.png"
              alt="تيران Terran"
              width={110}
              height={55}
              style={{ objectFit: "contain", width: "auto", height: "46px" }}
            />
          </Box>

          {/* Subtitle / Eyebrow */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 2.5,
            }}
          >
            <Box sx={{ width: 30, height: "1px", backgroundColor: "#C8C4BE" }} />
            <Typography
              sx={{
                color: "#777777",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              STYLE BEYOND THE ESSENTIAL
            </Typography>
            <Box sx={{ width: 30, height: "1px", backgroundColor: "#C8C4BE" }} />
          </Box>

          {/* Section Heading */}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "#1A1A1A",
              fontWeight: 700,
              fontSize: { xs: "1.9rem", sm: "2.3rem", md: "2.65rem" },
              lineHeight: 1.3,
              mb: 2.5,
              letterSpacing: "-0.01em",
            }}
          >
            التفاصيل تصنع الفرق
          </Typography>

          {/* Supporting Statement Text */}
          <Typography
            component="p"
            sx={{
              color: "#666666",
              fontSize: { xs: "0.95rem", sm: "1.02rem", md: "1.06rem" },
              lineHeight: { xs: 1.85, md: 2 },
              maxWidth: 620,
              mx: "auto",
              fontWeight: 400,
              mb: 3.5,
            }}
          >
            من تيران (Terran)، نؤمن أن الأناقة الفاخرة لا تحتاج إلى صياح أو تكلف، بل تجدها في أدق التفاصيل. والإكسسوارات الرجالية المصممة بعناية لتمنح حضورك هوية استثنائية وبصمة لا تُنسى في كل مناسبة.
          </Typography>

          {/* Minimalist Diamond Separator */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, opacity: 0.5 }}>
            <Box sx={{ width: 24, height: "1px", backgroundColor: "#C8C4BE" }} />
            <Box
              sx={{
                width: 6,
                height: 6,
                backgroundColor: "#1A1A1A",
                transform: "rotate(45deg)",
              }}
            />
            <Box sx={{ width: 24, height: "1px", backgroundColor: "#C8C4BE" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
