import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import photo from "../../assets/home.gif";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const OpeningPage = () => {
  const navigate = useNavigate();
  const token = Cookies.get("jwt");
  if (token) {
    navigate("/dashboard");
  }

  return (
    <Box className="relative w-full h-[100vh] flex justify-center items-center">
      <Box className="w-[100%] h-[100%] absolute z-[-10]">
        <img
          src={photo}
          alt="opening_photo"
          className="w-full h-full object-cover"
        />
      </Box>
      <Box className="h-[200px] w-[300px] z-[100] border-2 border-nostalgicblue bg-primary shadow-2xl flex justify-center items-center rounded-xl flex-col">
        <p>Register soon!</p>
        <Link to={"/register"}>
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#70645C" }}
            className="hover:bg-black"
          >
            Click here!
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default OpeningPage;
