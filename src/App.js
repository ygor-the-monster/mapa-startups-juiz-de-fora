import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});


const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="My AppBar" >
      <RaisedButton label="Cadastrar sua Empresa" onButtonPress={() => {}} />
    </AppBar>

  </MuiThemeProvider>
);

export default App;
