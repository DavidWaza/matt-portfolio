import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import Hamburger from '@/components/Hamburger'

export default function NavAppBar() {
  return (
    <Box sx={{ flexGrow: 1, height: "10vh" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", marginTop: 3 }}
      >
        <Toolbar>
          <Box>
            <FacebookTwoToneIcon
              sx={{ fontSize: "18px", color: "burlywood", cursor: "pointer" }}
            />
            <InstagramIcon
              sx={{
                fontSize: "18px",
                marginLeft: 1.5,
                color: "burlywood",
                cursor: "pointer",
              }}
            />
            <TwitterIcon
              sx={{
                fontSize: "18px",
                marginLeft: 1.5,
                color: "burlywood",
                cursor: "pointer",
              }}
            />
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            <Link href="/">DAMILARE</Link>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: "burlywood" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
