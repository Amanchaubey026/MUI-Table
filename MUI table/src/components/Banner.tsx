import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#047857",
        padding: { xs: "0.75rem 1rem", sm: "0.75rem 2rem" },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        alignItems: "center",
        textAlign: { xs: "center", sm: "left" },
        gap: 2,
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: { xs: "0.875rem", sm: "1rem" },
          fontWeight: 500,
        }}
      >
        The State of AWS Cost Optimization in India - Insights from 150+ Professionals on AWS Cost Management
      </Typography>
      <Button
        endIcon={<ArrowForwardIcon />}
        sx={{
          backgroundColor: "white",
          color: "#047857",
          borderRadius: "0.375rem",
          fontWeight: 600,
          padding: "0.5rem 1rem",
          "&:hover": {
            backgroundColor: "#F3F4F6",
          },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        Get my free copy
      </Button>
    </Box>
  );
};
