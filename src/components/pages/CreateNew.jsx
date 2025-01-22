import React, { useEffect, useState } from "react";
import NavigationBar from "../common-templates/NavigationBar";
import FooterBar from "../common-templates/FooterBar";
import { Box, CircularProgress } from "@mui/material";

import AnimalCard from "../common-templates/Card";
import CreateCard from "../CreateCard";
import { useDispatch, useSelector } from "react-redux";
import { createOne } from "../../../slices/CRUDSlices/CrudOperationSlice";
import { useNavigate } from "react-router-dom";

const CreateNew = () => {
  const [getName, setName] = useState("");
  const [getDepRole, setDepRole] = useState("");
  const [getCategory, setCategory] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getDob, setDob] = useState("");
  const [getAddress, setAddress] = useState("");
  const [getContributions, setContributions] = useState("");

  const [creationDetails, setCreationDetails] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { createInduvidual } = useSelector((state) => state.crud);
  useEffect(() => {
    if (createInduvidual?.status === "success" && createInduvidual) {
      navigate("/dashboard");
    }
  }, [createInduvidual]);

  useEffect(() => {
    if (
      creationDetails.animalname?.length > 0 &&
      creationDetails.animalRole?.length > 0
    ) {
      dispatch(createOne(creationDetails));
    }
  }, [creationDetails]);

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const animalname = getName;
    const animalRole = getDepRole;
    const category = getCategory.category;
    const email = getEmail;
    const phoneNumber = getPhone;
    const dob = new Date(getDob)?.toDateString();
    const address = getAddress;
    const contributions = getContributions;
    setCreationDetails({
      animalname,
      animalRole,
      category: category.toLowerCase(),
      email,
      phoneNumber,
      dob,
      address,
      contributions,
    });
  };
  return (
    <>
      <Box className="bg-nostalgicblue w-full min-h-[100vh] h-auto flex justify-center flex-col">
        <NavigationBar navStyle={"create"} />
        <Box className="w-full h-full mt-4 flex justify-center">
          <Box className="min-h-[85vh] container mt-[2rem] w-full flex justify-center items-center gap-4">
            <CreateCard
              getName={getName}
              setName={setName}
              getDepRole={getDepRole}
              setDepRole={setDepRole}
              getCategory={getCategory}
              setCategory={setCategory}
              getEmail={getEmail}
              setEmail={setEmail}
              getPhone={getPhone}
              setPhone={setPhone}
              getDob={getDob}
              setDob={setDob}
              getAddress={getAddress}
              setAddress={setAddress}
              getContributions={getContributions}
              setContributions={setContributions}
              handleCreateSubmit={handleCreateSubmit}
            />
            <Box className="w-[50%] h-[100%] justify-center items-center flex">
              <AnimalCard
                copy={true}
                getName={getName}
                getDepRole={getDepRole}
                getCategory={getCategory}
                getEmail={getEmail}
                getPhone={getPhone}
              />
            </Box>
          </Box>
        </Box>
        <FooterBar create />
      </Box>
    </>
  );
};

export default CreateNew;
