import { useContext, useRef, useState } from "react";
import { AppContext } from "../AppContext";
import HeightIcon from "@mui/icons-material/Height";
import PublicIcon from "@mui/icons-material/Public";
import CakeIcon from "@mui/icons-material/Cake";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ScaleIcon from "@mui/icons-material/Scale";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import GroupsIcon from "@mui/icons-material/Groups";
import UndoIcon from "@mui/icons-material/Undo";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import {
  Box,
  Paper,
  Slide,
  Typography,
  Button,
  Fade,
  Stack,
} from "@mui/material";

function Profile() {
  const { playerProfile, profileShow } = useContext(AppContext);
  const [showProfile, setShowProfile] = profileShow;
  const [profile, setProfile] = playerProfile;
  const [showCard, setShowCard] = useState(false);
  const containerRef = useRef(null);
  const width = window.innerWidth;
  return (
    <Box
      ref={containerRef}
      sx={{
        height: "auto",
        maxWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "#243a57",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      <Typography
        variant='h5'
        component='h1'
        sx={{
          fontFamily: "Paytone One, sans-serif",
          marginTop: "70px",
        }}
      >
        {" "}
        Player profile
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Slide
          direction={width < 650 ? "right" : "up"}
          timeout={{ enter: 1500, exit: 400 }}
          easing={{ enter: "cubic-bezier(0,-1.55,.61,1.58)", exit: "linear" }}
          in={profile}
          container={containerRef.current}
        >
          <Paper
            sx={{
              minHeight: 320,
              minWidth: 320,
              maxHeight: 320,
              maxWidth: 320,
              margin: "30px",
              padding: "0px",
              boxSizing: "border-box",
              textAlign: "left",
              backgroundImage: "url('/profile.jpeg')",
              backgroundPosition: "-531px 670px",
            }}
            elevation={3}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(45deg, rgba(255,255,255,1), rgba(255,255,255,0))",
                height: "100%",
                width: "100%",
                padding: "20px",
                boxSizing: "border-box",
                borderRadius: "4px",
              }}
            >
              <Stack direction='column'>
                <Fade
                  direction='up'
                  timeout={{ enter: 3500, exit: 400 }}
                  easing={{
                    enter: "cubic-bezier(0,-1.55,.61,1.58)",
                    exit: "linear",
                  }}
                  in={profile}
                >
                  <Typography
                    variant='h6'
                    component='h1'
                    sx={{
                      fontWeight: "900",
                    }}
                  >
                    Player
                  </Typography>
                </Fade>
                <Fade
                  direction='up'
                  timeout={{ enter: 4500, exit: 700 }}
                  easing={{
                    enter: "cubic-bezier(0,-1.55,.61,1.58)",
                    exit: "linear",
                  }}
                  in={profile}
                >
                  <ul>
                    <li>
                      <Box
                        sx={{
                          paddingRight: "7px",
                        }}
                      >
                        <PersonOutlineIcon />
                      </Box>
                      Comfort Fanelesbonge Sibiya
                    </li>
                    <li>
                      <Box
                        sx={{
                          paddingRight: "7px",
                        }}
                      >
                        <CakeIcon />
                      </Box>
                      19 January 2002
                    </li>
                    <li>
                      <Box
                        sx={{
                          paddingRight: "7px",
                        }}
                      >
                        <HeightIcon />
                      </Box>
                      1.75m
                    </li>
                    <li>
                      <Box
                        sx={{
                          paddingRight: "7px",
                        }}
                      >
                        <ScaleIcon />
                      </Box>
                      70kg
                    </li>
                    <li>
                      <Box
                        sx={{
                          paddingRight: "7px",
                        }}
                      >
                        <SportsSoccerIcon />
                      </Box>
                      Midfielder
                    </li>
                    <li>
                      <Box
                        sx={{
                          paddingRight: "7px",
                        }}
                      >
                        <PublicIcon />
                      </Box>
                      South Africa
                    </li>
                  </ul>
                </Fade>
              </Stack>
            </Box>
          </Paper>
        </Slide>
        <Slide
          direction={width < 650 ? "right" : "up"}
          timeout={{ enter: 2500, exit: 400 }}
          easing={{ enter: "cubic-bezier(0,-1.55,.61,1.58)", exit: "linear" }}
          in={profile}
          container={containerRef.current}
        >
          <Paper
            sx={{
              minHeight: 320,
              minWidth: 320,
              maxHeight: 320,
              maxWidth: 320,
              margin: "30px",
              padding: "0px",
              boxSizing: "border-box",
              textAlign: "left",
              backgroundImage: "url('/club.jpeg')",
              backgroundPosition: "-531px 670px",
            }}
            elevation={3}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(45deg, rgba(255,255,255,1), rgba(255,255,255,0))",
                height: "100%",
                width: "100%",
                padding: "20px",
                boxSizing: "border-box",
                borderRadius: "4px",
              }}
            >
              <Stack direction='column'>
                <Fade
                  direction='up'
                  timeout={{ enter: 4000, exit: 400 }}
                  easing={{
                    enter: "cubic-bezier(0,-1.55,.61,1.58)",
                    exit: "linear",
                  }}
                  in={profile}
                >
                  <Typography
                    variant='h6'
                    component='h1'
                    sx={{
                      fontWeight: "900",
                    }}
                  >
                    Club Information
                  </Typography>
                </Fade>
                <Fade
                  direction='up'
                  timeout={{ enter: 4700, exit: 1000 }}
                  easing={{
                    enter: "cubic-bezier(0,-1.55,.61,1.58)",
                    exit: "linear",
                  }}
                  in={profile}
                >
                  <ul>
                    <Box
                      sx={{
                        paddingRight: "7px",
                      }}
                    >
                      <GroupsIcon />
                      <li>Current: Njampela Football Club(ABC Motsepe)</li>
                    </Box>
                    <Box
                      sx={{
                        paddingRight: "7px",
                      }}
                    >
                      <UndoIcon />
                      <li>Prev: Mabuya Winners(Ameture)</li>
                    </Box>
                  </ul>
                </Fade>
              </Stack>
            </Box>
          </Paper>
        </Slide>
        <Slide
          direction={width < 650 ? "right" : "up"}
          timeout={{ enter: 2500, exit: 400 }}
          easing={{ enter: "cubic-bezier(0,-1.55,.61,1.58)", exit: "linear" }}
          in={profile}
          container={containerRef.current}
        >
          <Paper
            sx={{
              minHeight: 320,
              minWidth: 320,
              maxWidth: 320,
              maxWidth: 320,
              margin: "30px",
              padding: "0px",
              boxSizing: "border-box",
              textAlign: "left",
              backgroundImage: "url('/arch.jpeg')",
              backgroundPosition: "-238px 607px",
            }}
            elevation={3}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(45deg, rgba(255,255,255,1), rgba(255,255,255,0))",
                height: "100%",
                width: "100%",
                padding: "20px",
                boxSizing: "border-box",
                borderRadius: "4px",
              }}
            >
              <Stack direction='column'>
                <Fade
                  direction='up'
                  timeout={{ enter: 4500, exit: 400 }}
                  easing={{
                    enter: "cubic-bezier(0,-1.55,.61,1.58)",
                    exit: "linear",
                  }}
                  in={profile}
                >
                  <Typography
                    variant='h6'
                    component='h1'
                    sx={{
                      fontWeight: "900",
                    }}
                  >
                    Archievements
                  </Typography>
                </Fade>
                <Fade
                  direction='up'
                  timeout={{ enter: 5000, exit: 1000 }}
                  easing={{
                    enter: "cubic-bezier(0,-1.55,.61,1.58)",
                    exit: "linear",
                  }}
                  in={profile}
                >
                  <ul>
                    <Box
                      sx={{
                        paddingRight: "7px",
                      }}
                    >
                      <SportsSoccerIcon />
                      <li>Represented Zululand District in SALGA GAMES</li>
                    </Box>
                    <Box
                      sx={{
                        paddingRight: "7px",
                      }}
                    >
                      <CalendarMonthIcon />
                      <li>2020/2021 season: 3 games, 4 assists</li>
                    </Box>
                    <Box
                      sx={{
                        paddingRight: "7px",
                      }}
                    >
                      <CalendarMonthIcon />
                      <li>2021/2022 season: 18 games, 7 goals, 8 assists</li>
                    </Box>
                  </ul>
                </Fade>
              </Stack>
            </Box>
          </Paper>
        </Slide>
      </Box>
    </Box>
  );
}

export default Profile;
