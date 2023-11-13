import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { builders, backers, protocols } from "../constants/community";
import DividerTitle from "./DividerTitle";
import CommunityLogo from "./CommunityLogo";
import WrapperGraphic from "./WrapperGraphic";
import SectionTitle from "./SectionTitle";
import LeadingTheChargeImage from "../public/images/leading_bg.webp";
import Image from "next/image";

const CommunitySection = () => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "calc(var(--vh, 1vh) * 100)",
        mt: [8, 12, 0],
        width: "100%",
      }}
    >
      <Container sx={{ position: "relative" }}>
        <Box
          component="div"
          sx={{
            width: ["100%", "100%"],
            ml: ["0%", 0],
            mt: [4, 8],
            position: "relative",
            transform: ["scale(1.25)", null],
          }}
        >
          {[...Array(12)].map((unknownWrapper, i) => {
            unknownWrapper = {
              position: {
                r: `${Math.random() * 18 + 1}calc(var(--vmin, 1vmin) * )`,
                x: Math.random() * 80 + 10,
                y: Math.random() * 80 + 10,
              },
            };
            return (
              <WrapperGraphic
                key={i}
                {...unknownWrapper}
                blur={Math.random() * 24 + 10}
                opacity={Math.random() * 0.3 + 0.2}
              />
            );
          })}
          <Box
            component="div"
            sx={{
              // aspectRatio: "1182/882",
              position: "relative",
              zIndex: 0,
              width: "100%",
            }}
          >
            <Image
              src={LeadingTheChargeImage}
              alt="The Wrap Ecosystem background imagery"
              placeholder="blur"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          {protocols.map((protocol, i) => {
            return <WrapperGraphic key={protocol.title} {...protocol} />;
          })}
        </Box>
        <Box component="div" sx={{ position: "relative", top: [-24, -48] }}>
          <DividerTitle>Built and Backed By the Best</DividerTitle>
          <Grid
            container
            columnSpacing={[4, 6, 12]}
            rowSpacing={6}
            sx={{ justifyContent: "center" }}
          >
            {backers.map((backer, i) => (
              <Grid key={i} item xs={4} sm={3} lg={12 / 6}>
                <CommunityLogo {...backer} />
              </Grid>
            ))}
            {builders.map((builder, i) => (
              <Grid key={i} item xs={4} sm={3} lg={12 / 5}>
                <CommunityLogo {...builder} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CommunitySection;
