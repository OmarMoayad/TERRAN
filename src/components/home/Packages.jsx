"use client";

import { Box, Container, Typography } from "@mui/material";
import PackageCard from "@/components/ui/PackageCard";
import { PACKAGES } from "@/config/constants";

export default function Packages() {
  return (
    <Box
      id="packages"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#FAF9F7",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          {/* Eyebrow */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              mb: 2,
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
              CHOOSE YOUR PACK
            </Typography>
            <Box sx={{ width: 26, height: "1px", backgroundColor: "#C8C4BE" }} />
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#1A1A1A",
              fontSize: { xs: "1.9rem", sm: "2.3rem", md: "2.6rem" },
              letterSpacing: "-0.01em",
            }}
          >
            اختر بكجك
          </Typography>

          <Typography
            sx={{
              color: "#666666",
              fontSize: "0.95rem",
              maxWidth: 520,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            ثلاثة خيارات وتفاصيل استثنائية صممت للرجل الذي يهتم بهيبته وأناقته اليومية.
          </Typography>
        </Box>

        {/* Package Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3.5, md: 3.5 },
            maxWidth: 1140,
            mx: "auto",
            alignItems: "stretch",
          }}
        >
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
