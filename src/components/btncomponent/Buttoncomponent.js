import React from 'react';
import Button from '@material-ui/core/Button';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
function Buttoncomponent(props) {
  
const theme = createTheme({
  palette: {
    primary: green,
  },
});
  return (
    <Button variant="contained" color="primary">
 {props.buttontext}
  </Button>
  )
}

export default Buttoncomponent
