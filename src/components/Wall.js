import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Menu from './Menu';
import BuildList from './BuildList';
import Configuration from './../Conf';

class Wall extends Component {

    constructor(props) {
        super(props);
        this.conf = new Configuration();
    }

    render(){
        return(
            <div className="drone-wall-root">
                <Menu />
                <Grid fluid>
                    <Row>
                        <Col xs={4} md={12}>
                            <BuildList owner={this.conf.repository.owner} name={this.conf.repository.name} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Wall;