import React, { useEffect } from "react";
import a from "../assets/dash.gif";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { SiContributorcovenant } from "react-icons/si";
import { FaBirthdayCake, FaRoute } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";
import { TfiDrupal } from "react-icons/tfi";
import { TbShieldStar } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { getInduvidual } from "../../slices/CRUDSlices/CrudOperationSlice";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";

const DetailItem = ({ icon, label, value }) => (
  <Box className="flex gap-2 items-center">
    {icon}
    <Typography variant="h6" className="font-semibold text-black">
      <span className="italic">{label}:</span> {value || "NA"}
    </Typography>
  </Box>
);

const DetailsCard = () => {
  const { getOneInduvidual } = useSelector((state) => state.crud);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getInduvidual(id));
  }, [dispatch, id]);

  const data = getOneInduvidual?.data;

  return (
    <Paper className="w-full h-auto bg-raddishpinklight shadow-2xl relative overflow-hidden p-4 border border-4 border-chestnut">
      <img src={a} alt="animal_photo" className="w-full h-[40%] object-cover" />

      <Box className="w-full h-[55%] relative z-[10] flex flex-col gap-4 mt-4 p-4 bg-white border-4 border-chestnut">
        <Box className="flex flex-col gap-3">
          <DetailItem icon={<TfiDrupal size={25} />} label="Name" value={data?.animalname} />
          <DetailItem icon={<TbShieldStar size={25} />} label="Role" value={data?.animalRole} />
          <DetailItem icon={<PiPlantFill size={25} />} label="Category" value={data?.category} />
        </Box>

        <Box className="flex flex-col gap-3">
          <DetailItem icon={<MdEmail size={25} />} label="Email" value={data?.email} />
          <DetailItem icon={<IoMdPhonePortrait size={25} />} label="Phone" value={data?.phoneNumber} />
        </Box>

        <DetailItem icon={<FaBirthdayCake size={25} />} label="DOB" value={data?.dob} />
        <DetailItem icon={<FaRoute className="text-[1.5rem] font-bold" />} label="Address" value={data?.address} />
        <DetailItem icon={<SiContributorcovenant size={25} />} label="Contributions" value={data?.contributions} />

        <Box className="flex justify-between w-full bg-chestnut text-white p-4 mt-4">
          <Typography variant="body2" className="font-bold text-xs">
            Registered on:{" "}
            <span className="text-sm font-semibold">
              {data?.createdAt ? new Date(data.createdAt).toLocaleDateString() : "NA"}
            </span>
          </Typography>

          <Typography variant="body2" className="font-bold text-xs">
            Edited on:{" "}
            <span className="text-sm font-semibold">
              {data?.updatedAt ? new Date(data.updatedAt).toLocaleDateString() : "NA"}
            </span>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default DetailsCard;
