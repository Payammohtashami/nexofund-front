import { styled } from "@mui/system";
import OtpInput from "react-otp-input";


export const OtpInputCustom = styled(OtpInput)(({ theme }) => ({
    direction: "ltr",
    input: {
      backgroundColor: "transparent",
      boxShadow: "none",
      border: "1px solid gray",
      fontSize: "18px",
      width: "3rem !important",
      textAlign: "center",
      padding: "0.5rem",
      margin: "0 .5rem",
      borderRadius: "8px",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
      "&:focus-visible": {
        outline: "none",
      },
      "&:focus": {
        backgroundColor: "transparent",
        outline: 0,
        boxShadow: "0 0 0 0.25rem rgb(162 111 255 / 25%)",
      },
    },
}));