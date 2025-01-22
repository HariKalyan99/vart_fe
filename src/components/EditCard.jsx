
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Fade,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { TfiDrupal } from "react-icons/tfi";
import { TbShieldStar } from "react-icons/tb";
import { PiPlantFill } from "react-icons/pi";
import { GiBossKey } from "react-icons/gi";
import { GiReptileTail } from "react-icons/gi"; //reptile
import { GiCrocJaws } from "react-icons/gi"; //amphi
import { GiNeedleJaws } from "react-icons/gi"; //carnivores
import { FaBirthdayCake, FaCrow, FaRoute } from "react-icons/fa"; //omni
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaCriticalRole } from "react-icons/fa";
// import { Textarea } from "@headlessui/react";
import { SiContributorcovenant } from "react-icons/si";
import { MdCancelPresentation } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  crudActions,
  editOne,
  getInduvidual,
  getList,
} from "../../slices/CRUDSlices/CrudOperationSlice";

const EditField = ({ icon, value, onChange, placeholder, type = "text", rows = 1, isSelect = false, options = [] }) => {
  return (
    <Box className="flex gap-2">
      {icon}
      {isSelect ? (
        <FormControl className="w-[80%] mb-4" variant="standard">
          <Select value={value} onChange={onChange} displayEmpty className="bg-transparent outline-none">
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value} disabled={option.disabled}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <TextField
          placeholder={placeholder}
          variant="standard"
          color="black"
          className="w-[80%]"
          value={value}
          onChange={onChange}
          type={type}
          rows={rows}
          multiline={rows > 1}
        />
      )}
    </Box>
  );
};

const EditCard = ({ handleClose, induvidual }) => {
  const [getName, setName] = useState(induvidual.animalname);
  const [getEmail, setEmail] = useState(induvidual.email);
  const [getPhone, setPhone] = useState(induvidual.phoneNumber);
  const [getDob, setDob] = useState(induvidual.dob);
  const [getAddress, setAddress] = useState(induvidual.address);
  const [getContributions, setContributions] = useState(induvidual.contributions);
  const [role, setRole] = useState(induvidual.animalRole || "");
  const [cat, setCat] = useState("");

  const dispatch = useDispatch();
  const { editInduvidual, editInduvidualPending } = useSelector(state => state.crud);

  useEffect(() => {
    if (editInduvidual?.status === "success" && editInduvidual) {
      if (
        JSON.parse(localStorage.getItem("data")).id === editInduvidual?.data.id
      ) {
        let newLocal = {
          ...JSON.parse(localStorage.getItem("data")),
          role: editInduvidual?.data.animalRole, name: editInduvidual?.data.animalname,
        };
        localStorage.setItem("data", JSON.stringify(newLocal));
      }
      dispatch(getList());
      dispatch(getInduvidual(induvidual.id));
      handleClose();
      dispatch(crudActions.resetEditInduvidualResponse());
    }
  }, [editInduvidual]);
  // const handleRoleChange = (e) => setRole(e.target.value);
  const handleCatChange = (e) => {
    const category = e.target.value;
    const icons = {
      herbivores: <PiPlantFill size={25} />,
      reptiles: <GiReptileTail size={25} />,
      amphibian: <GiCrocJaws size={25} />,
      carnivores: <GiNeedleJaws size={25} />,
      omnivores: <FaCrow size={25} />,
    };
    setCat({ category, icon: icons[category] });
  };

  const handleEditDetails = (e) => {
    e.preventDefault();
    const animalData = {
      animalname: getName,
      animalRole: role,
      category: cat.category?.toLowerCase(),
      email: getEmail,
      phoneNumber: getPhone,
      dob: new Date(getDob)?.toDateString(),
      address: getAddress,
      contributions: getContributions,
    };
    dispatch(editOne({ body: animalData, id: induvidual.id }));
  };

  const categoryOptions = [
    { value: "herbivores", label: "Herbivores" },
    { value: "reptiles", label: "Reptiles" },
    { value: "amphibian", label: "Amphibian" },
    { value: "carnivores", label: "Carnivores" },
    { value: "omnivores", label: "Omnivores" },
  ];

  return (
    <Card className="w-[40%] border-4 border-nostaligicblue min-h-[70%] flex gap-4 bg-raddishpinklight shadow-2xl relative p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <CardContent className="w-full border-4 border-chestnut h-[auto]">
        {editInduvidualPending && <CircularProgress className="text-center" color="inherit" />}
        <form onSubmit={handleEditDetails} className="w-full h-full flex flex-col gap-2">
          <Box className="w-full border h-full flex flex-col gap-2 p-2">
            <EditField icon={<TfiDrupal size={25} />} value={getName} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
            {/* <EditField icon={<TbShieldStar size={25} />} value={role} onChange={handleRoleChange} isSelect options={[{ value: "", label: "Select Role", disabled: true }, { value: "kingofjungle", label: "KING OF JUNGLE" }, { value: "queenofjungle", label: "QUEEN OF JUNGLE" }]} /> */}
            <EditField icon={cat.icon || <FaCriticalRole size={25} />} value={cat.category} onChange={handleCatChange} isSelect options={[{ value: "", label: "Select Category", disabled: true }, ...categoryOptions]} />
            <EditField icon={<MdEmail size={25} />} value={getEmail} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <EditField icon={<IoMdPhonePortrait size={25} />} value={getPhone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" />
            <EditField icon={<FaBirthdayCake size={25} />} value={getDob} onChange={(e) => setDob(e.target.value)} placeholder="Enter your DOB" type="date" />
            <EditField icon={<FaRoute size={25} />} value={getAddress} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" rows={4} />
          </Box>
          <Box className="w-full border h-full flex flex-col gap-4 p-2">
            <EditField icon={<SiContributorcovenant size={25} />} value={getContributions} onChange={(e) => setContributions(e.target.value)} placeholder="Add Contributions" rows={5} />
            <Box className="w-full flex justify-center gap-2">
              <Button variant="contained" type="submit" sx={{ backgroundColor: "#70645C" }} className="hover:bg-black w-[50%]">Edit</Button>
              <Button variant="contained" type="button" sx={{ backgroundColor: "#70645C" }} className="hover:bg-black w-auto" onClick={handleClose}><MdCancelPresentation size={30} /></Button>
            </Box>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditCard;
