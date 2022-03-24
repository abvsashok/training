import React from 'react';
import Button from '@material-ui/core/Button';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import { useNavigate } from "react-router-dom";
function Buttoncomponent(props) {

  
const theme = createTheme({
  palette: {
    primary: green,
  },
});
const navigaten=()=>{

}
  return (
    <Button variant="contained" color="primary" onClick={()=>navigaten}>
 {props.buttontext}
  </Button>
  )
}

export default Buttoncomponent
