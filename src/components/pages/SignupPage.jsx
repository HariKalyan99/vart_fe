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
import Cookies from "js-cookie";
import { CircularProgress } from "@mui/material";
import { authActions } from "../../../slices/AuthenticationSlices/AuthSlice";
import { registerNewAnimal } from "../../../slices/AuthenticationSlices/signupNewAnimal";

const validationObj = [
  { type: "name", valid: false },
  { type: "mail", valid: false },
  { type: "pwd", valid: false },
  { type: "confirmpwd", valid: false },
  { type: "phone", valid: false },
];

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getConfirmPassword, setConfirmPassword] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getValid, setValid] = useState(validationObj);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { registrationResponse, registrationPending } = useSelector(
    (state) => state.auth
  );

  const token = Cookies.get("jwt");
  if (token) {
    navigate("/dashboard");
  }
// chexk this if you need ?

  useEffect(() => {
    dispatch(authActions.resetRegistrationResponse());
  }, []);

  useEffect(() => {
    if (registrationResponse?.status === "success" && registrationResponse) {
      dispatch(authActions.resetRegistrationResponse());
      navigate("/login");
    }
  }, [registrationResponse]);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const animalname = getName;
    const email = getEmail;
    const password = getPassword;
    const confirmPassword = getConfirmPassword;
    const phoneNumber = getPhone;
    dispatch(
      registerNewAnimal({
        animalname,
        email,
        password,
        confirmPassword,
        phoneNumber,
      })
    );
  };

  const updateValidation = (type, valid) => {
    setValid((prevValid) =>
      prevValid.map((item) => (item.type === type ? { ...item, valid } : item))
    );
  };

  const handleChange = (setter, validator, type, e) => {
    const value = e.target.value;
    setter(value);
    const isValid = validator(value);
    updateValidation(type, !isValid);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

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
              onChange={(e) =>
                handleChange(setName, (name) => name.length >= 5, "name", e)
              }
            />
            {getValid.find((x) => x.type === "name")?.valid && (
              <span className="w-[80%] text-left text-sm text-[red] text-base">
                Name should be more than 5 characters and unique!
              </span>
            )}

            <TextField
              type="email"
              className="w-[80%] h-[40px] mb-4 bg-transparent outline-none border-b placeholder-[black] fs-2"
              placeholder="Enter your email"
              variant="standard"
              color="black"
              value={getEmail}
              onChange={(e) =>
                handleChange(
                  setEmail,
                  (email) => emailRegex.test(email),
                  "mail",
                  e
                )
              }
            />
            {getValid.find((x) => x.type === "mail")?.valid && (
              <span className="w-[80%] text-left text-sm text-[red] text-base">
                Invalid email format!
              </span>
            )}

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
                onChange={(e) =>
                  handleChange(setPassword, (pwd) => pwd.length >= 7, "pwd", e)
                }
              />
            </FormControl>
            {getValid.find((x) => x.type === "pwd")?.valid && (
              <span className="w-[80%] text-left text-sm text-[red] text-base">
                Password should be at least 7 characters!
              </span>
            )}

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
                onChange={(e) => {
                  const value = e.target.value;
                  setConfirmPassword(value);
                  const isValid = value === getPassword;
                  updateValidation("confirmpwd", !isValid);
                }}
              />
            </FormControl>
            {getValid.find((x) => x.type === "confirmpwd")?.valid && (
              <span className="w-[80%] text-left text-sm text-[red] text-base">
                Password is not matching!
              </span>
            )}

            <TextField
              type="tel"
              className="w-[80%] h-[40px] mb-4 bg-transparent outline-none placeholder-[black] fs-2"
              placeholder="Enter your phone"
              variant="standard"
              color="black"
              value={getPhone}
              onChange={(e) =>
                handleChange(
                  setPhone,
                  (phone) => phoneRegex.test(phone),
                  "phone",
                  e
                )
              }
              required
            />
            {getValid.find((x) => x.type === "phone")?.valid && (
              <span className="w-[80%] text-left text-sm text-[red] text-base">
                Invalid phone!
              </span>
            )}

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
            {registrationPending && <CircularProgress color="inherit" />}
          </form>
        </Box>
      </Box>
    </>
  );
};

export default SignupPage;
