import React from "react";
import a from "../../assets/dash.gif";
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
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}));

const Card = ({ ind }) => {
  return (
    <div className="w-[450px] h-[600px] border-nostalgicblue border-4 bg-raddishpinklight rounded-xl shadow-2xl relative overflow-hidden p-2">
      <img src={a} alt="animal_photo" className="w-full h-[40%] object-cover" />
      {ind % 2 === 0 ? (
        <FaChessKing className="absolute top-2 left-2 text-[2rem]" />
      ) : ind !== 3 ? (
        <GiQueenCrown className="absolute top-2 left-2 text-[2rem]" />
      ) : (
        <GiGoalKeeper className="absolute top-2 left-2 text-[2rem]" />
      )}
      <div className="w-full h-[55%] relative z-[10] flex justify-between gap-2 items-start flex-col px-2 mt-2 border-4 border-chestnut p-2">
        <div className="w-full h-[40%] flex flex-col justify-between items-start ">
          <div className="flex justify-center gap-2 items-center">
            <GiAnimalSkull size={25} />
            <span className="text-2xl font-semibold text-black">
              <span className="underline">Name:</span> Lion
            </span>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <SiAnimalplanet size={25} />

            <span className="text-2xl font-semibold text-black text-wrap">
              <span className="underline">Role: </span> king of jungle
            </span>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <TfiControlEject size={25} />

            <span className="text-xl font-semibold text-wrap">
              {" "}
              <span className="underline">Category: </span>Herbivores
            </span>
          </div>
        </div>
        <div className="h-[40%] w-full flex gap-2 mt-4 items-start ">
          <div className="flex justify-center gap-2 items-center">
            <MdEmail size={25} />

            <span className="text-xl font-semibold text-wrap">
              hello@gmail.com
            </span>
          </div>

          <div className="flex justify-center gap-2 items-center">
            <IoMdPhonePortrait size={25} />

            <span className="text-xl font-semibold text-wrap">9889988998</span>
          </div>
        </div>

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

        <div className="flex justify-evenly items-center gap-6 bg-black w-full">
          <LightTooltip title="Edit" placement="top">
            <IconButton sx={{ color: "white" }}>
              <FaEdit
                size={30}
                className="hover:text-chestnut hover:cursor-pointer"
              />
            </IconButton>
          </LightTooltip>
          <LightTooltip title="Delete" placement="top">
            <IconButton sx={{ color: "white" }}>
              <RiDeleteBin6Line
                size={30}
                className="hover:text-chestnut hover:cursor-pointer"
              />
            </IconButton>
          </LightTooltip>
          <LightTooltip title="Read more" placement="top">
            <IconButton sx={{ color: "white" }}>
              <CiRead
                size={30}
                className="hover:text-chestnut hover:cursor-pointer"
              />
            </IconButton>
          </LightTooltip>
        </div>
        {/* 
        <div className="flex justify-center gap-2 items-center">
                      <FaBirthdayCake size={25} />
                      
                      <span className="text-xl font-semibold text-wrap">
                      <span className="underline">DOB: </span>  20-10-24
                      </span>
                    </div> */}
        {/* <div className="border w-full" /> */}
        {/* <div className="flex justify-center gap-2 items-center">
                      <FaRoute className="text-[3rem] font-bold" />
    
                      <span className="text-xl font-semibold text-wrap">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam amet impedit omnis blanditiis earum tempora, eius{" "}
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 items-center">
                      <SiContributorcovenant size={25} />
    
                      <span className="text-xl font-semibold text-wrap">
                        Ate a lion, ran over an elephant
                      </span>
                    </div>
     */}
      </div>
    </div>
  );
};

export default Card;
