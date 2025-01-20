import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions, authRegisterNew } from "../../../slices/AuthenticationSlices/AuthSlice";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [getRole, setRole] = useState("");
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getConfirmPassword, setConfirmPassword] = useState("");
  const [getPhone, setPhone] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { registrationResponse } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(authActions.resetRegistrationResponse());
  }, [])

  useEffect(() => {
    if(registrationResponse?.status === "success" && registrationResponse){
      navigate("/login");
    dispatch(authActions.resetRegistrationResponse());

    }
  }, [registrationResponse])

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);
  const handleRoleChange = (event) => setRole(event.target.value);
  const handleRegisterSubmit = async(e) => {
    e.preventDefault();
    const animalname = getName;
    const email = getEmail;
    const password = getPassword;
    const confirmPassword = getConfirmPassword;
    const phoneNumber = getPhone;
    const animaleRole = getRole;
    dispatch(
      authRegisterNew({
        animalname,
        email,
        password,
        confirmPassword,
        phoneNumber,
        animaleRole,
      }));
    };



  return (
    <>
    <Box className="w-full h-[100vh] flex justify-center items-center bg_wallpaper">
      <Box className="h-[600px] w-[500px] border-2 rounded-xl bg-primary2 border-nostalgicblue shadow-2xl">
        <form
          className="w-full h-full flex justify-evenly items-center flex-col"
          onSubmit={handleRegisterSubmit}
        >
          <span className="text-2xl font-bold mb-4">Register</span>

          <TextField
            type="text"
            className="w-[80%] h-[40px] mb-4 bg-transparent outline-none border-b placeholder-[black] fs-2"
            placeholder="Enter your name"
            variant="standard"
            color="black"
            value={getName}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            className="w-[80%] h-[40px] mb-4 bg-transparent outline-none border-b placeholder-[black] fs-2"
            placeholder="Enter your email"
            variant="standard"
            color="black"
            value={getEmail}
            onChange={(e) => setEmail(e.target.value)}
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
              value={getPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl className="w-[80%] mb-4" variant="standard">
            <InputLabel htmlFor="confirmPassword" color="black">
              Confirm your password
            </InputLabel>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              className="bg-transparent outline-none placeholder-[black] fs-2"
              color="black"
              value={getConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          <TextField
            type="tel"
            className="w-[80%] h-[40px] mb-4 bg-transparent outline-none placeholder-[black] fs-2"
            placeholder="Enter your phone (optional)"
            variant="standard"
            color="black"
            value={getPhone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <FormControl className="w-[80%] mb-4" variant="standard">
            <InputLabel color="black">Desired role? (optional)</InputLabel>
            <Select
              value={getRole}
              onChange={handleRoleChange}
              displayEmpty
              className="bg-transparent outline-none placeholder-[black] fs-2"
              color="black"
              inputProps={{
                "aria-label": "Desired role",
              }}
            >
              <MenuItem value="" disabled>
                Desired role? (optional)
              </MenuItem>
              <MenuItem value="kingofjungle">KING OF JUNGLE</MenuItem>
              <MenuItem value="queenofjungle">QUEEN OF JUNGLE</MenuItem>
            </Select>
          </FormControl>

          <p className="text-center">
            Already have an account?{" "}
            <span
              className="text-base font-bold underline hover:cursor-pointer hover:text-chestnut"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>

          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#70645C" }}
            className="hover:bg-black"
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
    </>
  );
};

export default SignupPage;
