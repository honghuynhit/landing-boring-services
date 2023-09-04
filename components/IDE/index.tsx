import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { animations, colors } from "../../styles/theme";
import Dot from "./Dot";
import Frame from "./Frame";
import { frame, LangProps } from "../../constants/IDE";
import PolywrapBlobYellow from "../../public/images/hero/blobs/7.webp";
import PolywrapBlobMagenta from "../../public/images/hero/blobs/10.webp";
import Image from "next/image";

const IDE = () => {

  const allLangs: LangProps[] = frame.langs;
  const maxLinesClient = 2 + allLangs.reduce((acc, value) => {
    const codeLength: number = value.code.client
      .split("\n")
      .filter((line: any) => line.length >= 1).length;
    return (acc = acc > codeLength ? acc : codeLength);
  }, 0);
  const maxLinesCodegen = 2 + allLangs.reduce((acc, value) => {
    const codeLength: number = value.code.codegen
      .split("\n")
      .filter((line: any) => line.length >= 1).length;
    return (acc = acc > codeLength ? acc : codeLength);
  }, 0);

  return (
    <Stack
      spacing={3}
      sx={{ position: "relative" }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          width: "40%",
          transform: "rotate(33deg)",
          right: ["-14%", "-17%"],
          top: ["-5%", "-13%"],
        }}
      >
        <Image
          src={PolywrapBlobYellow}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            ...animations.float,
            animation: `float 11s 0.25s ease-in-out infinite`,
          }}
        />
      </Box>
      <Box
        component="div"
        sx={{
          position: "absolute",
          width: "50%",
          transform: "rotate(-83deg)",
          left: ["-15%", "-12%"],
          bottom: ["-6%", "-20%"],
        }}
      >
        <Image
          src={PolywrapBlobMagenta}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            ...animations.float,
            animation: `float 16s ease-in-out infinite`,
          }}
        />
      </Box>
      <Box
        component="div"
        sx={{
          background: "linear-gradient(180deg, #16183988, #06071a88 70%)",
          backdropFilter: "blur(32px)",
          borderRadius: 4,
          width: "100%",
          border: `2px solid ${colors.iris[500]}`,
          // ...gradientBorderStyles,
          "&:hover": {
            boxShadow: null,
          },
        }}
      >
        <Frame
          slug={frame.slug}
          langs={frame.langs}
          maxLines={{
            client: maxLinesClient,
            codegen: maxLinesCodegen
          }}
        />
      </Box>
    </Stack>
  );
};

export default IDE;
