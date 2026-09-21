"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { INSTAGRAM_URL } from "@/config/constants";

export default function FinalCTA() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 9, md: 12 },
        backgroundColor: "#FAF9F7",
        borderTop: "1px solid #EAE7E1",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 6, md: 8 },
            px: { xs: 3, sm: 6, md: 8 },
            borderRadius: "2px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #EAE7E1",
            boxShadow: "0 6px 30px rgba(0,0,0,0.03)",
            position: "relative",
          }}
        >
          {/* Logo watermark */}
          <Box
            sx={{
              mb: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="تيران Terran"
              width={100}
              height={50}
              style={{ objectFit: "contain", width: "auto", height: "44px" }}
            />
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "#1A1A1A",
              mb: 2,
              fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.4rem" },
              letterSpacing: "-0.01em",
              lineHeight: 1.35,
            }}
          >
            جاهز تضيف لمسة مختلفة لإطلالتك؟
          </Typography>

          <Typography
            sx={{
              color: "#666666",
              fontSize: { xs: "0.94rem", md: "1.02rem" },
              mb: 4.5,
              maxWidth: 500,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            اختر البكج المناسب لك ودع التفاصيل تعمل بشكل متناسق لترسم التميز الذي تبحث عنه، بكل أناقة.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<InstagramIcon sx={{ ml: 0.5, mr: -0.5 }} />}
            sx={{
              backgroundColor: "#1A1A1A",
              color: "#FAF9F7",
              px: { xs: 4, sm: 6 },
              py: 1.6,
              fontSize: { xs: "0.92rem", md: "1rem" },
              fontWeight: 700,
              borderRadius: "2px",
              boxShadow: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#000000",
                transform: "translateY(-1px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.14)",
              },
            }}
          >
            اطلب عبر إنستقرام
          </Button>

          {/* Trust Checkmarks row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 2, sm: 4, md: 5 },
              mt: 5,
              pt: 4,
              borderTop: "1px solid #EAE7E1",
              flexWrap: "wrap",
            }}
          >
            {[
              "توصيل سريع لكافة المناطق",
              "دفع آمن عند الاستلام",
              "معاينة قبل الاستلام",
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                }}
              >
                <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#1A1A1A" }} />
                <Typography
                  sx={{
                    fontSize: "0.82rem",
                    color: "#555555",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
