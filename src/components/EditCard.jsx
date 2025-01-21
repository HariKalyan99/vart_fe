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
import { Textarea } from "@headlessui/react";
import { SiContributorcovenant } from "react-icons/si";
import { MdCancelPresentation } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  crudActions,
  editOne,
  getInduvidual,
  getList,
} from "../../slices/CRUDSlices/CrudOperationSlice";
import { useNavigate } from "react-router-dom";

const EditCard = ({ handleClose, open, induvidual }) => {
  const [getName, setName] = useState(induvidual.animalname);
  const [getEmail, setEmail] = useState(induvidual.email);
  const [getPhone, setPhone] = useState(induvidual.phoneNumber);
  const [getDob, setDob] = useState(induvidual.dob);
  const [getAddress, setAddress] = useState(induvidual.address);
  const [getContributions, setContributions] = useState(
    induvidual.contributions
  );
  const [role, setRole] = useState(induvidual.animalRole || "");
  const [cat, setCat] = useState("");
  const dispatch = useDispatch();
  const { editInduvidual, editInduvidualPending } = useSelector(
    (state) => state.crud
  );

  useEffect(() => {
    if (editInduvidual?.status === "success" && editInduvidual) {
      if (
        JSON.parse(localStorage.getItem("data")).id === editInduvidual?.data.id
      ) {
        let newLocal = {
          ...JSON.parse(localStorage.getItem("data")),
          role: editInduvidual?.data.animalRole,
        };
        localStorage.setItem("data", JSON.stringify(newLocal));
      }
      dispatch(getList());
      dispatch(getInduvidual(induvidual.id));
      handleClose();
      dispatch(crudActions.resetEditInduvidualResponse());
    }
  }, [editInduvidual]);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleCatChange = (e) => {
    if (e.target.value === "herbivores") {
      setCat({ category: e.target.value, icon: <PiPlantFill size={25} /> });
    } else if (e.target.value === "reptiles") {
      setCat({ category: e.target.value, icon: <GiReptileTail size={25} /> });
    } else if (e.target.value === "amphibians") {
      setCat({ category: e.target.value, icon: <GiCrocJaws size={25} /> });
    } else if (e.target.value === "carnivores") {
      setCat({ category: e.target.value, icon: <GiNeedleJaws size={25} /> });
    } else if (e.target.value === "omnivores") {
      setCat({ category: e.target.value, icon: <FaCrow size={25} /> });
    }
  };

  const handleEditDetails = (e) => {
    e.preventDefault();
    const animalname = getName;
    const animalRole = role;
    const category = cat.category;
    const email = getEmail;
    const phoneNumber = getPhone;
    const dob = getDob;
    const address = getAddress;
    const contributions = getContributions;
    dispatch(
      editOne({
        body: {
          animalname,
          animalRole,
          category: category?.toLowerCase(),
          email,
          phoneNumber,
          dob,
          address,
          contributions,
        },
        id: induvidual.id,
      })
    );
  };
  return (
    <Card className="w-[40%] border-4 border-nostaligicblue min-h-[70%] flex gap-4 bg-raddishpinklight shadow-2xl relative p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <CardContent className="w-full border-4 border-chestnut h-[auto]">
        {editInduvidualPending && (
          <CircularProgress className="text-center" color="inherit" />
        )}
        <form
          className="w-full h-full flex flex-col gap-2"
          onSubmit={handleEditDetails}
        >
          <Box className="w-full border h-full flex flex-col gap-2 p-2">
            <Box className="flex gap-2">
              <TfiDrupal size={25} />
              <TextField
                placeholder="Enter name"
                variant="standard"
                color="black"
                className="w-[80%]"
                value={getName}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>

            <Box className="flex gap-2">
              <TbShieldStar size={25} />
              <FormControl className="w-[80%] mb-4" variant="standard">
                <Select
                  value={role}
                  onChange={handleRoleChange}
                  displayEmpty
                  className="bg-transparent outline-none placeholder-[black] fs-2"
                  color="black"
                  inputProps={{
                    "aria-label": "Desired role",
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Role
                  </MenuItem>
                  <MenuItem value="kingofjungle">KING OF JUNGLE</MenuItem>
                  <MenuItem value="queenofjungle">QUEEN OF JUNGLE</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className="flex gap-2">
              {cat.icon ? cat.icon : <GiBossKey size={25} />}
              <FormControl className="w-[80%] mb-4" variant="standard">
                <Select
                  value={cat?.category}
                  onChange={handleCatChange}
                  displayEmpty
                  className="bg-transparent outline-none placeholder-[black] fs-2"
                  color="black"
                  inputProps={{
                    "aria-label": "Desired category",
                  }}
                >
                  <MenuItem value="Select Category" disabled>
                    Select your Category
                  </MenuItem>
                  {[
                    "herbivores",
                    "reptiles",
                    "amphibians",
                    "carnivores",
                    "omnivores",
                  ].map((cat, ind) => (
                    <MenuItem key={ind} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box className="flex gap-2">
              <MdEmail size={25} />
              <TextField
                placeholder="Enter email"
                variant="standard"
                color="black"
                className="w-[80%]"
                value={getEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Box className="flex gap-2">
              <IoMdPhonePortrait size={25} />
              <TextField
                placeholder="Enter phone number"
                variant="standard"
                color="black"
                className="w-[80%]"
                value={getPhone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Box>

            <Box className="flex gap-2">
              <FaBirthdayCake size={25} />
              <TextField
                type="date"
                placeholder="Enter your DOB"
                variant="standard"
                color="black"
                className="w-[80%]"
                value={getDob}
                onChange={(e) => setDob(e.target.value)}
              />
            </Box>

            <Box className="flex gap-2">
              <FaRoute size={25} />
              <Textarea
                type="text"
                label="Outlined"
                placeholder="Enter Address"
                color="black"
                className="w-[80%] border p-2"
                rows={4}
                value={getAddress}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Box>
          </Box>

          {/* 2nd extra info */}
          <Box className="w-full border h-full flex flex-col gap-4 p-2">
            <Box className="flex gap-2">
              <SiContributorcovenant size={25} />
              <Textarea
                type="text"
                label="Outlined"
                placeholder="Add Contributions"
                color="black"
                className="w-[80%] border p-2"
                rows={5}
                value={getContributions}
                onChange={(e) => setContributions(e.target.value)}
              />
            </Box>

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
