import React from "react";
import a from "../assets/dash.gif";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { SiContributorcovenant } from "react-icons/si";
import { FaBirthdayCake } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import IconButton from "@mui/material/IconButton";
import { GiPikeman } from "react-icons/gi";
import { PiPlantFill } from "react-icons/pi";
import { TfiDrupal } from "react-icons/tfi";
import { TbShieldStar } from "react-icons/tb";
import LightTooltip from "./utils/MUITooltip";

const DetailsCard = ({ ind }) => {
  return (
    <div className="w-full h-auto border-nostalgicblue border-4 bg-raddishpinklight rounded-xl shadow-2xl relative overflow-hidden p-2">
      <img src={a} alt="animal_photo" className="w-full h-[40%] object-cover" />

      {ind % 2 === 0 ? (
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
      )}

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

            <span className="text-xl font-semibold text-wrap">9889988998</span>
          </div>
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
            eaque inventore quidem recusandae consectetur blanditiis itaque
            reprehenderit odio iure iusto dicta. Delectus, laudantium harum!{" "}
          </span>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <SiContributorcovenant size={25} />

          <span className="text-xl font-semibold text-wrap">
            Ate a lion, ran over an elephant
          </span>
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
      </div>
    </div>
  );
};

export default DetailsCard;
