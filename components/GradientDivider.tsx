import React from "react";
import { Box } from "@mui/material";
import { gradients } from "../styles/theme";

const GradientDivider = () => (
  <Box
    component="div"
    sx={{ width: "100%", height: 2, background: gradients.Linear }}
  />
);

export default GradientDivider;
