import { useState } from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar
          sx={{
            backgroundColor: "#243a57",
            textAlign: "left",
          }}
        >
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              fontFamily: "Paytone One, sans-serif",
              fontSize: 26,
            }}
          >
            Comfort Fanelesbonge
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
