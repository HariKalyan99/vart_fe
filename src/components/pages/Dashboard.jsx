import React from "react";
import hero from "../../assets/logo.gif";
import NavigationBar from "../common-templates/NavigationBar";
import Card from "../common-templates/Card";
import FooterBar from "../common-templates/FooterBar";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { FaChessKing } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiPikeman } from "react-icons/gi";
import { FaHandPointer } from "react-icons/fa";
import LightTooltip from "../utils/MUITooltip";
import { Box } from "@mui/material";

const actions = [
  { icon: <FaChessKing size={25} />, name: "kingofjungle" },
  { icon: <GiQueenCrown size={25} />, name: "queenofjungle" },
  { icon: <GiPikeman size={25} />, name: "zookeeper" },
];

const Dashboard = () => {
  return (
    <>
      <Box className="bg-chestnut">
        <NavigationBar navStyle={"dash"} />
        
        <Box className="w-full h-auto min-h-[100vh] flex bg-chestnut relative flex justify-center items-center flex-col">
          <Box className="w-full h-[45rem] flex justify-center items-center mt-4 container">
            <img
              src={hero}
              alt="hero_img"
              className="w-[50%] h-[90%] object-contain"
            />
            <Box className="w-[50%] h-full flex justify-center items-start flex-col">
              <span className="text-[4rem] font-bold text-nostalgicblue text-wrap">
                Welcome to Zootopia!
              </span>
              <span className="text-[2rem] font-bold text-white text-wrap inline-block ">
                All the wonderfull animals get registered to get access in our
                jungle..
              </span>
            </Box>
          </Box>
          <Box className="border w-full container" />
          <span className="text-left w-full container text-[2rem] text-nostalgicblue">
            Registered animals
          </span>
          <Box className="mt-[1rem] container w-full p-4 flex flex-wrap justify-center items-center gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, ind) => (
              <Card key={ind} ind={_} />
            ))}
          </Box>
        </Box>
        <FooterBar />
      </Box>

      <Box
        sx={{
          height: 320,
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "fixed",
          zIndex: "100",
          bottom: 0,
          right: 0,
        }}
      >
        <LightTooltip title="Request for role?" placement="top">
          <SpeedDial
            ariaLabel="SpeedDial request for roles"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<FaHandPointer size={25} />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </LightTooltip>
      </Box>
    </>
  );
};

export default Dashboard;
