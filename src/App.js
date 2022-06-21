import "./App.css";
import { useContext } from "react";
import { Box, Stack } from "@mui/material";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import Profile from "./Components/Profile";
import { AppContext } from "./AppContext";
import Footer from "./Components/Footer";
function App() {
  const { profileShow } = useContext(AppContext);
  const [showProfile, setShowProfile] = profileShow;

  return (
    <Stack sx={{ maxWidth: "100vw" }} className='App'>
      <Nav />
      <Landing />
      <Profile />
      <Footer />
    </Stack>
  );
}

export default App;
