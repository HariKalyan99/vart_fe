import React, { useEffect } from "react";
import hero from "../../assets/logo.gif";
import nohero from "../../assets/mon.gif";
import NavigationBar from "../common-templates/NavigationBar";
import AnimalCard from "../common-templates/Card";
import FooterBar from "../common-templates/FooterBar";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FaChessKing } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiPikeman } from "react-icons/gi";
import { FaHandPointer } from "react-icons/fa";
import LightTooltip from "../utils/MUITooltip";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { crudActions, getList } from "../../../slices/CRUDSlices/CrudOperationSlice";
import { authActions } from "../../../slices/AuthenticationSlices/AuthSlice";


const Dashboard = () => {

  const {listOfInduviduals} = useSelector((state) => state.crud);
  const loginInduvidual = localStorage.getItem('role');
  const dispatch = useDispatch();

  let actions;
  if(loginInduvidual === "kingofjungle"){
    actions = [
      { icon: <GiQueenCrown size={25} />, name: "queenofjungle" },
      { icon: <GiPikeman size={25} />, name: "zookeeper" },
    ];
  }else if(loginInduvidual === "queenofjungle"){
    actions = [
      { icon: <FaChessKing size={25} />, name: "kingofjungle" },
      { icon: <GiPikeman size={25} />, name: "zookeeper" },
    ];
  }else{
    actions = [
      { icon: <GiQueenCrown size={25} />, name: "queenofjungle" },
      { icon: <FaChessKing size={25} />, name: "kingofjungle" },
    ];
  }
  
  

  useEffect(() => {
    dispatch(getList());
    dispatch(crudActions.resetCreationResponse());
    dispatch(authActions.resetLogoutResponse());
  }, [])
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
          <Box className="border w-full container"></Box>
          <span className="text-left w-full container text-[2rem] text-nostalgicblue">
            Registered animals
          </span>
          <Box className="mt-[1rem] container w-full p-4 flex flex-wrap justify-center items-center gap-6">
            {listOfInduviduals.data?.length > 0 ? listOfInduviduals?.data.map((induvidual) => (
              <AnimalCard key={induvidual.id} induvidual={induvidual} />
            ))  :  <Box className="w-full h-[45rem] flex justify-center items-center mt-4 container">
              <Box className="w-[50%] h-full flex justify-center items-start flex-col">
              <span className="text-[4rem] font-bold text-nostalgicblue text-wrap">
                We are starting soon!
              </span>
              <span className="text-[2rem] font-bold text-white text-wrap inline-block ">
                Be patient...
              </span>
            </Box>
            <img
              src={nohero}
              alt="hero_img"
              className="w-[50%] h-[90%] object-contain"
            />
          </Box>}
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
