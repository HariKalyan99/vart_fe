// import React from "react";
// import a from "../../assets/dash.gif";
// import { SiAnimalplanet } from "react-icons/si";
// import { GiAnimalSkull } from "react-icons/gi";
// import { MdEmail } from "react-icons/md";
// import { IoMdPhonePortrait } from "react-icons/io";
// import { TfiControlEject } from "react-icons/tfi";
// import { SiContributorcovenant } from "react-icons/si";
// import { FaBirthdayCake } from "react-icons/fa";
// import { FaRoute } from "react-icons/fa";
// import { FaChessKing } from "react-icons/fa";
// import { GiQueenCrown } from "react-icons/gi";
// import { GiGoalKeeper } from "react-icons/gi";
// import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { CiRead } from "react-icons/ci";
// import IconButton from "@mui/material/IconButton";
// import { GiPikeman } from "react-icons/gi";
// import { PiPlantFill } from "react-icons/pi";
// import { GiDeer } from "react-icons/gi";
// import { TfiDrupal } from "react-icons/tfi";
// import { GiBossKey } from "react-icons/gi";
// import { TbShieldStar } from "react-icons/tb";
// import { GiBorderedShield } from "react-icons/gi";
// import { GiReptileTail } from "react-icons/gi"; //reptile
// import { GiCrocJaws } from "react-icons/gi"; //amphi
// import { GiNeedleJaws } from "react-icons/gi"; //carnivores
// import { FaCrow } from "react-icons/fa"; //omni
// import { LightTooltip } from "../utils/MUITooltip";

// const Card = ({ ind }) => {
//   return (
//     <div className="w-[450px] h-[600px] border-nostalgicblue border-4 bg-raddishpinklight rounded-xl shadow-2xl relative overflow-hidden p-2">
//       <img src={a} alt="animal_photo" className="w-full h-[40%] object-cover" />

//       {ind % 2 === 0 ? (
//         <div className="absolute top-4 left-4 ">
//         <LightTooltip title="KING" placement="top">
//           <IconButton sx={{ color: "white" }}>
//             <FaChessKing className=" text-nostalgicblue  text-[2rem]" />
//           </IconButton>
//         </LightTooltip>
//         </div>
//       ) : ind !== 3 ? (
//         <div className="absolute top-4 left-4 ">
//         <LightTooltip title="QUEEN" placement="top">
//           <IconButton sx={{ color: "white" }}>
//           <GiQueenCrown className=" text-nostalgicblue  text-[2rem]" />
//           </IconButton>
//         </LightTooltip>
//         </div>
//       ) : (
//         <div className="absolute top-4 left-4 ">
//         <LightTooltip title="KEEPER" placement="top">
//           <IconButton sx={{ color: "white" }}>
//           <GiPikeman className=" text-nostalgicblue  text-[2rem]" />
//           </IconButton>
//         </LightTooltip>
//         </div>
//       )}

//       <div className="w-full h-[55%] relative z-[10] flex justify-between gap-2 items-start flex-col px-2 mt-2 border-4 border-chestnut p-2">
//         <div className="w-full h-[40%] flex flex-col justify-between items-start ">
//           <div className="flex justify-center gap-2 items-center">
//             <TfiDrupal size={25} />
//             <span className="text-xl font-semibold text-black">
//               <span className="italic">Name:</span> Lion
//             </span>
//           </div>
//           <div className="flex justify-center gap-2 items-center">
//             <TbShieldStar size={25} />

//             <span className="text-xl font-semibold text-black text-wrap">
//               <span className=" italic">Role: </span> king of jungle
//             </span>
//           </div>
//           <div className="flex justify-center gap-2 items-center">
//             <PiPlantFill size={25} />

//             <span className="text-xl font-semibold text-wrap">
//               {" "}
//               <span className=" italic">Category: </span>Herbivores
//             </span>
//           </div>
//         </div>
//         <div className="h-[40%] w-full flex gap-2 mt-4 items-start ">
//           <div className="flex justify-center gap-2 items-center">
//             <MdEmail size={25} />

//             <span className="text-xl font-semibold text-wrap">
//               hello@gmail.com
//             </span>
//           </div>

//           <div className="flex justify-center gap-2 items-center">
//             <IoMdPhonePortrait size={25} />

//             <span className="text-xl font-semibold text-wrap">9889988998</span>
//           </div>
//         </div>

//         <div className="flex justify-between w-full bg-chestnut text-white p-2">
//           <span className="text-[0.8rem] font-bold">
//             Registered on:{" "}
//             <span className="text-base font-semibold">20th fe, 2025</span>
//           </span>

//           <span className="text-[0.8rem] font-bold">
//             Edited on:{" "}
//             <span className="text-base font-semibold">20th fe, 2025</span>
//           </span>
//         </div>

//         <div className="flex justify-evenly items-center gap-6 bg-black w-full">
//           <LightTooltip title="Edit" placement="top">
//             <IconButton sx={{ color: "white" }}>
//               <FaEdit
//                 size={30}
//                 className="hover:text-chestnut hover:cursor-pointer"
//               />
//             </IconButton>
//           </LightTooltip>
//           <LightTooltip title="Delete" placement="top">
//             <IconButton sx={{ color: "white" }}>
//               <RiDeleteBin6Line
//                 size={30}
//                 className="hover:text-chestnut hover:cursor-pointer"
//               />
//             </IconButton>
//           </LightTooltip>
//           <LightTooltip title="Read more" placement="top">
//             <IconButton sx={{ color: "white" }}>
//               <CiRead
//                 size={30}
//                 className="hover:text-chestnut hover:cursor-pointer"
//               />
//             </IconButton>
//           </LightTooltip>
//         </div>
//         {/*
//         <div className="flex justify-center gap-2 items-center">
//                       <FaBirthdayCake size={25} />

//                       <span className="text-xl font-semibold text-wrap">
//                       <span className="underline">DOB: </span>  20-10-24
//                       </span>
//                     </div> */}
//         {/* <div className="border w-full" /> */}
//         {/* <div className="flex justify-center gap-2 items-center">
//                       <FaRoute className="text-[3rem] font-bold" />

//                       <span className="text-xl font-semibold text-wrap">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Ullam amet impedit omnis blanditiis earum tempora, eius{" "}
//                       </span>
//                     </div>
//                     <div className="flex justify-center gap-2 items-center">
//                       <SiContributorcovenant size={25} />

//                       <span className="text-xl font-semibold text-wrap">
//                         Ate a lion, ran over an elephant
//                       </span>
//                     </div>
//      */}
//       </div>
//     </div>
//   );
// };

// export default Card;
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
import { LightTooltip } from "../utils/MUITooltip";

import { Card, CardContent, Tooltip, Typography, Box } from "@mui/material";

const AnimalCard = ({ ind }) => {
  return (
    <Card className="w-[450px] h-[600px] border-4 border-nostalgicblue bg-raddishpinklight rounded-xl shadow-2xl relative p-2">
      <img src={a} alt="animal_photo" className="w-full h-[40%] object-cover" />

      <Box className="absolute top-4 left-4">
        {ind % 2 === 0 ? (
          <Tooltip title="KING" placement="top">
            <IconButton sx={{ color: "white" }}>
              <FaChessKing className="text-nostalgicblue text-[2rem]" />
            </IconButton>
          </Tooltip>
        ) : ind !== 3 ? (
          <Tooltip title="QUEEN" placement="top">
            <IconButton sx={{ color: "white" }}>
              <GiQueenCrown className="text-nostalgicblue text-[2rem]" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="KEEPER" placement="top">
            <IconButton sx={{ color: "white" }}>
              <GiPikeman className="text-nostalgicblue text-[2rem]" />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <CardContent
        className="w-full h-[55%] relative z-[10] flex justify-between gap-2 items-start flex-col mt-4 border-4 border-chestnut"
        sx={{ padding: "0.5rem" }}
      >
        <Box className="w-full h-[40%] flex flex-col justify-between items-start">
          <Box className="flex justify-center gap-2 items-center">
            <TfiDrupal size={25} />
            <Typography variant="h6" className="font-semibold text-black">
              <span className="italic">Name:</span> Lion
            </Typography>
          </Box>
          <Box className="flex justify-center gap-2 items-center">
            <TbShieldStar size={25} />
            <Typography variant="h6" className="font-semibold text-black">
              <span className="italic">Role: </span> king of jungle
            </Typography>
          </Box>
          <Box className="flex justify-center gap-2 items-center">
            <PiPlantFill size={25} />
            <Typography variant="h6" className="font-semibold text-black">
              <span className="italic">Category: </span> Herbivores
            </Typography>
          </Box>
        </Box>
        <Box className="h-[40%] w-full flex gap-2 mt-4 items-start">
          <Box className="flex justify-center gap-2 items-center">
            <MdEmail size={25} />
            <Typography variant="h6" className="font-semibold text-black">
              hello@gmail.com
            </Typography>
          </Box>

          <Box className="flex justify-center gap-2 items-center">
            <IoMdPhonePortrait size={25} />
            <Typography variant="h6" className="font-semibold text-black">
              9889988998
            </Typography>
          </Box>
        </Box>
        <Box className="flex justify-evenly items-center gap-6 bg-black w-full mb-4">
          <Tooltip title="Edit" placement="top">
            <IconButton sx={{ color: "white" }}>
              <FaEdit
                size={30}
                className="hover:text-nostalgicblue hover:cursor-pointer"
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="top">
            <IconButton sx={{ color: "white" }}>
              <RiDeleteBin6Line
                size={30}
                className="hover:text-nostalgicblue hover:cursor-pointer"
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Read more" placement="top">
            <IconButton sx={{ color: "white" }}>
              <CiRead
                size={30}
                className="hover:text-nostalgicblue hover:cursor-pointer"
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className="flex justify-between w-full bg-chestnut text-white p-2 absolute bottom-0 right-0">
          <Typography variant="body2" className="font-bold">
            Registered on: <span className="font-semibold">20th fe, 2025</span>
          </Typography>

          <Typography variant="body2" className="font-bold">
            Edited on: <span className="font-semibold">20th fe, 2025</span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
