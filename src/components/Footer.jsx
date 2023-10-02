import React from "react";
import Logo from "../assets/assets/images/Logo-1.png";
import { Box, Stack } from "@mui/material";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="41px" />
      </Stack>
    </Box>
  );
};

export default Footer;
