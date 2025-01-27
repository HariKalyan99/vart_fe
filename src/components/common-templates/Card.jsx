import React, { useEffect, useState } from "react";
import a from "../../assets/dash.gif";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaChessKing } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiPikeman } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiRead } from "react-icons/ci";
import IconButton from "@mui/material/IconButton";
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
import { useDispatch, useSelector } from "react-redux";
import { getAnimalList } from "../../../slices/CRUDSlices/getAnimalList";
import { deleteAnimal } from "../../../slices/CRUDSlices/deleteAnimal";

const AnimalCard = ({ induvidual, copy, getName, getDepRole, getCategory, getEmail, getPhone }) => {
  const loginInduvidual = JSON.parse(localStorage.getItem("data")).role;
  const [open, setOpen] = useState(false);
  const [requestAgree, setRequestAgree] = useState(false);
  const dispatch = useDispatch();
  const { deleteAnimalResponse } = useSelector((state) => state.crud);

  useEffect(() => {
    if (deleteAnimalResponse?.status === "success") dispatch(getAnimalList());
  }, [deleteAnimalResponse]);

  const handleModalOpen = (setter) => setter(true);
  const handleModalClose = (setter) => setter(false);
  const handleDelete = (id) => {
    dispatch(deleteAnimal(id));
  };

    const roleIcons = {
      kingofjungle: <FcBinoculars size={25} />,
      queenofjungle: <GiQueenCrown size={25} />,
      zookeeper: <GiPikeman size={25} />,
      default: <FaChessKing size={25} />,
    };

  const renderTooltip = (title, icon, action) => (
    <LightTooltip title={title} placement="top">
      <IconButton sx={{ color: "white" }} onClick={action}>
        {icon}
      </IconButton>
    </LightTooltip>
  );

  return (
    <>
      <Card className={`${copy ? "w-full h-full" : "w-[450px] h-auto"} border-4 border-nostalgicblue ${!copy && induvidual?.animalRole === "zookeeper" && "border-saffron"} bg-raddishpinklight rounded-xl shadow-2xl relative p-2`}>
        {copy && <img src={a} alt="animal_photo" className={`w-full h-[45%] object-cover ${copy && (getName || getDepRole) ? "opacity-100" : "opacity-50"}`} />}
        {!copy && <img src={a} alt="animal_photo" className={`w-full h-[45%] object-cover`} />}
        
        <Box className="absolute top-4 left-4">
          {!copy && renderTooltip(induvidual?.animalRole?.toUpperCase(), roleIcons[induvidual?.animalRole] || roleIcons.default, handleModalOpen)}
        </Box>

        <CardContent className="w-full h-[55%] relative z-[10] flex justify-between gap-2 items-start flex-col mt-4 border-4 border-chestnut" sx={{ padding: "0.5rem" }}>
          <Box className="w-full h-[40%] flex flex-col justify-between items-start">
            {[
              { label: "Name", value: copy ? getName : induvidual?.animalname, icon: <TfiDrupal size={25} /> },
              { label: "Role", value: copy ? getDepRole : induvidual?.animalRole, icon: <TbShieldStar size={25} /> },
              { label: "Category", value: copy ? getCategory.category : induvidual?.category, icon: <PiPlantFill size={25} /> },
            ].map(({ label, value, icon }, index) => (
              <Box key={index} className="flex justify-center gap-2 items-center">
                {icon}
                <Typography variant="h6" className="font-semibold text-black">
                  <span className="italic">{label}:</span> {value}
                </Typography>
              </Box>
            ))}
            {false && (
              <Box className="flex justify-center gap-2 items-center">
                <FaHandPointer size={25} />
                <Typography variant="h6" className="font-semibold text-black">
                  <Box className="flex justify-center items-center">
                    <span className="italic">Role change request: </span>
                    {renderTooltip("Role Change Request", <GiQueenCrown className="text-nostalgicblue text-[2rem]" />, () => handleModalOpen(setRequestAgree))}
                  </Box>
                </Typography>
              </Box>
            )}
          </Box>

          <Box className="h-[40%] w-full flex gap-2 mt-4 items-start">
            {[{ icon: <MdEmail size={25} />, value: copy ? getEmail : induvidual?.email }, { icon: <IoMdPhonePortrait size={25} />, value: copy ? getPhone : induvidual?.phoneNumber }].map(({ icon, value }, index) => (
              <Box key={index} className="flex justify-center gap-2 items-center">
                {icon}
                <Typography className="font-semibold text-black text-base text-wrap">{value}</Typography>
              </Box>
            ))}
          </Box>

          <Box className="flex justify-evenly items-center gap-6 bg-raddishpinklight w-full mb-4">
            {(loginInduvidual === "zookeeper" || loginInduvidual === "queenofjungle") && renderTooltip("Edit", <FaEdit size={30} className="text-black"/>, () => handleModalOpen(setOpen))}
            {loginInduvidual === "zookeeper" && renderTooltip("Delete", <RiDeleteBin6Line size={30} className="text-black"/>, () => handleDelete(induvidual?.id))}
            {copy ? (
              renderTooltip("Read more", <CiRead size={30} className="text-black"/>)
            ) : (
              <Link to={`/details/${induvidual?.id}`}>{renderTooltip("Read more", <CiRead size={30} className="text-black"/>)}</Link>
            )}
          </Box>

          <Box className="flex justify-center w-full bg-chestnut text-white p-2 absolute bottom-0 right-0">
            <Typography className="text-[0.4rem]">
              Registered on: <span className="text-[0.8rem]">{new Date(induvidual?.createdAt)?.toTimeString() || "xx-xx-xxxx"}</span>
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <MUIModal open={open} onClose={() => handleModalClose(setOpen)} aria-labelledby="modal-edit" aria-describedby="modal-edit-description">
        <EditCard handleClose={() => handleModalClose(setOpen)} open={open} id="modal-edit" induvidual={induvidual} />
      </MUIModal>

      <MUIModal open={requestAgree} onClose={() => handleModalClose(setRequestAgree)} aria-labelledby="modal-title" aria-describedby="modal-request-description">
        <Box className="flex w-[200px] h-auto bg-white flex-col p-4 justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-2 rounded-xl">
          <span className="inline-block text-center">Animal has Requested for a role change?</span>
          <Button variant="contained" type="button" sx={{ backgroundColor: "#70645C" }} className="hover:bg-black mt-2">Agree</Button>
          <Button variant="contained" type="button" sx={{ backgroundColor: "#70645C" }} className="hover:bg-black mt-2" onClick={() => handleModalClose(setRequestAgree)}>DISAGREE</Button>
        </Box>
      </MUIModal>
    </>
  );
};

export default AnimalCard;
