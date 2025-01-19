import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import cp from "../assets/dash.gif";
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

const CreateCard = () => {
  const [role, setRole] = useState("");
  const [cat, setCat] = useState("");
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleCatChange = (e) => {
    if (e.target.value === "Herbivores") {
      setCat({ category: e.target.value, icon: <PiPlantFill size={25} /> });
    } else if (e.target.value === "Reptiles") {
      setCat({ category: e.target.value, icon: <GiReptileTail size={25} /> });
    } else if (e.target.value === "Amphibians") {
      setCat({ category: e.target.value, icon: <GiCrocJaws size={25} /> });
    } else if (e.target.value === "Carnivores") {
      setCat({ category: e.target.value, icon: <GiNeedleJaws size={25} /> });
    } else if (e.target.value === "Omnivores") {
      setCat({ category: e.target.value, icon: <FaCrow size={25} /> });
    }
  };
  return (
    <Card className="w-[50%] border-4 border-nostaligicblue h-[100%] flex flex-col gap-4 bg-raddishpinklight shadow-2xl relative p-2">
      <Box className="w-full h-[45%]">
        <img src={cp} alt="card_photo" className="w-full h-full object-cover" />
      </Box>
      <CardContent className="w-full border-4 border-chestnut h-[55%]">
        <form className="w-full h-full flex gap-2">
          <Box className="w-[50%] border h-full flex flex-col gap-2 p-2">
            <Box className="flex gap-2">
              <TfiDrupal size={25} />
              <TextField
                placeholder="Enter your name"
                variant="standard"
                color="black"
                className="w-[80%]"
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
                    Select your Role
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
                  value={cat.category}
                  onChange={handleCatChange}
                  displayEmpty
                  className="bg-transparent outline-none placeholder-[black] fs-2"
                  color="black"
                  inputProps={{
                    "aria-label": "Desired category",
                  }}
                >
                  <MenuItem value="Select your Category" disabled>
                    Select your Category
                  </MenuItem>
                  {[
                    "Herbivores",
                    "Reptiles",
                    "Amphibians",
                    "Carnivores",
                    "Omnivores",
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
                placeholder="Enter your email"
                variant="standard"
                color="black"
                className="w-[80%]"
              />
            </Box>

            <Box className="flex gap-2">
              <IoMdPhonePortrait size={25} />
              <TextField
                placeholder="Enter your phone number"
                variant="standard"
                color="black"
                className="w-[80%]"
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
              />
            </Box>

            <Box className="flex gap-2">
              <FaRoute size={25} />
              <Textarea
                type="text"
                label="Outlined"
                placeholder="Enter your Address"
                color="black"
                className="w-[80%] border p-2"
                rows={4}
              />
            </Box>
          </Box>

          {/* 2nd extra info */}
          <Box className="w-[50%] border h-full flex flex-col gap-4 p-2">
            <Box className="flex gap-2">
              <SiContributorcovenant size={25} />
              <Textarea
                type="text"
                label="Outlined"
                placeholder="What are your Contributions"
                color="black"
                className="w-[80%] border p-2"
                rows={5}
              />
            </Box>

            <Box className="w-full flex justify-center">
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#70645C" }}
                className="hover:bg-black w-[50%]"
              >
                Add
              </Button>
            </Box>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateCard;
