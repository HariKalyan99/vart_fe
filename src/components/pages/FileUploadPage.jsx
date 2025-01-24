import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Typography, Paper, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uploadCsvAnimals } from "../../../slices/CRUDSlices/createManyAnimal";
import { crudActions } from "../../../slices/CRUDSlices/CrudOperationSlice";
import { useNavigate } from "react-router-dom";
import { getAnimalList } from "../../../slices/CRUDSlices/getAnimalList";
import Cookies from "js-cookie";
import NavigationBar from "../common-templates/NavigationBar";
import FooterBar from "../common-templates/FooterBar";
import upload from '../../assets/upload.gif'

const FileUpload = () => {
  const [fileName, setFileName] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {  uploadCsvAnimalCreation, uploadCsvAnimalCreationPending } =
    useSelector((state) => state.crud);
  const token = Cookies.get("jwt");
  if (!token) {
    navigate("/login");
  }

  useEffect(() => {
    if (
      uploadCsvAnimalCreation?.status === "success" &&
      uploadCsvAnimalCreation
    ) {
      dispatch(getAnimalList());
      dispatch(crudActions.resetUploadCsvAnimalCreation());
      navigate("/dashboard");
    }
  }, [uploadCsvAnimalCreation]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFileName(file.name);
    dispatch(uploadCsvAnimals(file));
    setTimeout(() => {
      setFileName(null)
    }, 2000)
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".csv",
    multiple: false,
  });

  return (
    <Box className="bg-nostalgicblue w-full min-h-[100vh] h-auto flex justify-center flex-col">
      <NavigationBar navStyle={"create"} />
      <Box className="w-full h-full mt-4 flex justify-center">
        <Box className="min-h-[85vh] container mt-[2rem] w-full flex justify-center items-center gap-4 flex-col">
        <span className="text-[3rem] font-bold text-white">Is the animal family here altogether?</span>
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 500,
              border: "2px dashed rgb(0, 0, 0)",
              padding: 2,
              marginBottom: 3,
              width: "50%",
              backgroundColor: "#FFEBE2"
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6">
                {isDragActive
                  ? "Drop the file here..."
                  : "Drag & drop a CSV file here, or click to select one"}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#615A58",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                  marginTop: "2rem",
                }}
                onClick={() => document.getElementById("file-input").click()}
              >
                Choose File
              </Button>

              {uploadCsvAnimalCreationPending && fileName && ( 
                <Box className="flex flex-col justify-center items-center">
                  <Typography variant="body1" sx={{ marginTop: 2 }}>
                  File Selected: {fileName || ""} uploading....
                </Typography>
                <img src={upload} alt="scanning" className="h-[30%] w-[30%]"/>
                </Box>
              )}
            </Box>
          </Paper>
        </Box>
      </Box>
      <FooterBar create />
    </Box>
  );
};

export default FileUpload;
