import { InputLabel, styled } from '@mui/material';

export const Label = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  position: 'static',
  color: theme.palette.bulma.light,
  transform: 'none',
  '&.Mui-focused': {
    color: theme.palette.bulma.light,
  },
}));
