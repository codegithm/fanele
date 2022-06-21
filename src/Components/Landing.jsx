import { useState, useRef, useEffect, useContext } from "react";
import { Box, Paper, Slide, Typography, Button, Fade } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AppContext } from "../AppContext";

function Landing() {
  const [checked, setChecked] = useState(false);
  const { playerProfile, profileShow } = useContext(AppContext);
  const [showProfile, setShowProfile] = profileShow;
  const [profile, setProfile] = playerProfile;
  const containerRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    setChecked(true);
    setShowProfile(true);
  }, []);
  const height = window.innerHeight;
  const toProfile = () => {
    window.scrollTo({ top: height, behavior: "smooth" });
    setProfile(true);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight / 2 - 100) {
      setProfile(true);
    }
  });
  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100vw",
        height: "100vh",
        maxHeight: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./back2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box></Box>
      <Slide
        direction='down'
        timeout={{ enter: 1500, exit: 400 }}
        easing={{ enter: "cubic-bezier(0,-1.55,.61,1.58)", exit: "linear" }}
        in={checked}
        container={containerRef.current}
        sx={{
          height: "50vh",
          background: "transparent",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <KeyboardArrowUpIcon
            sx={{
              fontSize: 80,
            }}
          />
          <Fade
            direction='up'
            timeout={{ enter: 3500, exit: 400 }}
            easing={{ enter: "cubic-bezier(0,-1.55,.61,1.58)", exit: "linear" }}
            in={checked}
          >
            <Typography variant='h6' component='h1'>
              IMPROVE YOUR TEAM WITH THIS DISCOVERY
            </Typography>
          </Fade>
          <Fade
            direction='up'
            timeout={{ enter: 4000, exit: 400 }}
            easing={{ enter: "cubic-bezier(0,-1.55,.61,1.58)", exit: "linear" }}
            in={checked}
          >
            <Button
              variant='contained'
              sx={{
                backgroundColor: "#243a57",
              }}
              onClick={toProfile}
            >
              Discover
            </Button>
          </Fade>
        </Paper>
      </Slide>
    </Box>
  );
}

export default Landing;
