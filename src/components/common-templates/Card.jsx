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
// import { LightLightTooltip } from "../utils/MUILightTooltip";

// const Card = ({ ind }) => {
//   return (
//     <div className="w-[450px] h-[600px] border-nostalgicblue border-4 bg-raddishpinklight rounded-xl shadow-2xl relative overflow-hidden p-2">
//       <img src={a} alt="animal_photo" className="w-full h-[40%] object-cover" />

//       {ind % 2 === 0 ? (
//         <div className="absolute top-4 left-4 ">
//         <LightLightTooltip title="KING" placement="top">
//           <IconButton sx={{ color: "white" }}>
//             <FaChessKing className=" text-nostalgicblue  text-[2rem]" />
//           </IconButton>
//         </LightLightTooltip>
//         </div>
//       ) : ind !== 3 ? (
//         <div className="absolute top-4 left-4 ">
//         <LightLightTooltip title="QUEEN" placement="top">
//           <IconButton sx={{ color: "white" }}>
//           <GiQueenCrown className=" text-nostalgicblue  text-[2rem]" />
//           </IconButton>
//         </LightLightTooltip>
//         </div>
//       ) : (
//         <div className="absolute top-4 left-4 ">
//         <LightLightTooltip title="KEEPER" placement="top">
//           <IconButton sx={{ color: "white" }}>
//           <GiPikeman className=" text-nostalgicblue  text-[2rem]" />
//           </IconButton>
//         </LightLightTooltip>
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
//           <LightLightTooltip title="Edit" placement="top">
//             <IconButton sx={{ color: "white" }}>
//               <FaEdit
//                 size={30}
//                 className="hover:text-chestnut hover:cursor-pointer"
//               />
//             </IconButton>
//           </LightLightTooltip>
//           <LightLightTooltip title="Delete" placement="top">
//             <IconButton sx={{ color: "white" }}>
//               <RiDeleteBin6Line
//                 size={30}
//                 className="hover:text-chestnut hover:cursor-pointer"
//               />
//             </IconButton>
//           </LightLightTooltip>
//           <LightLightTooltip title="Read more" placement="top">
//             <IconButton sx={{ color: "white" }}>
//               <CiRead
//                 size={30}
//                 className="hover:text-chestnut hover:cursor-pointer"
//               />
//             </IconButton>
//           </LightLightTooltip>
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
import React, { useState } from "react";
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
import { FaHandPointer } from "react-icons/fa";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import LightTooltip from "../utils/MUITooltip";
import EditCard from "../EditCard";
import MUIModal from "../utils/MUIModal";

const AnimalCard = ({ ind, copy }) => {
  const [open, setOpen] = useState(false);
  const [requestAgree, setRequestAgree] = useState(false);

  const handleRequestOpen = () => setRequestAgree(true);
  const handleRequestClose = () => setRequestAgree(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        className={`${
          copy ? "w-full h-full" : "w-[450px] h-auto"
        } border-4 border-nostalgicblue bg-raddishpinklight rounded-xl shadow-2xl relative p-2`}
      >
        <img
          src={a}
          alt="animal_photo"
          className={`w-full h-[40%] object-cover ${copy && "opacity-50"}`}
        />

        <Box className="absolute top-4 left-4">
          {ind % 2 === 0 ? (
            <LightTooltip title="KING" placement="top">
              <IconButton sx={{ color: "white" }}>
                <FaChessKing className="text-raddishpinklight text-[2rem]" />
              </IconButton>
            </LightTooltip>
          ) : ind !== 3 ? (
            <LightTooltip title="QUEEN" placement="top">
              <IconButton sx={{ color: "white" }}>
                <GiQueenCrown className="text-raddishpinklight text-[2rem]" />
              </IconButton>
            </LightTooltip>
          ) : (
            <LightTooltip title="KEEPER" placement="top">
              <IconButton sx={{ color: "white" }}>
                <GiPikeman className="text-raddishpinklight text-[2rem]" />
              </IconButton>
            </LightTooltip>
          )}
        </Box>

        <CardContent
          className={`w-full h-[55%] relative z-[10] flex justify-between gap-2 items-start flex-col mt-4 border-4 border-chestnut ${
            copy && "opacity-50"
          }`}
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
          <Box className="flex justify-evenly items-center gap-6 bg-raddishpinklight w-full mb-4">
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
            <Box className="flex justify-between w-full bg-chestnut text-white p-2 absolute bottom-0 right-0">
              <Typography variant="body2" className="font-bold">
                Registered on:{" "}
                <span className="font-semibold">20th fe, 2025</span>
              </Typography>

              <Typography variant="body2" className="font-bold">
                Edited on: <span className="font-semibold">20th fe, 2025</span>
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
        <EditCard handleClose={handleClose} open={open} id="modal-edit" />
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
