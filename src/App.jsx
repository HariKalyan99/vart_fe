import { Box, IconButton } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import LightTooltip from "./components/utils/MUITooltip";

function App() {
  return (
    <Box>
      <Outlet />
      <Box className="fixed bottom-5 left-5 flex gap-2">
        <Link to={`https://github.com/HariKalyan99/vart_fe.git`}>
          <LightTooltip title="Frontend" placement="top">
            <IconButton sx={{ color: "black" }} >
              <FaGithub size={35} />
            </IconButton>
          </LightTooltip>
        </Link>
        <Link to={`https://github.com/HariKalyan99/vart.git`}>
          <LightTooltip title="Backend" placement="top">
            <IconButton sx={{ color: "black" }} >
              <SiGithubactions size={35} />
            </IconButton>
          </LightTooltip>
        </Link>
      </Box>
    </Box>
  );
}

export default App;
