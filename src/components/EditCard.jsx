import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { TfiDrupal } from "react-icons/tfi";
import { TbShieldStar } from "react-icons/tb";
import { PiPlantFill } from "react-icons/pi";
import { GiReptileTail } from "react-icons/gi"; //reptile
import { GiCrocJaws } from "react-icons/gi"; //amphi
import { GiNeedleJaws } from "react-icons/gi"; //carnivores
import { FaBirthdayCake, FaCrow, FaRoute } from "react-icons/fa"; //omni
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaCriticalRole } from "react-icons/fa";
import { SiContributorcovenant } from "react-icons/si";
import { MdCancelPresentation } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAnimalById } from "../../slices/CRUDSlices/getAnimalById";
import { crudActions } from "../../slices/CRUDSlices/CrudOperationSlice";
import { editAnimal } from "../../slices/CRUDSlices/editAnimal";
import { getAnimalList } from "../../slices/CRUDSlices/getAnimalList";

const validationObj = [
  { type: "name", valid: false },
  { type: "email", valid: false },
  { type: "phone", valid: false },
];

const EditField = ({
  icon,
  value,
  onChange,
  placeholder,
  type = "text",
  rows = 1,
  isSelect = false,
  options = [],
  validationError,
}) => {
  return (
    <Box className="flex gap-2 flex-col">
      <Box className="flex items-center gap-2">
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
      {validationError && (
        <span className="text-[red] text-sm">{validationError}</span>
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
  const [getValid, setValid] = useState(validationObj);

  const dispatch = useDispatch();
  const { editAnimalResponse, editAnimalPendingResponse } = useSelector(state => state.crud);

  // Validation functions
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  const updateValidation = (type, valid) => {
    setValid((prevValid) =>
      prevValid.map((item) => (item.type === type ? { ...item, valid } : item))
    );
  };

  const handleRoleChange = (e) => setRole(e.target.value);
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

    if (!getName || !emailRegex.test(getEmail) || !phoneRegex.test(getPhone)) {
      return;
    }

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
    dispatch(editAnimal({ body: animalData, id: induvidual.id }));
  };

  useEffect(() => {
    if (editAnimalResponse?.status === "success" && editAnimalResponse) {
      if (
        JSON.parse(localStorage.getItem("data")).id === editAnimalResponse?.data.id
      ) {
        let newLocal = {
          ...JSON.parse(localStorage.getItem("data")),
          role: editAnimalResponse?.data.animalRole, name: editAnimalResponse?.data.animalname,
        };
        localStorage.setItem("data", JSON.stringify(newLocal));
      }
      dispatch(getAnimalList());
      dispatch(getAnimalById(induvidual.id));
      handleClose();
      dispatch(crudActions.reseteditAnimalResponse());
    }
  }, [editAnimalResponse]);

  const handleFieldChange = (setter, validator, type, e) => {
    const value = e.target.value;
    setter(value);
    const isValid = validator(value);
    updateValidation(type, !isValid);
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
        {editAnimalPendingResponse && <CircularProgress className="text-center" color="inherit" />}
        <form onSubmit={handleEditDetails} className="w-full h-full flex flex-col gap-2">
          <Box className="w-full border h-full flex flex-col gap-2 p-2">
            <EditField
              icon={<TfiDrupal size={25} />}
              value={getName}
              onChange={(e) => handleFieldChange(setName, (name) => name.length >= 5, "name", e)}
              placeholder="Enter name"
              validationError={
                getValid.find((x) => x.type === "name")?.valid && "Name should be at least 5 characters long"
              }
            />
            <EditField
              icon={<MdEmail size={25} />}
              value={getEmail}
              onChange={(e) => handleFieldChange(setEmail, (email) => emailRegex.test(email), "email", e)}
              placeholder="Enter email"
              validationError={
                getValid.find((x) => x.type === "email")?.valid && "Invalid email format"
              }
            />
            <EditField
              icon={<IoMdPhonePortrait size={25} />}
              value={getPhone}
              onChange={(e) => handleFieldChange(setPhone, (phone) => phoneRegex.test(phone), "phone", e)}
              placeholder="Enter phone number"
              validationError={
                getValid.find((x) => x.type === "phone")?.valid && "Phone number should be 10 digits"
              }
            />
            <EditField
              icon={<FaBirthdayCake size={25} />}
              value={getDob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="Enter your DOB"
              type="date"
            />
            <EditField
              icon={<FaRoute size={25} />}
              value={getAddress}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Address"
              rows={4}
            />
          </Box>
          <Box className="w-full border h-full flex flex-col gap-4 p-2">
            <EditField
              icon={<SiContributorcovenant size={25} />}
              value={getContributions}
              onChange={(e) => setContributions(e.target.value)}
              placeholder="Add Contributions"
              rows={5}
            />
            <Box className="w-full flex justify-center gap-2">
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#70645C" }}
                className="hover:bg-black w-[50%]"
              >
                Edit
              </Button>
              <Button
                variant="contained"
                type="button"
                sx={{ backgroundColor: "#70645C" }}
                className="hover:bg-black w-auto"
                onClick={handleClose}
              >
                <MdCancelPresentation size={30} />
              </Button>
            </Box>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditCard;
