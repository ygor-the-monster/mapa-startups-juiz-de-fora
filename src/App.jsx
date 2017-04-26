import React from 'react';

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import './App.css';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  }
});


class App extends React.Component {
  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="My AppBar" >
            <RaisedButton label="Cadastrar sua Empresa" onButtonPress={() => {}} />
          </AppBar>

          <main>
            {this.props.children}
          </main>

          <footer>
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default App;
