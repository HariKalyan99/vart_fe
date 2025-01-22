import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  authActions,
  forgotPasswordResponse,
  authResetPassword,
} from "../../../slices/AuthenticationSlices/AuthSlice";
import CircularProgress from "@mui/material/CircularProgress";

const validationObj = [
  { type: "mail", valid: false },
  { type: "pwd", valid: false },
  { type: "confirmpwd", valid: false },
];

const ForgotPwdPage = () => {
  const [mailSent, setMailSent] = useState(false);
  const [getValid, setValid] = useState(validationObj);
  const [getEmail, setEmail] = useState("");
  const [getToken, setToken] = useState("");
  const [getNewPassword, setNewPassword] = useState("");
  const [getConfirmNewPassword, setConfirmNewPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    forgotPasswordMail,
    forgotPasswordEmailPending,
    resetPasswordResponse,
    resetPasswordPending,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authActions.resetPasswordEmailResponse());
    dispatch(authActions.resetForgotPasswordResponse());
  }, []);

  useEffect(() => {
    if (forgotPasswordMail?.status === "success" && forgotPasswordMail) {
      setEmail("");
      setMailSent((prev) => !prev);
    }
  }, [forgotPasswordMail]);

  useEffect(() => {
    if (resetPasswordResponse?.status === "success" && resetPasswordResponse) {
      setToken("");
      setNewPassword("");
      setConfirmNewPassword("");
      navigate("/login");
    }
  }, [resetPasswordResponse]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordResponse(getEmail));
  };
  const handleResetPwdSubmit = (e) => {
    e.preventDefault();
    const token = getToken;
    const newPassword = getNewPassword;
    const confirmPassword = getConfirmNewPassword;
    dispatch(authResetPassword({ token, newPassword, confirmPassword }));
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

  return (
    <>
      <Box className="flex h-auto flex-col p-4 justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-2 rounded-xl z-[100]">
        {forgotPasswordEmailPending && <CircularProgress color="inherit" />}
        {resetPasswordPending && <CircularProgress color="inherit" />}
      </Box>
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
            <form
              className="w-full h-full flex justify-evenly items-center flex-col"
              onSubmit={handleResetPwdSubmit}
            >
              <span className="text-2xl font-bold">Reset password</span>
              <TextField
                type="text"
                className="w-[80%] mb-4"
                placeholder="Enter the password sent to your mail"
                variant="standard"
                color="black"
                value={getToken}
                onChange={(e) => setToken(e.target.value)}
              />
              <TextField
                type="text"
                className="w-[80%] mb-4"
                placeholder="New password"
                variant="standard"
                color="black"
                value={getNewPassword}
                onChange={(e) =>
                  handleChange(
                    setNewPassword,
                    (pwd) => pwd.length >= 7,
                    "pwd",
                    e
                  )
                }
              />
              {getValid.find((x) => x.type === "pwd")?.valid && (
                <span className="w-[80%] text-left text-sm text-raddishpinklight text-base">
                  Password should be at least 7 characters!
                </span>
              )}

              <TextField
                type="password"
                className="w-[80%] mb-4"
                placeholder="Confirm New password"
                variant="standard"
                color="black"
                value={getConfirmNewPassword}
                onChange={(e) => {
                  const value = e.target.value;
                  setConfirmNewPassword(value);
                  const isValid = value === getNewPassword;
                  updateValidation("confirmpwd", !isValid);
                }}
              />
              {getValid.find((x) => x.type === "confirmpwd")?.valid && (
                <span className="w-[80%] text-left text-sm text-raddishpinklight text-base">
                  Password is not matching!
                </span>
              )}
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#70645C" }}
                className="hover:bg-black"
              >
                Reset
              </Button>
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
            <form
              className="w-full h-full flex justify-evenly items-center flex-col"
              onSubmit={handleEmailSubmit}
            >
              <span className="text-2xl font-bold">Enter your mail</span>
              <TextField
                type="email"
                className="w-[80%] mb-4"
                placeholder="Enter your mail to receive the OTP"
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
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#70645C" }}
                className="hover:bg-black"
              >
                Send email
              </Button>
            </form>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ForgotPwdPage;
