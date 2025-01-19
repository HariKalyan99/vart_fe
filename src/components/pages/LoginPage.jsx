// import React from 'react'

// const LoginPage = () => {
//   return (
//     <div className='w-full h-[100vh] flex justify-center items-center bg_wallpaper4'>
//        <div className='h-[400px] w-[500px] border-2 rounded-xl bg-primary2 border-white shadow-2xl'>
//         <form className='w-full h-full flex justify-evenly items-center flex-col'>
//             <span className='text-2xl font-bold'>Login</span>
//             <input type="email" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Enter your email'/>
//             <input type="password" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Enter your password'/>
//             <input type="password" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Confirm your password'/>
//             <p>Not registered? <span className='text-base font-bold underline hover:cursor-pointer hover:text-chestnut'>Signup</span></p>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default LoginPage
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Box className="w-full h-[100vh] flex justify-center items-center bg_wallpaper4">
      <Box className="h-[400px] w-[500px] border-2 rounded-xl bg-primary2 border-nostalgicblue shadow-2xl">
        <form className="w-full h-full flex justify-evenly items-center flex-col">
          <span className="text-2xl font-bold">Login</span>

          <TextField
            type="email"
            className="w-[80%] h-[40px] mb-4 bg-transparent outline-none border-b placeholder-[black] fs-2"
            placeholder="Enter your email"
            variant="standard"
            color="black"
          />

          <FormControl className="w-[80%] mb-4" variant="standard">
            <InputLabel htmlFor="password" color="black">
              Enter your password
            </InputLabel>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              className="bg-transparent outline-none placeholder-[black] fs-2"
              color="black"
            />
          </FormControl>
          <p className="text-center">
            Forgot password?{" "}
            <Link to={"/forgot-pwd"}>
            <span
              className="text-base font-bold underline hover:cursor-pointer hover:text-chestnut"
              onClick={() => navigate("/register")}
            >
              Reset password
            </span>
            </Link>
          </p>
          <p className="text-center">
            Not registered?{" "}
            <span
              className="text-base font-bold underline hover:cursor-pointer hover:text-chestnut"
              onClick={() => navigate("/register")}
            >
              Signup
            </span>
          </p>

          <Link to={"/dashboard"}>
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "#70645C" }}
              className="hover:bg-black"
            >
              Login
            </Button>
          </Link>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
