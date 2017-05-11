import React, {Component} from 'react';
import Drone from 'drone-node';

class BuildRow extends Component {

    constructor(props) {
        super(props);

        this.client = new Drone.Client({
            url: '',
            token: ''
        });
    }

    render() {
        return (
            <div className="build-row">
                <div>{this.props.status}</div>
                <div>{this.props.author}</div>
            </div>
        );
    }
}

export default BuildRow;
