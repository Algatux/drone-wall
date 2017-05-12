import React, {Component} from 'react';
import Author from './BuildRow/Author'
import Status from './BuildRow/Status'
import BuildDetails from './BuildRow/BuildDetails'
import './BuildRow.css'

class BuildRow extends Component {

    render() {
        return (
            <div className="build-row">
                <Status result={this.props.build.status} >
                    <Author name={this.props.build.author} avatar={this.props.build.author_avatar} />
                    <BuildDetails build={this.props.build} />
                </Status>
            </div>
        );
    }
}

export default BuildRow;
