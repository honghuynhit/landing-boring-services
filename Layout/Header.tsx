import React, { useState } from "react";
import { Box, Grid, Container, Dialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/styles";
import Link from "next/link";
import Logo from "../components/Logo";
import ImportantLinks from "../components/ImportantLinks";
import { colors } from "../styles/theme";
import useIsDesktop from "../hooks/useIsDesktop";

const CloseButton = styled(CloseIcon)({
  color: colors.white,
  width: 32,
  height: 32,
  cursor: "pointer",
});

const LeftPadding = styled("div")({
  width: 32,
  height: 32
});

const MenuButton = styled(MenuIcon)({
  color: colors.white,
  width: 32,
  height: 32,
  cursor: "pointer",
});

const Header = () => {
  const isDesktop = useIsDesktop();
  return (
    <Box
      component="header"
      sx={{ mt: 6, position: "absolute", width: "100%", zIndex: 2 }}
    >
      <Container>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ height: 40 }}>
            {isDesktop ? (
              <Logo animateBorderWidth />
            ) : (
              <Logo animateBorderWidth height={20} marginTop={12} />
            )}
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
