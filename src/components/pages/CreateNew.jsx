import React from "react";
import NavigationBar from "../common-templates/NavigationBar";
import FooterBar from "../common-templates/FooterBar";
import { Box } from "@mui/material";

import AnimalCard from "../common-templates/Card";
import CreateCard from "../CreateCard";

const CreateNew = () => {
  return (
    <>
      <Box className="bg-nostalgicblue w-full min-h-[100vh] h-auto flex justify-center flex-col">
        <NavigationBar create />
        <Box className="w-full h-full mt-4 flex justify-center">
          <Box className="min-h-[85vh] container mt-[2rem] w-full flex justify-center items-center gap-4">
            <CreateCard />
            <Box className="w-[50%] h-[100%] justify-center items-center flex">
              <AnimalCard copy={true} />
            </Box>
          </Box>
        </Box>
        <FooterBar create />
      </Box>
    </>
  );
};

export default CreateNew;
