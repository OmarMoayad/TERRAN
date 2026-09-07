"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { INSTAGRAM_URL } from "@/config/constants";

export default function FinalCTA() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: "#111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gold accent line */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 120,
          height: 2,
          background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
      />

      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 },
            borderRadius: "20px",
            backgroundColor: "rgba(26, 26, 26, 0.5)",
            border: "1px solid #2A2A2A",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -1,
              borderRadius: "20px",
              padding: 1,
              background: "linear-gradient(135deg, #C9A84C20, transparent 50%, #C9A84C20)",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "xor",
              WebkitMaskComposite: "xor",
              pointerEvents: "none",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "#F5F5F0",
              mb: 2,
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.3rem" },
              lineHeight: 1.4,
            }}
          >
            جاهز تضيف لمسة مختلفة لإطلالتك؟
          </Typography>

          <Typography
            sx={{
              color: "#999",
              fontSize: { xs: "0.9rem", md: "1rem" },
              mb: 4,
              maxWidth: 500,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            اختر البكج المناسب إلك وخلّي التفاصيل تحكي عنك.
          </Typography>

          {/* Gold decorative line */}
          <Box
            sx={{
              width: 60,
              height: 2,
              backgroundColor: "#C9A84C",
              mx: "auto",
              mb: 4,
            }}
          />

          <Button
            variant="contained"
            size="large"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#C9A84C",
              color: "#0A0A0A",
              px: { xs: 4, md: 6 },
              py: 1.5,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              fontWeight: 700,
              borderRadius: "8px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#D4B85A",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 30px rgba(201, 168, 76, 0.3)",
              },
            }}
          >
            اطلب بكجك الآن
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
