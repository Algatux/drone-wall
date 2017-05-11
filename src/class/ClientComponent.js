import {Component} from 'react';
import Drone from 'drone-node';
import Configuration from './../Conf';

class ClientComponent extends Component {

    constructor(props) {
        super(props);
        this.conf = new Configuration();
        this.client = new Drone.Client({url: this.conf.hostname, token: this.conf.token});
    }

    getClient() {
        return this.client;
    }
}

export default ClientComponent;