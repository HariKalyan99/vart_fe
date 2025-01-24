import React, { useEffect, useState } from "react";
import { MdEmail, MdOutlineSecurity } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { SiContributorcovenant } from "react-icons/si";
import { FaBirthdayCake, FaChessKing, FaRoute, FaEdit } from "react-icons/fa";
import { CiRead } from "react-icons/ci";
import { PiPlantFill } from "react-icons/pi";
import { TfiDrupal } from "react-icons/tfi";
import { TbShieldStar } from "react-icons/tb";
import { GiPikeman, GiQueenCrown } from "react-icons/gi";
import { FcBinoculars } from "react-icons/fc";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, CircularProgress, FormControl, Input, InputLabel, IconButton } from "@mui/material";
import LightTooltip from "./utils/MUITooltip";
import MUIModal from "./utils/MUIModal";
import EditCard from "./EditCard";
import NavigationBar from "./common-templates/NavigationBar";
import FooterBar from "./common-templates/FooterBar";
import { getAnimalById } from "../../slices/CRUDSlices/getAnimalById";
import { editAnimal } from "../../slices/CRUDSlices/editAnimal";
import { TiCancelOutline } from "react-icons/ti";
import { crudActions } from "../../slices/CRUDSlices/CrudOperationSlice";

const ProfileSource = () => {
  const [open, setOpen] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [getNewPassword, setNewPassword] = useState("");
  const [getNewConfirmPassword, setNewConfirmPassword] = useState("");

  const { getOneAnimalResponse, editAnimalResponse, editAnimalPendingResponse } = useSelector(state => state.crud);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAnimalById(id));
    dispatch(crudActions.reseteditAnimalResponse());
  }, [id, dispatch]);

  useEffect(() => {
    if (editAnimalResponse?.status === "success") {
      setChangePassword(false);
      dispatch(getAnimalById(id));
    }
  }, [editAnimalResponse, id, dispatch]);

  const handlePasswordChangeSubmit = (e) => {
    e.preventDefault();
    dispatch(editAnimal({
      body: { password: getNewPassword, confirmPassword: getNewConfirmPassword },
      id: getOneAnimalResponse.data?.id,
    }));
  };

  const handleRequestOpen = () => setChangePassword(true);
  const handleRequestClose = () => setChangePassword(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderIcon = () => {
    const { animalRole } = getOneAnimalResponse.data || {};
    const icons = {
      kingofjungle: <FaChessKing className="text-chestnut text-[2rem]" />,
      queenofjungle: <GiQueenCrown className="text-chestnut text-[2rem]" />,
      zookeeper: <GiPikeman className="text-chestnut text-[2rem]" />,
      default: <FcBinoculars size={25} />,
    };
    return icons[animalRole] || icons.default;
  };

  const renderInfoRow = (Icon, label, value) => (
    <Box className="flex justify-center gap-2 items-center">
      <Icon size={25} />
      <span className="text-xl font-semibold text-black">
        <span className="italic">{label}: </span> {value || "NA"}
      </span>
    </Box>
  );

  const { data } = getOneAnimalResponse || {};

  return (
    <Box className="bg-nostalgicblue w-full min-h-[100vh] h-auto flex justify-center flex-col">
      <NavigationBar navStyle={"details"} />
      <Box className="w-full h-full mt-4 flex justify-center">
        <Box className="min-h-[80vh] container mt-[2rem] w-full flex justify-center items-center gap-4">
          <Box className="w-[50%] border h-auto">
            <Box className="w-full h-auto border-nostalgicblue border-4 bg-raddishpinklight rounded-xl shadow-2xl relative overflow-hidden p-2 flex justify-center items-center flex-col">
              <Box className="absolute top-4 left-4">{renderIcon()}</Box>

              <Box className="w-[200px] h-[200px] border-4 rounded-[50%] overflow-hidden mt-4 hover:opacity-50 opacity-100">
                <img
                  src="https://us.123rf.com/450wm/kucingliarz/kucingliarz2404/kucingliarz240400577/228714838-vector-illustration-of-a-cute-panda-bear-with-abstract-geometric-background.jpg?ver=6"
                  alt="profile_photo"
                  className="object-cover w-[100%] h-[100%]"
                />
              </Box>

              <Box className="w-full h-[55%] relative z-[10] flex justify-between gap-2 items-start flex-col px-2 mt-2 border-4 border-chestnut p-2">
                <Box className="w-full h-[40%] flex flex-col justify-between items-start">
                  {renderInfoRow(TfiDrupal, "Name", data?.animalname)}
                  {renderInfoRow(TbShieldStar, "Role", data?.animalRole)}
                  {renderInfoRow(PiPlantFill, "Category", data?.category)}
                </Box>
                <Box className="h-[40%] w-full flex gap-2 items-start">
                  {renderInfoRow(MdEmail, "Email", data?.email)}
                  {renderInfoRow(IoMdPhonePortrait, "Phone", data?.phoneNumber)}
                </Box>
                <Box className="flex justify-center gap-2 items-center">
                  <MdOutlineSecurity size={25} />
                  <span
                    className="text-base font-semibold text-black italic hover:text-chestnut hover:cursor-pointer hover:underline"
                    onClick={handleRequestOpen}
                  >
                    Change Password?
                  </span>
                </Box>
                {renderInfoRow(FaBirthdayCake, "DOB", data?.dob)}
                {renderInfoRow(FaRoute, "Address", data?.address)}
                {renderInfoRow(SiContributorcovenant, "Contributions", data?.contributions)}

                <Box className="flex justify-evenly items-center gap-6 bg-nostalgicblue w-full mb-4">
                  <LightTooltip title="Edit" placement="top">
                    <IconButton sx={{ color: "white" }} onClick={handleOpen}>
                      <FaEdit size={30} className="text-black" />
                    </IconButton>
                  </LightTooltip>
                  <Link to={`/details/${data?.id}`}>
                    <LightTooltip title="Read more" placement="top">
                      <IconButton sx={{ color: "white" }}>
                        <CiRead size={30} className="text-black" />
                      </IconButton>
                    </LightTooltip>
                  </Link>
                </Box>
                <Box className="flex justify-between w-full bg-chestnut text-white p-2">
                  <span className="text-[0.8rem] font-bold">
                    Registered on:{" "}
                    <span className="text-base font-semibold">{data && new Date(data.createdAt).toLocaleDateString()}</span>
                  </span>
                  <span className="text-[0.8rem] font-bold">
                    Edited on:{" "}
                    <span className="text-base font-semibold">{data && new Date(data.updatedAt).toLocaleDateString()}</span>
                  </span>
                </Box>
              </Box>
            </Box>

            <MUIModal open={open} onClose={handleClose}>
              <EditCard handleClose={handleClose} open={open} induvidual={data} />
            </MUIModal>

            <MUIModal open={changePassword} onClose={handleRequestClose}>
              <Box className="flex w-[300px] h-auto bg-white flex-col p-4 justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-2 rounded-xl">
                {editAnimalPendingResponse && <CircularProgress color="inherit" />}
                <span className="inline-block text-center">Reset password?</span>
                <form className="flex flex-col justify-center items-center gap-2" onSubmit={handlePasswordChangeSubmit}>
                  <FormControl className="w-full mb-4" variant="standard" color="black">
                    <InputLabel htmlFor="newpassword" color="black">New password</InputLabel>
                    <Input
                      id="newpassword"
                      type="password"
                      placeholder="Enter new password"
                      value={getNewPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </FormControl>
                  <FormControl className="w-full mb-4" variant="standard" color="black">
                    <InputLabel htmlFor="confirmpassword" color="black">Confirm password</InputLabel>
                    <Input
                      id="confirmpassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={getNewConfirmPassword}
                      onChange={(e) => setNewConfirmPassword(e.target.value)}
                    />
                  </FormControl>
                  <Box className="flex gap-2">
                    <Button variant="contained" type="submit" sx={{ backgroundColor: "#70645C" }} className="hover:bg-black mt-2">Change</Button>
                    <Button variant="contained" type="button" sx={{ backgroundColor: "#70645C" }} className="hover:bg-black mt-2" onClick={handleRequestClose}>
                      <TiCancelOutline size={25} />
                    </Button>
                  </Box>
                </form>
              </Box>
            </MUIModal>
          </Box>
        </Box>
      </Box>
      <FooterBar details />
    </Box>
  );
};

export default ProfileSource;
