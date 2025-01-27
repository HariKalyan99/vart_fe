import React, { useEffect } from "react";
import hero from "../../assets/logo.gif";
import NavigationBar from "../common-templates/NavigationBar";
import FooterBar from "../common-templates/FooterBar";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FaChessKing } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiPikeman } from "react-icons/gi";
import { FaHandPointer } from "react-icons/fa";
import LightTooltip from "../utils/MUITooltip";
import { FaIdCard } from "react-icons/fa";
import {
  Box,
  Button,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { crudActions } from "../../../slices/CRUDSlices/CrudOperationSlice";
import { getAnimalList } from "../../../slices/CRUDSlices/getAnimalList";
import { authActions } from "../../../slices/AuthenticationSlices/AuthSlice";
import AnimalTable from "../common-templates/TableDetail";

const TableDetailsPage = () => {
  const { listOfAnimalsResponse, listOfAnimalsPendingResponse } = useSelector(
    (state) => state.crud
  );
  const loginInduvidual = JSON.parse(localStorage.getItem("data"))?.role || "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = Cookies.get("jwt");
  if (!token) {
    localStorage.clear();
    navigate("/login");
  }

  let actions;
  if (loginInduvidual === "kingofjungle") {
    actions = [
      { icon: <GiQueenCrown size={25} />, name: "queenofjungle" },
      { icon: <GiPikeman size={25} />, name: "zookeeper" },
    ];
  } else if (loginInduvidual === "queenofjungle") {
    actions = [
      { icon: <FaChessKing size={25} />, name: "kingofjungle" },
      { icon: <GiPikeman size={25} />, name: "zookeeper" },
    ];
  } else {
    actions = [
      { icon: <GiQueenCrown size={25} />, name: "queenofjungle" },
      { icon: <FaChessKing size={25} />, name: "kingofjungle" },
    ];
  }
  // for polling
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(getList());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getAnimalList());
    dispatch(crudActions.reseteditAnimalResponse());
    dispatch(crudActions.resetCreationResponse());
    dispatch(authActions.resetLogoutResponse());
  }, []);
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
          <Box className="flex w-full container py-2 flex-between">
            <span className="text-left container text-[2rem] text-nostalgicblue block">
              Registered animals
            </span>
            <Link
              to={"/dashboard"}
              className="container flex justify-end w-full"
            >
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#DD8457", width: "30%" }}
                className="hover:bg-black mt-2"
              >
                Card view {" "}
                <span className="px-2"><FaIdCard /></span>
              </Button>
            </Link>
          </Box>
          <TableContainer component={Paper} className="mt-4 container">
            <Table sx={{ minWidth: 650 }} aria-label="animal table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <span className="font-bold">Name</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold">Role</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold">Category</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold">Email</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold">Phone</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold">Actions</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {listOfAnimalsResponse?.data?.length > 0
                  ? listOfAnimalsResponse?.data.map((induvidual) => (
                      <AnimalTable
                        key={induvidual.id}
                        induvidual={induvidual}
                      />
                    ))
                  : listOfAnimalsPendingResponse
                  ? [1, 2, 3, 4, 5, 6].map((_, ind) => (
                      <Stack key={ind} spacing={1}>
                        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton
                          variant="rectangular"
                          width={210}
                          height={60}
                        />
                        <Skeleton variant="rounded" width={210} height={60} />
                      </Stack>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <FooterBar />
      </Box>

      {JSON.parse(localStorage.getItem("data"))?.role !== "zookeeper" && (
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
          <LightTooltip
            title="Request for role? This feature is about to come!"
            placement="top"
          >
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
      )}
    </>
  );
};

export default TableDetailsPage;
