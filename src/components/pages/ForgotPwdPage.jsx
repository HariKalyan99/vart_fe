import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const ForgotPwdPage = () => {
  const [mailSent, setMailSent] = useState(false);

  return (
    <Box
      className={`w-full h-[100vh] flex justify-center items-center ${
        !mailSent ? "bg-nostalgicblue" : "bg_wallpaper5"
      }`}
    >
      <Box
        className={`${
          mailSent ? "h-[400px]" : "h-[200px]"
        } w-[500px] border-2 rounded-xl bg-primary2 border-nostalgicblue shadow-2xl flex justify-center items-center`}
      >
        {mailSent ? (
          <form className="w-full h-full flex justify-evenly items-center flex-col">
            <span className="text-2xl font-bold">Reset password</span>
            <TextField
              type="text"
              className="w-[80%] mb-4"
              placeholder="Enter the password sent to your mail"
              variant="standard"
              color="black"
            />
            <TextField
              type="text"
              className="w-[80%] mb-4"
              placeholder="New password"
              variant="standard"
              color="black"
            />
            <TextField
              type="password"
              className="w-[80%] mb-4"
              placeholder="Confirm New password"
              variant="standard"
              color="black"
            />
           
            <Link to={"/login"}>
            <Button variant="contained" type='submit' sx={{backgroundColor: "#70645C"}} className='hover:bg-black'>
            Reset
          </Button>
            </Link>
            <p>
              Don't reset password? skip to{" "}
              <Link to={"/login"}>
              <span className="text-base font-bold underline hover:cursor-pointer hover:text-chestnut">
                Login
              </span>
              </Link>
            </p>
          </form>
        ) : (
          <form className="w-full h-full flex justify-evenly items-center flex-col">
            <span className="text-2xl font-bold">Enter your mail</span>
            <TextField
              type="email"
              className="w-[80%] mb-4"
              placeholder="Enter your mail to receive the OTP"
              variant="standard"
              color="black"
            />
            
            <Button variant="contained" type='submit' sx={{backgroundColor: "#70645C"}} className='hover:bg-black' onClick={() => setMailSent((prev) => !prev)}>
            Send email
          </Button>
          </form>
        )}
      </Box>
    </Box>
  );
};

export default ForgotPwdPage;

