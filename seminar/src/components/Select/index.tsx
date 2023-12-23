import { Select, styled } from '@mui/material';

export const CustomSelect = styled(Select)(({ theme }) => ({
  marginBlockStart: 6,
  height: '55%',
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.beerus.light,
    borderRadius: 8,
  },
  '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.beerus.light,
    borderWidth: '2px',
  },
}));
