import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const TextInput = styled(TextField)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(1),
  },
  "& .MuiInputBase-input": {
    fontSize: 16,
    padding: "10px 12px",
    color: theme.palette.bulma.light,
    zIndex: 1,
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderRadius: 8,
    backgroundColor: theme.palette.gohan.light,
    border: "1px solid",
    borderColor: theme.palette.beerus.light,
  },
  ".MuiInputAdornment-root": {
    zIndex: 1,
  },
  "input:-webkit-autofill": {
    transition: "background-color 5000s ease-in-out 0s",
    // WebkitTextFillColor: `${
    //   controls_style?.text_color || answer_color
    // } !important`,
    // WebkitBoxShadow: `0 0 0px 1000px ${controls_style?.background_color} inset`,
    // borderRadius: controls_style?.radius + 'px',
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.piccolo.light,
      borderWidth: "2px",
    },
  },
  "& input:valid:focus + fieldset": {
    borderColor: theme.palette.piccolo.light,
    borderWidth: "2px",
  },
  ".MuiOutlinedInput-root:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline ":
    {
      borderColor: theme.palette.beerus.light,
      borderWidth: "2px",
    },
}));
