import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiRead } from "react-icons/ci";
import { FaChessKing } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiPikeman } from "react-icons/gi";

import {
  TableCell,
  TableRow,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import LightTooltip from "../utils/MUITooltip";
import MUIModal from "../utils/MUIModal";
import EditCard from "../EditCard";
import { Link, useNavigate } from "react-router-dom";
import { FcBinoculars } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { getAnimalList } from "../../../slices/CRUDSlices/getAnimalList";
import { deleteAnimal } from "../../../slices/CRUDSlices/deleteAnimal";

const AnimalTable = ({
  induvidual,
  copy,
  getName,
  getDepRole,
  getCategory,
  getEmail,
  getPhone,
}) => {
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
      <IconButton sx={{ color: "black" }} onClick={action}>
        {icon}
      </IconButton>
    </LightTooltip>
  );

  return (
    <>
      <TableRow
        key={induvidual?.id}
        className="bg-saffron border-2 hover:border-b-8 hover:border hover:border-white hover:border-l-0 hover:border-r-0 hover:drop-shadow-2xl"
      >
        <TableCell>
          <span className="text-white text-lg">
            {copy ? getName : induvidual?.animalname}
          </span>
        </TableCell>
        <TableCell>
          <Box className="flex gap-2">
            <span className="text-white text-lg">
              {roleIcons[induvidual?.animalRole] || roleIcons.default}
            </span>
          </Box>
        </TableCell>
        <TableCell>
          <span className="text-white text-lg">
            {copy ? getCategory.category : induvidual?.category}
          </span>
        </TableCell>
        <TableCell>
          <span className="text-white text-lg">
            {copy ? getEmail : induvidual?.email}
          </span>
        </TableCell>
        <TableCell>
          <span className="text-white text-lg">
            {copy ? getPhone : induvidual?.phoneNumber}
          </span>
        </TableCell>
        <TableCell>
          <Box className="flex gap-2">
            {(loginInduvidual === "zookeeper" ||
              loginInduvidual === "queenofjungle") &&
              renderTooltip("Edit", <FaEdit size={25} color="white" />, () =>
                handleModalOpen(setOpen)
              )}
            {loginInduvidual === "zookeeper" &&
              renderTooltip(
                "Delete",
                <RiDeleteBin6Line size={25} color="white" />,
                () => handleDelete(induvidual?.id)
              )}
            <Link to={`/details/${induvidual?.id}`}>
              {renderTooltip("Read more", <CiRead size={25} color="white" />)}
            </Link>
          </Box>
        </TableCell>
      </TableRow>

      <MUIModal
        open={open}
        onClose={() => handleModalClose(setOpen)}
        aria-labelledby="modal-edit"
        aria-describedby="modal-edit-description"
      >
        <EditCard
          handleClose={() => handleModalClose(setOpen)}
          open={open}
          id="modal-edit"
          induvidual={induvidual}
        />
      </MUIModal>

      <MUIModal
        open={requestAgree}
        onClose={() => handleModalClose(setRequestAgree)}
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
            onClick={() => handleModalClose(setRequestAgree)}
          >
            DISAGREE
          </Button>
        </Box>
      </MUIModal>
    </>
  );
};

export default AnimalTable;
