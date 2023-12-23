import React from "react";
import Button, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

interface Props extends MuiButtonProps {
  shape?: "round" | "rounded" | "square";
}

export const ButtonComponent: React.FC<Props> = ({
  children,
  fullWidth = false,
  color = "primary",
  shape = "rounded",
  size = "medium",
  ...buttonProps
}) => {
  return (
    <Button
      variant="contained"
      color={color}
      fullWidth={fullWidth}
      sx={{
        borderRadius:
          shape === "round" ? "50%" : shape === "square" ? "0" : "4px",
        fontSize:
          size === "small" ? "0.875rem" : size === "large" ? "1.25rem" : "1rem",
        padding:
          size === "small"
            ? "8px 16px"
            : size === "large"
            ? "12px 24px"
            : "10px 20px",
      }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
