import React, {Component} from 'react';
import Drone from 'drone-node';

class BuildRow extends Component {

    constructor(props) {
        super(props);

        this.client = new Drone.Client({
            url: 'https://drone.facile.it',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXh0IjoiYWdhbGxpIiwidHlwZSI6InVzZXIifQ.2reUxU-5LXyglPjc_33ONmPJuzeLUNszMD8cD69_IZM'
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
