import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function Footer() {
  return (
    <Stack
      direction='column'
      sx={{
        height: 250,
        width: "100vw",
        padding: "30px",
        alignItems: "flext-start",
        color: "#fff",
        boxSizing: "border-box",
        backgroundColor: "#596029",
        textAlign: "left",
      }}
    >
      <Typography variant='h5' component='h1'>
        Refrences
      </Typography>
      <Box>
        <ul>
          <li>- Siyabonga Qatha Shongwe (Zululand District)</li>
          <li>- Mxolisi Shenge (Real All Stars)</li>
          <li>- Mncedisi "Dada" Sibiya (Njampela F.C)</li>
          <li>078 417 1380</li>
        </ul>
      </Box>
    </Stack>
  );
}

export default Footer;
