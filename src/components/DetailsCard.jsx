import React, { useEffect } from "react";
import a from "../assets/dash.gif";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { SiContributorcovenant } from "react-icons/si";
import { FaBirthdayCake } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";
import { TfiDrupal } from "react-icons/tfi";
import { TbShieldStar } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { getInduvidual } from "../../slices/CRUDSlices/CrudOperationSlice";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";

const DetailsCard = () => {
  const { getOneInduvidual } = useSelector((state) => state.crud);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getInduvidual(id));
  }, [dispatch, id]);

  return (
    <Paper className="w-full h-auto bg-raddishpinklight rounded-xl shadow-2xl relative overflow-hidden p-4 border border-4 border-chestnut">
      <img
        src={a}
        alt="animal_photo"
        className="w-full h-[40%] object-cover rounded-lg"
      />

      <Box className="w-full h-[55%] relative z-[10] flex flex-col gap-4 mt-4 p-4 bg-white border-4 border-chestnut rounded-lg">
        <Box className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <TfiDrupal size={25} />
            <Typography variant="h6" className="font-semibold text-black">
              <span className="italic">Name:</span>{" "}
              {(getOneInduvidual?.data && getOneInduvidual?.data.animalname) ||
                "NA"}
            </Typography>
          </div>

          <div className="flex gap-2 items-center">
            <TbShieldStar size={25} />
            <Typography variant="h6" className="font-semibold text-black">
              <span className="italic">Role: </span>{" "}
              {(getOneInduvidual?.data && getOneInduvidual?.data.animalRole) ||
                "NA"}
            </Typography>
          </div>

          <div className="flex gap-2 items-center">
            <PiPlantFill size={25} />
            <Typography variant="h6" className="font-semibold text-black">
              <span className="italic">Category: </span>
              {(getOneInduvidual?.data && getOneInduvidual?.data.category) ||
                "NA"}
            </Typography>
          </div>
        </Box>

        <Box className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <MdEmail size={25} />
            <Typography variant="h6" className="font-semibold text-black">
              {(getOneInduvidual?.data && getOneInduvidual?.data.email) || "NA"}
            </Typography>
          </div>

          <div className="flex gap-2 items-center">
            <IoMdPhonePortrait size={25} />
            <Typography variant="h6" className="font-semibold text-black">
              {(getOneInduvidual?.data && getOneInduvidual?.data.phoneNumber) ||
                "NA"}
            </Typography>
          </div>
        </Box>

        <Box className="flex gap-2 items-center">
          <FaBirthdayCake size={25} />
          <Typography variant="h6" className="font-semibold text-black">
            <span className="italic">DOB: </span>{" "}
            {(getOneInduvidual?.data && getOneInduvidual?.data.dob) || "NA"}
          </Typography>
        </Box>

        <Box className="flex gap-2 items-center">
          <FaRoute className="text-[3rem] font-bold" />
          <Typography variant="h6" className="font-semibold text-black">
            {(getOneInduvidual?.data && getOneInduvidual?.data.address) || "NA"}
          </Typography>
        </Box>

        <Box className="flex gap-2 items-center">
          <SiContributorcovenant size={25} />
          <Typography variant="h6" className="font-semibold text-black">
            {(getOneInduvidual?.data && getOneInduvidual?.data.contributions) ||
              "NA"}
          </Typography>
        </Box>

        <Box className="flex justify-between w-full bg-chestnut text-white p-2 mt-4 rounded-lg">
          <Typography variant="body2" className="font-bold text-xs">
            Registered on:{" "}
            <span className="text-sm font-semibold">
              {(getOneInduvidual?.data &&
                new Date(
                  getOneInduvidual?.data.createdAt
                ).toLocaleDateString()) ||
                "NA"}
            </span>
          </Typography>

          <Typography variant="body2" className="font-bold text-xs">
            Edited on:{" "}
            <span className="text-sm font-semibold">
              {(getOneInduvidual?.data &&
                new Date(
                  getOneInduvidual?.data.updatedAt
                ).toLocaleDateString()) ||
                "NA"}
            </span>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default DetailsCard;
