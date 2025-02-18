import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#0D1117", color: "#ffffff", px: 8, py: 6 }}>
      <Grid container spacing={4}>
        {/* Logo and Description */}
        <Grid item xs={12} sm={3}>
          <Box
            component="img"
            src="https://cdn.prod.website-files.com/654cc1953659fbce12c35b03/67527855193d38902a706e0a_Logo%20nav%20bar.svg"
            alt="Astuto Logo"
            sx={{ height: 55 }}
          />
          <Typography variant="body2" sx={{ mt: 2, color: "#B0B0B0" }}>
            Astuto simplifies cloud cost governance, ensuring visibility,
            compliance, and accountability across your cloud and cloud spend.
          </Typography>
        </Grid>

        {/* Product */}
        <Grid item xs={12} sm={2}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#ffffff" }}
          >
            PRODUCT
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="#" underline="none" color="#B0B0B0" display="block">
              OneLens
            </Link>
            <Link href="#" underline="none" color="#B0B0B0" display="block">
              FinOps
            </Link>
            <Link href="#" underline="none" color="#B0B0B0" display="block">
              Pricing
            </Link>
            <Link
              href="#"
              underline="none"
              color="#ffffff"
              display="block"
              fontWeight="bold"
            >
              Free Cloud Cost Assessment
            </Link>
          </Box>
        </Grid>

        {/* Company */}
        <Grid item xs={12} sm={2}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#ffffff" }}
          >
            COMPANY
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="#" underline="none" color="#B0B0B0" display="block">
              About Us
            </Link>
            <Link href="#" underline="none" color="#B0B0B0" display="block">
              Privacy Policy
            </Link>
          </Box>
        </Grid>

        {/* Resources */}
        <Grid item xs={12} sm={2}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#ffffff" }}
          >
            RESOURCES
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="#" underline="none" color="#B0B0B0" display="block">
              Blog
            </Link>
            <Link href="#" underline="none" color="#B0B0B0" display="block">
              Customer Success Stories
            </Link>
          </Box>
        </Grid>

        {/* Popular Resources */}
        <Grid item xs={12} sm={3}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#ffffff" }}
          >
            POPULAR RESOURCES
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="#" underline="none" color="#B0B0B0" display="block">
              Save costs on AWS elasticache & MemoryDB by migrating to valkey
              from Redis.
            </Link>
            <Link href="#" underline="none" color="#B0B0B0" display="block">
              Move from cloud cost visibility to cost control using Unit
              Economics.
            </Link>
            <Link href="#" underline="none" color="#B0B0B0" display="block">
              How BrightQuery cut AWS costs by 20% in just two weeks with
              OneLens.
            </Link>
          </Box>
        </Grid>

        {/* Contact */}
        <Grid item xs={12} sm={2}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#ffffff" }}
          >
            GET IN TOUCH
          </Typography>
          <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
            <PhoneIcon sx={{ mr: 1, color: "#B0B0B0" }} />
            <Typography variant="body2" sx={{ color: "#B0B0B0" }}>
              +91 80 7117 5705
            </Typography>
          </Box>
          <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ mr: 1, color: "#B0B0B0" }} />
            <Typography variant="body2" sx={{ color: "#B0B0B0" }}>
              sales@astuto.ai
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* White Divider Line */}
      <Divider sx={{ backgroundColor: "#ffffff", opacity: 0.2, my: 4 }} />

      {/* Copyright and Social Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="body2" sx={{ color: "#B0B0B0" }}>
          Copyright © 2024 Astuto Technologies Pvt Ltd. | All Rights Reserved
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="#" underline="none" color="#B0B0B0" sx={{ mr: 2 }}>
            Privacy Policy
          </Link>
          <Link href="#" underline="none" color="#B0B0B0" sx={{ mr: 2 }}>
            Terms of Service
          </Link>
          <IconButton sx={{ color: "#B0B0B0" }}>
            <CloseIcon />
          </IconButton>
          <IconButton sx={{ color: "#B0B0B0" }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
