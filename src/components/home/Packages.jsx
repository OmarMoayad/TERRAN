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
        backgroundColor: "#0A0A0A",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#F5F5F0",
            }}
          >
            اختر بكجك
          </Typography>
          <Box
            sx={{
              width: 50,
              height: 2,
              backgroundColor: "#C9A84C",
              mx: "auto",
              mb: 2.5,
            }}
          />
          <Typography
            sx={{
              color: "#999",
              fontSize: "1rem",
              maxWidth: 500,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            بكجان، خياران، وتفاصيل مصممة للرجل الذي يهتم بمظهره.
          </Typography>
        </Box>

        {/* Package Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            justifyContent: "center",
            alignItems: { xs: "center", md: "stretch" },
            maxWidth: 900,
            mx: "auto",
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
