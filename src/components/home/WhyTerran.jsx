"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const features = [
  {
    title: "اختيار بعناية",
    description: "منتجات وإكسسوارات مختارة لتناسب ذوق الرجل العصري.",
    image: "/images/feature-selection.png",
  },
  {
    title: "ستايل رجالي",
    description: "تصاميم بسيطة وأنيقة تضيف لمسة مميزة لإطلالتك.",
    image: "/images/feature-style.png",
  },
  {
    title: "قيمة تستحقها",
    description: "بكجات متكاملة تمنحك أكثر مقابل سعر مناسب.",
    image: "/images/feature-value.png",
  },
];

export default function WhyTerran() {
  return (
    <Box
      id="why-terran"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#111111",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              color: "#C9A84C",
              fontSize: "0.9rem",
              fontWeight: 600,
              mb: 1.5,
              letterSpacing: 1,
            }}
          >
            لماذا
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "#F5F5F0",
              mb: 1,
              "& span": {
                fontFamily: "serif",
                letterSpacing: 3,
                color: "#C9A84C",
              },
            }}
          >
            لماذا <span>TERRAN</span>
          </Typography>
          <Box
            sx={{
              width: 50,
              height: 2,
              backgroundColor: "#C9A84C",
              mx: "auto",
              mt: 2,
            }}
          />
        </Box>

        {/* Features Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: { xs: 3, md: 4 },
            maxWidth: 1000,
            mx: "auto",
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                p: { xs: 2, md: 3 },
                borderRadius: "12px",
                backgroundColor: "#1A1A1A",
                border: "1px solid #2A2A2A",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#C9A84C",
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                },
              }}
            >
              {/* Feature Image */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 160, md: 180 },
                  borderRadius: "8px",
                  overflow: "hidden",
                  mb: 2.5,
                }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Box>

              {/* Feature Title */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: "#F5F5F0",
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                }}
              >
                {feature.title}
              </Typography>

              {/* Feature Description */}
              <Typography
                sx={{
                  color: "#999",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
