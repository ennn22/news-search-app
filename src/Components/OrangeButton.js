import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Button from '@mui/material/Button';

const OrangeButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
}));

export default OrangeButton;