import React, {Component} from 'react';
import './BuildDetails.css';

class BuildDetails extends Component {

    render() {
        return (
            <div className="buildDetails">
                <span className="bold">
                    {this.props.build.branch}
                </span>

                <span>
                    {this.props.build.message}
                </span>
            </div>
        );
    }
}

export default BuildDetails;
