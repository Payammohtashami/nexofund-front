import React from "react";
import { ScaleLoader } from "react-spinners";
import { Box, Button, Skeleton } from "@mui/material";

const CustomButton = ({
  loading,
  disabled,
  extraSx = {},
  type = "button",
  fullWidth,
  children,
  variant,
  color='primary',
  loaderWidth = "100%",
  loaderHeight = "25",
  withSpinner = false,
  onClick = () => {},
  spinnerColor="#555"
}) => {

  if (loading) {
    return withSpinner ? (
      <Button
        type={type}
        variant={variant}
        fullWidth={fullWidth}
        disabled={loading || disabled}
        color={color}
        sx={{ ...extraSx, borderRadius: 2.4 }}
      >
        <Box sx={{mb: -0.9}}>
          <ScaleLoader height={20} width={3} color={spinnerColor} />
        </Box>
      </Button>
    ) : (
      <Skeleton
        width={loaderWidth}
        height={loaderHeight}
        variant={"rectangular"}
        sx={{
          borderRadius: 3,
        }}
      />
    );
  }

  return (
    <Button
      type={type}
      color={color}
      variant={variant}
      onClick={onClick}
      sx={{ ...extraSx, }}
      fullWidth={fullWidth}
      disabled={loading || disabled}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
