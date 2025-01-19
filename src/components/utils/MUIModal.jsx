import { Modal, modalClasses, styled } from "@mui/material";

const MUIModal = styled(Modal)(({ theme }) => ({
  [`& .${modalClasses.modal}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}));

export default MUIModal;
