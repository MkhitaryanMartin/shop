import { styled } from '@mui/system';
import { IconButton as MIconButton } from '@mui/material';


 const IconButton = styled(MIconButton)(({ theme }) => ({
  color: "#0F172A",
  width: "256px",
  padding: "16px",
  display: "flex",
  justifyContent: "flex-start",
  maxHeight:"60px",
  borderRadius:"10px",
  "& span": {
    marginLeft: "16px",
    marginRight: "8px"
  },
  [`@media (max-width: 1350px)`]: {
    justifyContent: "center",
  },
}));

export default IconButton