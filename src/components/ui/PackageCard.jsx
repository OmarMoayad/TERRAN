"use client";

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import InstagramIcon from "@mui/icons-material/Instagram";
import { INSTAGRAM_URL } from "@/config/constants";

export default function PackageCard({ pkg }) {
  const {
    name,
    price,
    currency,
    description,
    image,
    featured,
    badge,
    ctaLabel,
    featureGroups,
  } = pkg;

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        border: featured ? "2px solid #1A1A1A" : "1px solid #EAE7E1",
        borderRadius: "2px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: { xs: "100%", sm: "300px", md: 0 },
        maxWidth: { xs: "480px", md: "none" },
        boxShadow: featured
          ? "0 10px 30px rgba(0,0,0,0.06)"
          : "0 4px 20px rgba(0,0,0,0.03)",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 14px 40px rgba(0,0,0,0.09)",
          borderColor: "#1A1A1A",
        },
      }}
    >
      {/* ── Product Image ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 220, md: 250 },
          overflow: "hidden",
          backgroundColor: "#F5F3EF",
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Badge — top right in RTL */}
        {badge && (
          <Box
            sx={{
              position: "absolute",
              top: 14,
              right: 14,
              backgroundColor: featured ? "#1A1A1A" : "rgba(255, 255, 255, 0.95)",
              border: featured ? "none" : "1px solid #E0DCD5",
              color: featured ? "#FAF9F7" : "#1A1A1A",
              px: 1.6,
              py: 0.5,
              borderRadius: "2px",
              fontSize: "0.72rem",
              fontWeight: 700,
              zIndex: 2,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {badge}
          </Box>
        )}

        {/* Top left serial or mini logo watermark */}
        <Box
          sx={{
            position: "absolute",
            top: 14,
            left: 14,
            backgroundColor: "rgba(255, 255, 255, 0.88)",
            border: "1px solid #EAE7E1",
            color: "#888888",
            px: 1,
            py: 0.3,
            borderRadius: "2px",
            fontSize: "0.62rem",
            fontWeight: 600,
            zIndex: 2,
          }}
        >
          TERRAN
        </Box>
      </Box>

      {/* ── Card Body ── */}
      <Box
        sx={{
          p: { xs: 2.5, md: 3 },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          direction: "rtl",
        }}
      >
        {/* Title & Price Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            mb: 1.5,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#1A1A1A",
              letterSpacing: "-0.01em",
            }}
          >
            {name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.4 }}>
            <Typography
              sx={{
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "#1A1A1A",
                fontFamily: "serif, sans-serif",
                lineHeight: 1,
              }}
            >
              {price}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#666666",
              }}
            >
              {currency}
            </Typography>
          </Box>
        </Box>

        {/* Short Description */}
        <Typography
          sx={{
            color: "#666666",
            fontSize: "0.85rem",
            lineHeight: 1.7,
            mb: 2.5,
            minHeight: "44px",
          }}
        >
          {description}
        </Typography>

        {/* Gray Features Container */}
        {featureGroups &&
          featureGroups.map((group, gi) => (
            <Box
              key={gi}
              sx={{
                backgroundColor: "#F8F7F4",
                border: "1px solid #EAE7E1",
                borderRadius: "2px",
                p: 2,
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  mb: 1.5,
                  textAlign: "right",
                }}
              >
                {group.label}
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px 14px",
                }}
              >
                {group.items.map((feature, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 0.8,
                      flexDirection: "row",
                    }}
                  >
                    <CheckIcon
                      sx={{
                        fontSize: 14,
                        color: "#1A1A1A",
                        mt: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.78rem",
                        color: "#444444",
                        lineHeight: 1.45,
                        textAlign: "right",
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}

        {/* Spacer */}
        <Box sx={{ mt: "auto" }} />

        {/* Action Button */}
        <Button
          variant={featured ? "contained" : "outlined"}
          fullWidth
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<InstagramIcon sx={{ ml: 0.5, mr: -0.5, fontSize: "18px !important" }} />}
          sx={{
            py: 1.3,
            borderRadius: "2px",
            fontWeight: 700,
            fontSize: "0.85rem",
            direction: "rtl",
            fontFamily: "Cairo, sans-serif",
            ...(featured
              ? {
                  backgroundColor: "#1A1A1A",
                  color: "#FAF9F7",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#000000",
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                  },
                }
              : {
                  backgroundColor: "#FFFFFF",
                  borderColor: "#D2CEC6",
                  color: "#1A1A1A",
                  "&:hover": {
                    borderColor: "#1A1A1A",
                    backgroundColor: "#FAF9F7",
                  },
                }),
          }}
        >
          {ctaLabel || "اطلب عبر إنستقرام"}
        </Button>
      </Box>
    </Box>
  );
}
