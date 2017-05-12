import React, {Component} from 'react';
import './Status.css';

class Status extends Component {

    render() {
        return (
            <div className="status">
                <div className={this.decideBuildColor(this.props.result)} >
                    {this.props.children}
                </div>
            </div>
        );
    }

    decideBuildColor(result) {
        switch (result) {
            case 'success':
                return 'green';
            case 'pending':
                return 'yellow';
            case 'failure':
                return 'red';
            default:
                throw Error;
        }
    }
}

export default Status;
