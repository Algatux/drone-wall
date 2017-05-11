import React, {Component} from 'react';
import BuildList from './components/BuildList';
import './App.css';
import Configuration from './Conf';

class App extends Component {

    constructor(props) {
        super(props);
        this.conf = new Configuration();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Drone Wall</h2>
                </div>
                <BuildList owner={this.conf.repository.owner} name={this.conf.repository.name} />
            </div>
        );
    }
}

export default App;
