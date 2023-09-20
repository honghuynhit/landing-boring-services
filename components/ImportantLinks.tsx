import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Logo from "./Logo";
import GradientDivider from "./GradientDivider";
import { importantLinks } from "../constants/important-links";
import { colors, typography } from "../styles/theme";

export interface ImportantLinksProps {
  noLogo?: boolean;
}

const ImportantLinks = (props: ImportantLinksProps) => {
  const { noLogo } = props;

  return (
    <Box component="div" sx={{ py: 10 }}>
      <Container>
        <Grid container spacing={6}>
          {!noLogo &&
            <Grid item xs={12} lg={4}>
              <Stack spacing={4}>
                <Link href="/" aria-label="Logo Link">
                  <Logo />
                </Link>
                {/* <EmailForm /> */}
              </Stack>
            </Grid>
          }
          <Grid item xs={12} lg={8}>
            <Grid container spacing={6}>
              {importantLinks.map((category, i) => {
                return (
                  <Grid key={i} item xs={12} md={4}>
                    <Stack spacing={3}>
                      <Box component="div">
                        <Typography
                          component="h2"
                          fontWeight={800}
                          fontFamily={typography.fontFamilies.extended}
                          fontSize={typography.fontSizes[7]}
                          color={colors.white}
                          textTransform="uppercase"
                          sx={{ display: "inline-block", mb: 1 }}
                        >
                          {category.name}
                        </Typography>
                        <GradientDivider />
                      </Box>
                      <Stack spacing={2}>
                        {category.links.map((link, i) => (
                          <Link
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noredirect"
                            underline="none"
                            sx={{
                              width: "fit-content",
                              display: "inline",
                              "&:hover": {
                                color: colors.white,
                              },
                            }}
                          >
                            <Typography sx={{ color: "inherit" }}>
                              {link.name}
                            </Typography>
                          </Link>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ImportantLinks;
