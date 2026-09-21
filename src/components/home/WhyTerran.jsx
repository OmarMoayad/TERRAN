"use client";

import { Box, Container, Typography } from "@mui/material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

const features = [
  {
    step: "01 / الجودة",
    title: "اختيار بعناية",
    description:
      "منتجات وإكسسوارات مختارة بعناية فائقة لتناسب ذوق الرجل العصري وتلائم متطلباته، وتعزز تفاصيلك بأدق معايير الجودة.",
    icon: <WorkspacePremiumOutlinedIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />,
  },
  {
    step: "02 / التميز",
    title: "ستايل رجالي أصيل",
    description:
      "تصاميم متوازنة تجمع بين الكلاسيكية والعصرية لتضيف لمسة حضور وتألق لإطلالتك الرسمية واليومية دون أي تكلف.",
    icon: <WatchOutlinedIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />,
  },
  {
    step: "03 / الاستثمار",
    title: "قيمة تستحقها",
    description:
      "بكجات متكاملة توفر لك قيمة حقيقية، وبدائل تجميع ذكية تضمن لك تجربة متكاملة بسعر أفضل دون المساومة على الجودة.",
    icon: <DiamondOutlinedIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />,
  },
];

export default function WhyTerran() {
  return (
    <Box
      id="why-terran"
      component="section"
      sx={{
        py: { xs: 9, md: 12 },
        backgroundColor: "#FAF9F7",
        borderTop: "1px solid #EAE7E1",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
              THE TERRAN STANDARD
            </Typography>
            <Box sx={{ width: 26, height: "1px", backgroundColor: "#C8C4BE" }} />
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "#1A1A1A",
              mb: 2,
              fontSize: { xs: "1.9rem", sm: "2.3rem", md: "2.6rem" },
              letterSpacing: "-0.01em",
            }}
          >
            لماذا تيران؟
          </Typography>

          <Typography
            sx={{
              color: "#666666",
              fontSize: "0.95rem",
              maxWidth: 480,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            فلسفة مختلفة لصنع المظهر الأرقى، وإعادة الثقة في كل تفصيلة.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 3.5 },
            maxWidth: 1140,
            mx: "auto",
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                p: { xs: 3.5, md: 4 },
                borderRadius: "2px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #EAE7E1",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "&:hover": {
                  borderColor: "#1A1A1A",
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                },
              }}
            >
              {/* Black Square Icon Badge */}
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "2px",
                  backgroundColor: "#1A1A1A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2.5,
                }}
              >
                {feature.icon}
              </Box>

              {/* Step indicator */}
              <Typography
                sx={{
                  color: "#999999",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  mb: 1,
                }}
              >
                {feature.step}
              </Typography>

              {/* Feature Title */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 1.8,
                  color: "#1A1A1A",
                  fontSize: "1.18rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {feature.title}
              </Typography>

              {/* Feature Description */}
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "0.86rem",
                  lineHeight: 1.8,
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
