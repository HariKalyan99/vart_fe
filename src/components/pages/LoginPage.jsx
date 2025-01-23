import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { CircularProgress } from "@mui/material";
import { authActions } from "../../../slices/AuthenticationSlices/AuthSlice";
import { animalLogin } from "../../../slices/AuthenticationSlices/loginAnimal";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [valid, setValid] = useState({ email: false, password: false });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginResponse, loginPending } = useSelector((state) => state.auth);

  const token = Cookies.get("jwt");
  if (token) navigate("/dashboard");

  useEffect(() => {
    dispatch(authActions.resetPasswordEmailResponse());
    dispatch(authActions.resetForgotPasswordResponse());
    dispatch(authActions.resetRegistrationResponse());
  }, [dispatch]);

  useEffect(() => {
    if (loginResponse?.status === "success") navigate("/dashboard");
  }, [loginResponse, navigate]);

  const handleInputChange = (field, value, validator) => {
    setFormData({ ...formData, [field]: value });
    setValid((prev) => ({ ...prev, [field]: !validator(value) }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(animalLogin(formData));
  };

  return (
    <Box className="w-full h-[100vh] flex justify-center items-center bg_wallpaper4">
      <Box className="h-[400px] w-[500px] border-2 rounded-xl bg-primary2 border-nostalgicblue shadow-2xl">
        <form className="w-full h-full flex justify-evenly items-center flex-col" onSubmit={handleLoginSubmit}>
          <span className="text-2xl font-bold">Login</span>

          <TextField
            type="email"
            className="w-[80%] h-[40px] mb-4 bg-transparent outline-none border-b placeholder-[black] fs-2"
            placeholder="Enter your email"
            variant="standard"
            color="black"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value, (val) => emailRegex.test(val))}
          />
          {valid.email && <span className="w-[80%] text-left text-sm text-[red]">Invalid email format!</span>}

          <FormControl className="w-[80%] mb-4" variant="standard">
            <InputLabel htmlFor="password" color="black">Enter your password</InputLabel>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              className="bg-transparent outline-none placeholder-[black] fs-2"
              color="black"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value, (val) => val.length >= 7)}
            />
          </FormControl>
          {valid.password && <span className="w-[80%] text-left text-sm text-[red]">Password should be at least 7 characters!</span>}

          <p className="text-center">
            Forgot password? <Link to="/forgot-pwd" className="text-base font-bold underline hover:text-chestnut">Reset password</Link>
          </p>
          <p className="text-center">
            Not registered? <Link to="/register" className="text-base font-bold underline hover:text-chestnut">Signup</Link>
          </p>

          <Button variant="contained" type="submit" sx={{ backgroundColor: "#70645C" }} className="hover:bg-black">
            Login
          </Button>
          {loginPending && <CircularProgress color="inherit" />}
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
