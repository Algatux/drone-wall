import React, {Component} from 'react';
import './App.css';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Wall from './components/Wall';

//injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Wall />
            </MuiThemeProvider>
        );
    }
}

export default App;
