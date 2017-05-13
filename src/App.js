import React, {Component} from 'react';
import BuildList from './components/BuildList';
import './App.css';
import Configuration from './Conf';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';

//injectTapEventPlugin();

class App extends Component {

    constructor(props) {
        super(props);
        this.conf = new Configuration();
    }

    render() {
        return (
            <MuiThemeProvider>
                <Grid fluid>
                    <Row>
                        <Col xs={6} md={3}>
                            Drone awall
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            <BuildList owner={this.conf.repository.owner} name={this.conf.repository.name} />
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
