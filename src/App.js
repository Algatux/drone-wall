import React, {Component} from 'react';
import BuildList from './components/BuildList';
import './App.css';
import Configuration from './Conf';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//injectTapEventPlugin();

class App extends Component {

    constructor(props) {
        super(props);
        this.conf = new Configuration();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="App-header">
                        <h2>Drone Wall</h2>
                    </div>
                    <BuildList owner={this.conf.repository.owner} name={this.conf.repository.name} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
