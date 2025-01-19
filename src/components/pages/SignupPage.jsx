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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [role, setRole] = React.useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);
  const handleRoleChange = (event) => setRole(event.target.value);

  return (
    <Box className="w-full h-[100vh] flex justify-center items-center bg_wallpaper">
      <Box className="h-[600px] w-[500px] border-2 rounded-xl bg-primary2 border-nostalgicblue shadow-2xl">
        <form className="w-full h-full flex justify-evenly items-center flex-col">
          <span className="text-2xl font-bold mb-4">Register</span>

          <TextField
            type="text"
            className="w-[80%] h-[40px] mb-4 bg-transparent outline-none border-b placeholder-[black] fs-2"
            placeholder="Enter your name"
            variant="standard"
            color="black"
          />
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
            />
          </FormControl>

          <TextField
            type="tel"
            className="w-[80%] h-[40px] mb-4 bg-transparent outline-none placeholder-[black] fs-2"
            placeholder="Enter your phone (optional)"
            variant="standard"
            color="black"
          />

          <FormControl className="w-[80%] mb-4" variant="standard">
            <InputLabel color="black">Desired role? (optional)</InputLabel>
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
                Desired role? (optional)
              </MenuItem>
              <MenuItem value="kingofjungle">KING OF JUNGLE</MenuItem>
              <MenuItem value="queenofjungle">QUEEN OF JUNGLE</MenuItem>
            </Select>
          </FormControl>

          <p className="text-center">
            Already have an account?{" "}
            <span className="text-base font-bold underline hover:cursor-pointer hover:text-chestnut" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>

          <Link to={"/login"}>
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#70645C" }}
            className="hover:bg-black"
          >
            Register
          </Button>
          </Link>
        </form>
      </Box>
    </Box>
  );
};

export default SignupPage;
