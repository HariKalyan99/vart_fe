import React, { useState } from "react";
import a from "../../assets/dash.gif";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaChessKing } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiRead } from "react-icons/ci";
import IconButton from "@mui/material/IconButton";
import { GiPikeman } from "react-icons/gi";
import { PiPlantFill } from "react-icons/pi";
import { TfiDrupal } from "react-icons/tfi";
import { TbShieldStar } from "react-icons/tb";
import { FaHandPointer } from "react-icons/fa";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import LightTooltip from "../utils/MUITooltip";
import EditCard from "../EditCard";
import MUIModal from "../utils/MUIModal";
import { Link } from "react-router-dom";
import { FcBinoculars } from "react-icons/fc";
import { useSelector } from "react-redux";

const AnimalCard = ({ induvidual, copy, getName,
  getDepRole }) => {
  const [open, setOpen] = useState(false);
  const [requestAgree, setRequestAgree] = useState(false);

  const {loginInduvidual} =  useSelector((state) => state.auth);
  const handleRequestOpen = () => setRequestAgree(true);
  const handleRequestClose = () => setRequestAgree(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        className={`${
          copy ? "w-full h-full" : "w-[450px] h-auto"
        } border-4 border-nostalgicblue ${!copy && induvidual.animalRole === "zookeeper" && "border-saffron"} bg-raddishpinklight rounded-xl shadow-2xl relative p-2`}
      >
        <img
          src={a}
          alt="animal_photo"
          className={`w-full h-[40%] object-cover ${copy && `${getName && getName?.length > 0 || getDepRole && getDepRole?.length > 0 ? "opacity-100" : "opacity-50"}`}`}
        />

        <Box className="absolute top-4 left-4">
          {!copy && induvidual.animalRole === "kingofjungle" ? (
            <LightTooltip title="KING" placement="top">
              <IconButton sx={{ color: "white" }}>
                <FaChessKing className="text-raddishpinklight text-[2rem]" />
              </IconButton>
            </LightTooltip>
          ) : !copy && induvidual.animalRole === "queenofjungle" ? (
            <LightTooltip title="QUEEN" placement="top">
              <IconButton sx={{ color: "white" }}>
                <GiQueenCrown className="text-raddishpinklight text-[2rem]" />
              </IconButton>
            </LightTooltip>
          ) : !copy && induvidual.animalRole === "zookeeper" ? (
            <LightTooltip title="KEEPER" placement="top">
              <IconButton sx={{ color: "white" }}>
                <GiPikeman className="text-raddishpinklight text-[2.5rem]" />
              </IconButton>
            </LightTooltip>
          ) : (!copy && 
            <LightTooltip title="ON BENCH" placement="top">
              <IconButton sx={{ color: "white" }}>
                <FcBinoculars size={25} />
              </IconButton>
            </LightTooltip>
          )}
        </Box>

        <CardContent
          className={`w-full h-[55%] relative z-[10] flex justify-between gap-2 items-start flex-col mt-4 border-4 border-chestnut ${
            copy && `${getName && getName?.length > 0 || getDepRole && getDepRole?.length > 0 ? "opacity-100" : "opacity-50"}`
          }`}
          sx={{ padding: "0.5rem" }}
        >
          <Box className="w-full h-[40%] flex flex-col justify-between items-start">
            <Box className="flex justify-center gap-2 items-center">
              <TfiDrupal size={25} />
              <Typography variant="h6" className="font-semibold text-black">
                <span className="italic">Name:</span> {!copy && induvidual.animalname}
              </Typography>
            </Box>
            <Box className="flex justify-center gap-2 items-center">
              <TbShieldStar size={25} />
              <Typography variant="h6" className="font-semibold text-black">
                <span className="italic">Role: </span>{" "}
                {!copy && induvidual.animalRole || "NA"}
              </Typography>
            </Box>
            <Box className="flex justify-center gap-2 items-center">
              <PiPlantFill size={25} />
              <Typography variant="h6" className="font-semibold text-black">
                <span className="italic">Category: </span>{" "}
                {!copy && induvidual.category || "NA"}
              </Typography>
            </Box>

            {false && (
              <Box className="flex justify-center gap-2 items-center">
                <FaHandPointer size={25} />
                <Typography variant="h6" className="font-semibold text-black">
                  <Box className="flex justify-center items-center">
                    <span className="italic">Role change request: </span>
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={handleRequestOpen}
                    >
                      <GiQueenCrown className="text-nostalgicblue text-[2rem]" />
                    </IconButton>
                  </Box>
                </Typography>
              </Box>
            )}
          </Box>
          <Box className="h-[40%] w-full flex gap-2 mt-4 items-start">
            <Box className="flex justify-center gap-2 items-center">
              <MdEmail size={25} />
              <Typography className="font-semibold text-black text-base text-wrap">
                {!copy && induvidual.email}
              </Typography>
            </Box>

            <Box className="flex justify-center gap-2 items-center">
              <IoMdPhonePortrait size={25} />
              <Typography className="font-semibold text-black text-base text-wrap">
                {!copy && induvidual.phoneNumber}
              </Typography>
            </Box>
          </Box>
          <Box className="flex justify-evenly items-center gap-6 bg-raddishpinklight w-full mb-4">
            {loginInduvidual === "zookeeper" && <LightTooltip title="Edit" placement="top">
              <IconButton sx={{ color: "white" }} onClick={handleOpen} disabled={copy}>
                <FaEdit size={30} className="text-black" />
              </IconButton>
            </LightTooltip>}
            {loginInduvidual === "queenofjungle" && <LightTooltip title="Edit" placement="top">
              <IconButton sx={{ color: "white" }} onClick={handleOpen} disabled={copy}>
                <FaEdit size={30} className="text-black" />
              </IconButton>
            </LightTooltip>}
            {loginInduvidual === "zookeeper" && <LightTooltip title="Delete" placement="top">
              <IconButton sx={{ color: "white" }} disabled={copy}>
                <RiDeleteBin6Line size={30} className="text-black" />
              </IconButton>
            </LightTooltip>}
            {copy ? <LightTooltip title="Read more" placement="top">
                <IconButton sx={{ color: "white" }} disabled={copy}>
                  <CiRead size={30} className="text-black" />
                </IconButton>
              </LightTooltip> : <Link to={`/details/${induvidual.id}`}>
              <LightTooltip title="Read more" placement="top">
                <IconButton sx={{ color: "white" }} disabled={copy}>
                  <CiRead size={30} className="text-black" />
                </IconButton>
              </LightTooltip>
            </Link>}
          </Box>
          {copy ? (
            <Box className="flex justify-between w-full bg-chestnut text-white p-2 absolute bottom-0 right-0">
              <Typography variant="body2" className="font-bold">
                Registered on: <span className="font-semibold">xx-xx-xxxx</span>
              </Typography>

              <Typography variant="body2" className="font-bold">
                Edited on: <span className="font-semibold">xx-xx-xxxx</span>
              </Typography>
            </Box>
          ) : (
            <Box className="flex justify-center w-full bg-chestnut text-white p-2 absolute bottom-0 right-0">
              <Typography className="text-[0.4rem]">
                Registered on:{" "}
                <span className="text-[0.8rem]">
                  {new Date(induvidual.createdAt).toTimeString()}
                </span>
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
      <MUIModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-edit"
        aria-describedby="modal-edit-description"
      >
        <EditCard handleClose={handleClose} open={open} id="modal-edit" induvidual={induvidual}/>
      </MUIModal>

      <MUIModal
        open={requestAgree}
        onClose={handleRequestClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-request-description"
      >
        <Box className="flex w-[200px] h-auto bg-white flex-col p-4 justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-2 rounded-xl">
          <span className="inline-block text-center">
            Animal has Requested for a role change?
          </span>
          <Button
            variant="contained"
            type="button"
            sx={{ backgroundColor: "#70645C" }}
            className="hover:bg-black mt-2"
          >
            Agree
          </Button>
          <Button
            variant="contained"
            type="button"
            sx={{ backgroundColor: "#70645C" }}
            className="hover:bg-black mt-2"
            onClick={handleRequestClose}
          >
            DISAGREE
          </Button>
        </Box>
      </MUIModal>
    </>
  );
};

export default AnimalCard;
