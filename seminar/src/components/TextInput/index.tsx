import { InputBase } from "@mui/material";
import { styled } from "@mui/system";

export const TextInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 8,
    position: "relative",
    backgroundColor: theme.palette.gohan.light,
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    color: theme.palette.trunks.light,
    "&:focus": {
      borderColor: theme.palette.piccolo.light,
      borderWidth: "2px",
    },
  },
}));
