import React, { useState } from "react";
import a from "../assets/dash.gif";
import { SiAnimalplanet } from "react-icons/si";
import { GiAnimalSkull } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { TfiControlEject } from "react-icons/tfi";
import { SiContributorcovenant } from "react-icons/si";
import { FaBirthdayCake } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiGoalKeeper } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiRead } from "react-icons/ci";
import IconButton from "@mui/material/IconButton";
import { GiPikeman } from "react-icons/gi";
import { PiPlantFill } from "react-icons/pi";
import { GiDeer } from "react-icons/gi";
import { TfiDrupal } from "react-icons/tfi";
import { GiBossKey } from "react-icons/gi";
import { TbShieldStar } from "react-icons/tb";
import { GiBorderedShield } from "react-icons/gi";
import { GiReptileTail } from "react-icons/gi"; //reptile
import { GiCrocJaws } from "react-icons/gi"; //amphi
import { GiNeedleJaws } from "react-icons/gi"; //carnivores
import { FaCrow } from "react-icons/fa"; //omni
import LightTooltip from "./utils/MUITooltip";
import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";
import MUIModal from "./utils/MUIModal";
import EditCard from "./EditCard";
import { MdOutlineSecurity } from "react-icons/md";

const ProfileCard = ({}) => {
  const [open, setOpen] = useState(false);
  const [changePassword, setchangePassword] = useState(false);

  const handleRequestOpen = () => setchangePassword(true);
  const handleRequestClose = () => setchangePassword(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="w-full h-auto border-nostalgicblue border-4 bg-raddishpinklight rounded-xl shadow-2xl relative overflow-hidden p-2 flex justify-center items-center flex-col">
        {/* {ind % 2 === 0 ? (
        <div className="absolute top-4 left-4 ">
          <LightTooltip title="KING" placement="top">
            <IconButton sx={{ color: "white" }}>
              <FaChessKing className=" text-nostalgicblue  text-[2rem]" />
            </IconButton>
          </LightTooltip>
        </div>
      ) : ind !== 3 ? (
        <div className="absolute top-4 left-4 ">
          <LightTooltip title="QUEEN" placement="top">
            <IconButton sx={{ color: "white" }}>
              <GiQueenCrown className=" text-nostalgicblue  text-[2rem]" />
            </IconButton>
          </LightTooltip>
        </div>
      ) : (
        <div className="absolute top-4 left-4 ">
          <LightTooltip title="KEEPER" placement="top">
            <IconButton sx={{ color: "white" }}>
              <GiPikeman className=" text-nostalgicblue  text-[2rem]" />
            </IconButton>
          </LightTooltip>
        </div>
      )} */}

        <div className="w-[200px] h-[200px] border-4 rounded-[50%] overflow-hidden mt-4 hover:opacity-50 opacity-100">
          <img
            src="https://us.123rf.com/450wm/kucingliarz/kucingliarz2404/kucingliarz240400577/228714838-vector-illustration-of-a-cute-panda-bear-with-abstract-geometric-background.jpg?ver=6"
            alt="profile_photo"
            className="object-cover w-[100%] h-[100%]"
          />
        </div>

        <div className="w-full h-[55%] relative z-[10] flex justify-between gap-2 items-start flex-col px-2 mt-2 border-4 border-chestnut p-2">
          <div className="w-full h-[40%] flex flex-col justify-between items-start ">
            <div className="flex justify-center gap-2 items-center">
              <TfiDrupal size={25} />
              <span className="text-xl font-semibold text-black">
                <span className="italic">Name:</span> Lion
              </span>
            </div>
            <div className="flex justify-center gap-2 items-center">
              <TbShieldStar size={25} />

              <span className="text-xl font-semibold text-black text-wrap">
                <span className=" italic">Role: </span> king of jungle
              </span>
            </div>
            <div className="flex justify-center gap-2 items-center">
              <PiPlantFill size={25} />

              <span className="text-xl font-semibold text-wrap">
                {" "}
                <span className=" italic">Category: </span>Herbivores
              </span>
            </div>
          </div>
          <div className="h-[40%] w-full flex gap-2 items-start ">
            <div className="flex justify-center gap-2 items-center">
              <MdEmail size={25} />

              <span className="text-xl font-semibold text-wrap">
                hello@gmail.com
              </span>
            </div>

            <div className="flex justify-center gap-2 items-center">
              <IoMdPhonePortrait size={25} />

              <span className="text-xl font-semibold text-wrap">
                9889988998
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <MdOutlineSecurity size={25} />
            <span
              className="text-xl font-semibold text-black italic hover:text-chestnut hover:cursor-pointer hover:underline"
              onClick={handleRequestOpen}
            >
              Change Password?
            </span>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <FaBirthdayCake size={25} />

            <span className="text-xl font-semibold text-wrap">
              <span className="">DOB: </span> 20-10-24
            </span>
          </div>

          <div className="flex justify-center gap-2 items-center">
            <FaRoute className="text-[3rem] font-bold" />

            <span className="text-xl font-semibold text-wrap">
              totam magnam molestias necessitatibus quisquam perspiciatis a
              repellendus, possimus perferendis cum odit ratione ducimus
              corrupti, eaque inventore quidem recusandae consectetur blanditiis
              itaque reprehenderit odio iure iusto dicta. Delectus, laudantium
              harum!{" "}
            </span>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <SiContributorcovenant size={25} />

            <span className="text-xl font-semibold text-wrap">
              Ate a lion, ran over an elephant
            </span>
          </div>
          <Box className="flex justify-evenly items-center gap-6 bg-nostalgicblue w-full mb-4">
            <LightTooltip title="Edit" placement="top">
              <IconButton sx={{ color: "white" }}>
                <FaEdit size={30} className="text-black" onClick={handleOpen} />
              </IconButton>
            </LightTooltip>
            <LightTooltip title="Delete" placement="top">
              <IconButton sx={{ color: "white" }}>
                <RiDeleteBin6Line size={30} className="text-black" />
              </IconButton>
            </LightTooltip>
            <LightTooltip title="Read more" placement="top">
              <IconButton sx={{ color: "white" }}>
                <CiRead size={30} className="text-black" />
              </IconButton>
            </LightTooltip>
          </Box>
          <div className="flex justify-between w-full bg-chestnut text-white p-2">
            <span className="text-[0.8rem] font-bold">
              Registered on:{" "}
              <span className="text-base font-semibold">20th fe, 2025</span>
            </span>

            <span className="text-[0.8rem] font-bold">
              Edited on:{" "}
              <span className="text-base font-semibold">20th fe, 2025</span>
            </span>
          </div>
        </div>
      </div>

      <MUIModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-edit"
        aria-describedby="modal-edit-description"
      >
        <EditCard handleClose={handleClose} open={open} id="modal-edit" />
      </MUIModal>

      <MUIModal
        open={changePassword}
        onClose={handleRequestClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-request-description"
      >
        <Box className="flex w-[300px] h-auto bg-white flex-col p-4 justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-2 rounded-xl">
          <span className="inline-block text-center">Reset password?</span>
          <form className="flex flex-col justify-center items-center gap-2">
            <FormControl
              className="w-full mb-4"
              variant="standard"
              color="black"
            >
              <InputLabel htmlFor="password" color="black">
                New password
              </InputLabel>
              <Input
                id="password"
                type={false ? "text" : "password"}
                placeholder="Enter new password"
              />
              
            </FormControl>
            <FormControl
              className="w-full mb-4"
              variant="standard"
              color="black"
            >
              <InputLabel htmlFor="password" color="black">
                Confirm password
              </InputLabel>
              <Input
                id="password"
                type={false ? "text" : "password"}
                placeholder="Confirm your password"
              />
              
            </FormControl>
            <Button
                variant="contained"
                type="button"
                sx={{ backgroundColor: "#70645C" }}
                className="hover:bg-black mt-2"
                onClick={handleRequestClose}
              >
                Change
              </Button>
          </form>
        </Box>
      </MUIModal>
    </>
  );
};

export default ProfileCard;
