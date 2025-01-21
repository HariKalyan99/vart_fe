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
import {
  authActions,
  authLogin,
} from "../../../slices/AuthenticationSlices/AuthSlice";
import Cookies from "js-cookie";
import { CircularProgress } from "@mui/material";

const LoginPage = () => {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = Cookies.get("jwt");
  if (token) {
    navigate("/dashboard");
  }

  const { loginResponse, loginPending } = useSelector((state) => state.auth);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    dispatch(authActions.resetPasswordEmailResponse());
    dispatch(authActions.resetForgotPasswordResponse());
    dispatch(authActions.resetRegistrationResponse());
  }, []);

  useEffect(() => {
    if (loginResponse?.status === "success" && loginResponse) {
      dispatch(authActions.resetRegistrationResponse());
      navigate("/dashboard");
    }
  }, [loginResponse]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = getEmail;
    const password = getPassword;
    dispatch(
      authLogin({
        email,
        password,
      })
    );
  };

  return (
    <Box className="w-full h-[100vh] flex justify-center items-center bg_wallpaper4">
      <Box className="h-[400px] w-[500px] border-2 rounded-xl bg-primary2 border-nostalgicblue shadow-2xl">
        <form
          className="w-full h-full flex justify-evenly items-center flex-col"
          onSubmit={handleLoginSubmit}
        >
          <span className="text-2xl font-bold">Login</span>

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
          <p className="text-center">
            Forgot password?{" "}
            <Link to={"/forgot-pwd"}>
              <span className="text-base font-bold underline hover:cursor-pointer hover:text-chestnut">
                Reset password
              </span>
            </Link>
          </p>
          <p className="text-center">
            Not registered?{" "}
            <Link to={"/register"}>
              <span className="text-base font-bold underline hover:cursor-pointer hover:text-chestnut">
                Signup
              </span>
            </Link>
          </p>

          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#70645C" }}
            className="hover:bg-black"
          >
            Login
          </Button>
          {loginPending && <CircularProgress color="inherit" />}
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
