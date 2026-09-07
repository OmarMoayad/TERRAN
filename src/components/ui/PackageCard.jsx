"use client";

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import { INSTAGRAM_URL } from "@/config/constants";

export default function PackageCard({ pkg }) {
  const { name, price, currency, description, image, featured, badge, features } = pkg;

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: featured ? "#1C1C1C" : "#151515",
        border: featured ? "1.5px solid #C9A84C" : "1px solid #2A2A2A",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.4s ease",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: featured
            ? "0 20px 60px rgba(201, 168, 76, 0.15)"
            : "0 20px 60px rgba(0, 0, 0, 0.3)",
          borderColor: "#C9A84C",
        },
      }}
    >
      {/* Badge */}
      {badge && (
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            zIndex: 2,
            backgroundColor: "#C9A84C",
            color: "#0A0A0A",
            px: 2,
            py: 0.5,
            borderRadius: "20px",
            fontSize: "0.75rem",
            fontWeight: 700,
          }}
        >
          {badge}
        </Box>
      )}

      {/* Image Area */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 200, md: 240 },
          overflow: "hidden",
          backgroundColor: "#111",
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          style={{
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Price overlay */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            display: "flex",
            alignItems: "baseline",
            gap: 0.5,
          }}
        >
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "#F5F5F0",
              lineHeight: 1,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            {price}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "#C9A84C",
            }}
          >
            {currency}
          </Typography>
        </Box>
      </Box>

      {/* Content */}
      <Box
        sx={{
          p: { xs: 2.5, md: 3 },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: "#F5F5F0",
            fontSize: { xs: "1.3rem", md: "1.5rem" },
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            color: "#999",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            mb: 2.5,
          }}
        >
          {description}
        </Typography>

        {/* Features */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, mb: 3 }}>
          {features.map((feature, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CheckIcon
                sx={{
                  fontSize: 16,
                  color: "#C9A84C",
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#AAAAAA",
                }}
              >
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* CTA Button */}
        <Box sx={{ mt: "auto" }}>
          <Button
            variant={featured ? "contained" : "outlined"}
            fullWidth
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              py: 1.3,
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.95rem",
              ...(featured
                ? {
                    backgroundColor: "#C9A84C",
                    color: "#0A0A0A",
                    "&:hover": {
                      backgroundColor: "#D4B85A",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 20px rgba(201, 168, 76, 0.3)",
                    },
                  }
                : {
                    borderColor: "#C9A84C",
                    color: "#C9A84C",
                    "&:hover": {
                      borderColor: "#D4B85A",
                      backgroundColor: "rgba(201, 168, 76, 0.08)",
                    },
                  }),
            }}
          >
            اطلب البكج
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
