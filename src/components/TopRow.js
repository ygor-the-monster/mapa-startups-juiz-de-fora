import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import logo from '../images/index';


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const TopRow = () => (
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="Startups juiz de fora" />
      </MuiThemeProvider>
    )
  }
);


export default TopRow;
